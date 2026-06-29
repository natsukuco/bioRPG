const Game = (() => {
    const RANKS = [
        { name: 'Cabin Boy', threshold: 0 },
        { name: 'Apprentice Naturalist', threshold: 50 },
        { name: 'Naturalist', threshold: 150 },
        { name: 'Fellow', threshold: 300 },
        { name: 'Professor', threshold: 500 },
        { name: 'Royal Society Fellow', threshold: 750 }
    ];

    const SAVE_KEY = 'darwins_voyage_save';

    let state = {
        currentChapter: 0,
        currentPuzzleIndex: 0,
        currentStoryIndex: 0,
        xp: 0,
        rank: RANKS[0].name,
        chaptersCompleted: [],
        chapterStars: {},
        chapterXP: {},
        journalEntries: {},
        hintsUsed: 0,
        currentHintsUsed: 0,
        inStory: true,
        previousScreen: null
    };

    const chapters = [];

    function init() {
        loadSave();
        bindEvents();
        spawnEmbers();
        showTitleScreen();
    }

    function spawnEmbers() {
        const field = document.getElementById('ember-field');
        if (!field) return;
        const count = 18;
        for (let i = 0; i < count; i++) {
            const ember = document.createElement('div');
            ember.className = 'ember';
            ember.style.left = Math.random() * 100 + '%';
            const duration = 7 + Math.random() * 9;
            ember.style.animationDuration = duration + 's';
            ember.style.animationDelay = (-Math.random() * duration) + 's';
            const size = 2 + Math.random() * 2.5;
            ember.style.width = size + 'px';
            ember.style.height = size + 'px';
            field.appendChild(ember);
        }
    }

    function registerChapter(chapterData) {
        chapters.push(chapterData);
    }

    function bindEvents() {
        document.getElementById('btn-new-game').addEventListener('click', newGame);
        document.getElementById('btn-continue').addEventListener('click', showMap);
        document.getElementById('btn-journal').addEventListener('click', () => showJournal('title-screen'));
        document.getElementById('btn-journal-map').addEventListener('click', () => showJournal('map-screen'));
        document.getElementById('btn-journal-story').addEventListener('click', () => showJournal('story-screen'));
        document.getElementById('btn-journal-puzzle').addEventListener('click', () => showJournal('puzzle-screen'));
        document.getElementById('btn-journal-close').addEventListener('click', closeJournal);
        document.getElementById('btn-starchart').addEventListener('click', showConstellation);
        document.getElementById('btn-constellation-close').addEventListener('click', showMap);
        document.getElementById('btn-journal-prev').addEventListener('click', () => turnJournalPage(-1));
        document.getElementById('btn-journal-next').addEventListener('click', () => turnJournalPage(1));
        document.getElementById('btn-story-next').addEventListener('click', advanceStory);
        document.getElementById('btn-check-answer').addEventListener('click', checkAnswer);
        document.getElementById('btn-puzzle-next').addEventListener('click', advancePuzzle);
        document.getElementById('btn-hint').addEventListener('click', useHint);
        document.getElementById('btn-complete-continue').addEventListener('click', showMap);
    }

    function showTitleScreen() {
        if (state.chaptersCompleted.length > 0 || state.xp > 0) {
            document.getElementById('btn-continue').style.display = 'block';
        }
        switchScreen('title-screen');
    }

    function newGame() {
        state = {
            currentChapter: 0,
            currentPuzzleIndex: 0,
            currentStoryIndex: 0,
            xp: 0,
            rank: RANKS[0].name,
            chaptersCompleted: [],
            chapterStars: {},
            chapterXP: {},
            journalEntries: {},
            hintsUsed: 0,
            currentHintsUsed: 0,
            inStory: true,
            previousScreen: null
        };
        save();
        showMap();
    }

    function showMap() {
        updatePlayerInfo();
        renderMap();
        switchScreen('map-screen');
    }

    function renderMap() {
        const mapContainer = document.getElementById('voyage-map');
        mapContainer.innerHTML = '';

        chapters.forEach((chapter, index) => {
            const isCompleted = state.chaptersCompleted.includes(index);
            const isCurrent = index === getNextChapter();
            const isLocked = index > getNextChapter();

            const stop = document.createElement('div');
            stop.className = `map-stop ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`;

            const stars = state.chapterStars[index] || 0;
            const starDisplay = isCompleted ? getStarString(stars) : '';

            stop.innerHTML = `
                <div class="stop-marker">${index + 1}</div>
                <div class="stop-info">
                    <div class="stop-title">Ch ${index + 1}: ${chapter.title}</div>
                    <div class="stop-location">${chapter.location}</div>
                </div>
                <div class="stop-stars">${starDisplay}</div>
            `;

            if (!isLocked) {
                stop.addEventListener('click', () => startChapter(index));
            }

            mapContainer.appendChild(stop);
        });
    }

    function getNextChapter() {
        for (let i = 0; i < chapters.length; i++) {
            if (!state.chaptersCompleted.includes(i)) return i;
        }
        return chapters.length - 1;
    }

    function getStarString(count) {
        return '★'.repeat(count) + '☆'.repeat(3 - count);
    }

    // Fixed constellation coordinates (percent of the chart box) for the 7 chapters
    const STAR_COORDS = [
        { x: 14, y: 70 },
        { x: 27, y: 38 },
        { x: 40, y: 62 },
        { x: 52, y: 28 },
        { x: 64, y: 58 },
        { x: 78, y: 32 },
        { x: 88, y: 66 }
    ];

    function showConstellation() {
        updatePlayerInfo();
        renderConstellation();
        switchScreen('constellation-screen');
    }

    function renderConstellation() {
        const chart = document.getElementById('star-chart');
        const nextChapter = getNextChapter();

        const lines = [];
        for (let i = 0; i < chapters.length - 1; i++) {
            const a = STAR_COORDS[i];
            const b = STAR_COORDS[i + 1];
            const lit = state.chaptersCompleted.includes(i) && state.chaptersCompleted.includes(i + 1);
            lines.push(`<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"
                stroke="${lit ? '#e3c266' : '#5a4a32'}" stroke-width="${lit ? 0.6 : 0.4}"
                stroke-dasharray="${lit ? '' : '1.5,1.5'}" opacity="${lit ? 0.9 : 0.45}"
                vector-effect="non-scaling-stroke"/>`);
        }

        const svg = `<svg viewBox="0 0 100 100" preserveAspectRatio="none" class="constellation-lines">
            ${lines.join('')}
        </svg>`;

        const nodes = chapters.map((chapter, index) => {
            const isCompleted = state.chaptersCompleted.includes(index);
            const isCurrent = index === nextChapter;
            const isLocked = index > nextChapter;
            const coord = STAR_COORDS[index];
            const stars = state.chapterStars[index] || 0;
            const cls = `star-node ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`;
            const rating = isCompleted ? `<span class="star-rating">${getStarString(stars)}</span>` : '';
            return `<div class="${cls}" data-index="${index}" style="left:${coord.x}%;top:${coord.y}%;">
                <span class="star-glyph">&#10022;</span>
                <span class="star-label">${index + 1}. ${chapter.title}</span>
                ${rating}
            </div>`;
        }).join('');

        chart.innerHTML = svg + nodes;

        chart.querySelectorAll('.star-node').forEach(node => {
            const index = parseInt(node.dataset.index);
            if (!node.classList.contains('locked')) {
                node.addEventListener('click', () => startChapter(index));
            }
        });
    }

    const LORE_TIPS = [
        'Nature, it is said, keeps her secrets locked within forms too small for the naked eye.',
        'The careful observer sees not chaos, but a hidden order writ across all living things.',
        'To name a thing is the first step toward understanding it — so the old naturalists believed.',
        'Every specimen tells a story, if one only learns the language in which it is written.',
        'Knowledge, like the tide, comes slowly — yet it reshapes whole coastlines in time.'
    ];

    let loadingTimer = null;
    let loadingHandler = null;

    function startChapter(index) {
        state.currentChapter = index;
        state.currentStoryIndex = 0;
        state.currentPuzzleIndex = 0;
        state.currentHintsUsed = 0;
        state.chapterXP[index] = 0;
        state.inStory = true;
        save();
        showLoadingScreen(index, showStory);
    }

    function showLoadingScreen(index, onDone) {
        const chapter = chapters[index];
        const loreSource = (chapter.lore && chapter.lore.length)
            ? chapter.lore
            : LORE_TIPS;
        const lore = loreSource[Math.floor(Math.random() * loreSource.length)];

        document.getElementById('loading-chapter').textContent =
            `Chapter ${index + 1}: ${chapter.title}`;
        document.getElementById('loading-lore').textContent = lore;
        switchScreen('loading-screen');

        let finished = false;
        const finish = () => {
            if (finished) return;
            finished = true;
            if (loadingTimer) { clearTimeout(loadingTimer); loadingTimer = null; }
            const screen = document.getElementById('loading-screen');
            screen.removeEventListener('click', loadingHandler);
            loadingHandler = null;
            onDone();
        };

        loadingHandler = finish;
        document.getElementById('loading-screen').addEventListener('click', loadingHandler);
        loadingTimer = setTimeout(finish, 3200);
    }

    function showStory() {
        const chapter = chapters[state.currentChapter];
        const storyScenes = chapter.story;

        if (state.currentStoryIndex >= storyScenes.length) {
            showPuzzle();
            return;
        }

        updatePlayerInfo();
        const scene = storyScenes[state.currentStoryIndex];
        Story.display(scene.speaker, scene.text);
        switchScreen('story-screen');
    }

    function advanceStory() {
        if (Story.isTyping()) {
            Story.skipTyping();
            return;
        }

        state.currentStoryIndex++;
        const chapter = chapters[state.currentChapter];

        if (state.currentStoryIndex >= chapter.story.length) {
            state.inStory = false;
            showPuzzle();
        } else {
            showStory();
        }
    }

    function showPuzzle() {
        const chapter = chapters[state.currentChapter];

        if (state.currentPuzzleIndex >= chapter.puzzles.length) {
            completeChapter();
            return;
        }

        updatePlayerInfo();
        const puzzle = chapter.puzzles[state.currentPuzzleIndex];

        document.getElementById('puzzle-title').textContent = puzzle.title;
        document.getElementById('puzzle-instruction').textContent = puzzle.instruction;
        document.getElementById('puzzle-feedback').classList.add('hidden');
        document.getElementById('btn-check-answer').classList.remove('hidden');
        document.getElementById('btn-puzzle-next').classList.add('hidden');
        document.getElementById('btn-hint').disabled = false;

        const hintBtn = document.getElementById('btn-hint');
        hintBtn.textContent = `Hint (-5 DP)`;

        Puzzles.render(puzzle);
        switchScreen('puzzle-screen');
    }

    function checkAnswer() {
        const chapter = chapters[state.currentChapter];
        const puzzle = chapter.puzzles[state.currentPuzzleIndex];
        const result = Puzzles.check(puzzle);

        const feedback = document.getElementById('puzzle-feedback');
        feedback.classList.remove('hidden', 'correct', 'incorrect');

        if (result.correct) {
            const xpEarned = puzzle.xp || 20;
            addXP(xpEarned);
            state.chapterXP[state.currentChapter] = (state.chapterXP[state.currentChapter] || 0) + xpEarned;
            feedback.classList.add('correct');
            feedback.innerHTML = `<strong>Correct!</strong> +${xpEarned} Discovery Points<br>${puzzle.explanation || ''}`;
        } else {
            feedback.classList.add('incorrect');
            feedback.innerHTML = `<strong>Not quite.</strong><br>${result.message || puzzle.explanation || 'Review your answer and try the next puzzle.'}`;
        }

        document.getElementById('btn-check-answer').classList.add('hidden');
        document.getElementById('btn-puzzle-next').classList.remove('hidden');
        document.getElementById('btn-hint').disabled = true;
        Puzzles.reveal(puzzle, result);
        save();
    }

    function advancePuzzle() {
        const chapter = chapters[state.currentChapter];
        state.currentPuzzleIndex++;

        if (state.currentPuzzleIndex < chapter.puzzles.length) {
            const nextPuzzle = chapter.puzzles[state.currentPuzzleIndex];
            if (nextPuzzle.storyBefore) {
                Story.display(nextPuzzle.storyBefore.speaker, nextPuzzle.storyBefore.text);
                switchScreen('story-screen');
                state.inStory = true;
                const originalAdvance = advanceStory;
                const handler = () => {
                    if (Story.isTyping()) {
                        Story.skipTyping();
                        return;
                    }
                    state.inStory = false;
                    document.getElementById('btn-story-next').removeEventListener('click', handler);
                    document.getElementById('btn-story-next').addEventListener('click', advanceStory);
                    showPuzzle();
                };
                document.getElementById('btn-story-next').removeEventListener('click', advanceStory);
                document.getElementById('btn-story-next').addEventListener('click', handler);
            } else {
                showPuzzle();
            }
        } else {
            completeChapter();
        }
    }

    function completeChapter() {
        const chapterIndex = state.currentChapter;
        const chapter = chapters[chapterIndex];

        if (!state.chaptersCompleted.includes(chapterIndex)) {
            state.chaptersCompleted.push(chapterIndex);
        }

        const earnedXP = state.chapterXP[chapterIndex] || 0;
        const maxXP = chapter.puzzles.reduce((sum, p) => sum + (p.xp || 20), 0);
        const ratio = earnedXP / maxXP;
        let stars = 1;
        if (ratio >= 0.9 && state.currentHintsUsed === 0) stars = 3;
        else if (ratio >= 0.7) stars = 2;

        state.chapterStars[chapterIndex] = Math.max(state.chapterStars[chapterIndex] || 0, stars);

        if (chapter.journal) {
            state.journalEntries[chapterIndex] = chapter.journal;
        }

        save();

        document.getElementById('complete-title').textContent = `${chapter.title} — Complete!`;
        document.getElementById('complete-stars').textContent = getStarString(stars);
        document.getElementById('complete-xp').textContent = `Discovery Points earned: ${earnedXP}`;

        const journalDiv = document.getElementById('complete-journal');
        if (chapter.journal && chapter.journal.length > 0) {
            journalDiv.innerHTML = `<h3>New Journal Entries</h3><ul>${chapter.journal.map(e => `<li>${e}</li>`).join('')}</ul>`;
        } else {
            journalDiv.innerHTML = '';
        }

        switchScreen('complete-screen');
    }

    function useHint() {
        if (state.xp < 5) return;

        const chapter = chapters[state.currentChapter];
        const puzzle = chapter.puzzles[state.currentPuzzleIndex];

        if (!puzzle.hints || puzzle.hints.length === 0) return;

        const hintIndex = Math.min(state.currentHintsUsed, puzzle.hints.length - 1);
        const hint = puzzle.hints[hintIndex];

        state.xp -= 5;
        state.currentHintsUsed++;
        updatePlayerInfo();
        save();

        const existing = document.querySelector('.hint-text');
        if (existing) existing.remove();

        const hintEl = document.createElement('div');
        hintEl.className = 'hint-text';
        hintEl.textContent = hint;
        document.getElementById('puzzle-area').appendChild(hintEl);

        if (state.currentHintsUsed >= (puzzle.hints ? puzzle.hints.length : 1)) {
            document.getElementById('btn-hint').disabled = true;
        }
    }

    function addXP(amount) {
        state.xp += amount;
        updateRank();
        updatePlayerInfo();
    }

    function updateRank() {
        for (let i = RANKS.length - 1; i >= 0; i--) {
            if (state.xp >= RANKS[i].threshold) {
                state.rank = RANKS[i].name;
                break;
            }
        }
    }

    function updatePlayerInfo() {
        const rankEls = document.querySelectorAll('.rank-badge');
        const xpEls = document.querySelectorAll('.xp-display');
        rankEls.forEach(el => el.textContent = state.rank);
        xpEls.forEach(el => el.textContent = `${state.xp} DP`);
    }

    function showJournal(fromScreen) {
        state.previousScreen = fromScreen;
        state.journalPage = 0;
        renderJournal();
        switchScreen('journal-screen');
    }

    function closeJournal() {
        switchScreen(state.previousScreen || 'map-screen');
    }

    // Each "leaf" is a single page of the open tome. Pages are shown two at a time.
    function buildJournalLeaves() {
        const leaves = [];
        const indices = Object.keys(state.journalEntries)
            .map(Number)
            .sort((a, b) => a - b);

        indices.forEach(index => {
            const chapter = chapters[index];
            const facts = state.journalEntries[index];
            leaves.push(`
                <div class="tome-chapter-title">Chapter ${index + 1}</div>
                <h3 class="tome-heading">${chapter.title}</h3>
                <ul class="tome-list">${facts.map(f => `<li>${f}</li>`).join('')}</ul>
            `);
        });
        return leaves;
    }

    function renderJournal() {
        const tome = document.getElementById('tome');
        const nav = document.querySelector('.tome-nav');
        const leftEl = document.getElementById('tome-page-left');
        const rightEl = document.getElementById('tome-page-right');
        const indicator = document.getElementById('journal-page-indicator');

        const leaves = buildJournalLeaves();

        if (leaves.length === 0) {
            tome.style.display = 'none';
            nav.style.display = 'none';
            let empty = document.getElementById('journal-empty');
            if (!empty) {
                empty = document.createElement('div');
                empty.id = 'journal-empty';
                empty.className = 'journal-empty';
                document.getElementById('journal-content').appendChild(empty);
            }
            empty.style.display = 'block';
            empty.textContent = 'The pages are yet blank. Complete a chapter, and your discoveries shall be inscribed here.';
            return;
        }

        const emptyEl = document.getElementById('journal-empty');
        if (emptyEl) emptyEl.style.display = 'none';
        tome.style.display = '';
        nav.style.display = '';

        const totalSpreads = Math.ceil(leaves.length / 2);
        if (state.journalPage == null) state.journalPage = 0;
        state.journalPage = Math.max(0, Math.min(state.journalPage, totalSpreads - 1));

        const leftIdx = state.journalPage * 2;
        const rightIdx = leftIdx + 1;

        leftEl.innerHTML = leaves[leftIdx] || '';
        rightEl.innerHTML = leaves[rightIdx] || '<div class="tome-blank">&#10070;</div>';

        // page-turn animation
        tome.classList.remove('turning');
        void tome.offsetWidth;
        tome.classList.add('turning');

        indicator.textContent = `Page ${state.journalPage + 1} of ${totalSpreads}`;
        document.getElementById('btn-journal-prev').disabled = state.journalPage === 0;
        document.getElementById('btn-journal-next').disabled = state.journalPage >= totalSpreads - 1;
    }

    function turnJournalPage(dir) {
        if (state.journalPage == null) state.journalPage = 0;
        state.journalPage += dir;
        renderJournal();
    }

    function switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    function save() {
        try {
            localStorage.setItem(SAVE_KEY, JSON.stringify(state));
        } catch (e) { /* localStorage unavailable */ }
    }

    function loadSave() {
        try {
            const saved = localStorage.getItem(SAVE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                state = { ...state, ...parsed };
                updateRank();
            }
        } catch (e) { /* corrupted save, use defaults */ }
    }

    function getState() {
        return state;
    }

    return { init, registerChapter, getState, showMap, addXP };
})();
