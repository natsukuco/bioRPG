const Puzzles = (() => {
    let currentAnswer = null;
    let puzzleState = {};

    function render(puzzle) {
        currentAnswer = null;
        puzzleState = {};
        const area = document.getElementById('puzzle-area');
        area.innerHTML = '';

        switch (puzzle.type) {
            case 'multiple-choice': renderMultipleChoice(area, puzzle); break;
            case 'matching': renderMatching(area, puzzle); break;
            case 'sequencing': renderSequencing(area, puzzle); break;
            case 'labeling': renderLabeling(area, puzzle); break;
            case 'journal-entry': renderJournalEntry(area, puzzle); break;
            case 'tracing': renderTracing(area, puzzle); break;
        }
    }

    function check(puzzle) {
        switch (puzzle.type) {
            case 'multiple-choice': return checkMultipleChoice(puzzle);
            case 'matching': return checkMatching(puzzle);
            case 'sequencing': return checkSequencing(puzzle);
            case 'labeling': return checkLabeling(puzzle);
            case 'journal-entry': return checkJournalEntry(puzzle);
            case 'tracing': return checkTracing(puzzle);
        }
        return { correct: false };
    }

    function reveal(puzzle, result) {
        switch (puzzle.type) {
            case 'multiple-choice': revealMultipleChoice(puzzle, result); break;
            case 'matching': revealMatching(puzzle, result); break;
            case 'sequencing': revealSequencing(puzzle, result); break;
            case 'labeling': revealLabeling(puzzle, result); break;
            case 'journal-entry': revealJournalEntry(puzzle, result); break;
            case 'tracing': revealTracing(puzzle, result); break;
        }
    }

    // --- MULTIPLE CHOICE ---
    function renderMultipleChoice(area, puzzle) {
        const container = document.createElement('div');
        container.className = 'mc-options';

        puzzle.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'mc-option';
            btn.textContent = opt;
            btn.addEventListener('click', () => {
                container.querySelectorAll('.mc-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                currentAnswer = i;
            });
            container.appendChild(btn);
        });

        area.appendChild(container);
    }

    function checkMultipleChoice(puzzle) {
        return { correct: currentAnswer === puzzle.correctIndex };
    }

    function revealMultipleChoice(puzzle, result) {
        const options = document.querySelectorAll('.mc-option');
        options.forEach((opt, i) => {
            if (i === puzzle.correctIndex) {
                opt.classList.add('correct-answer');
            } else if (i === currentAnswer && !result.correct) {
                opt.classList.add('wrong-answer');
            }
            opt.style.pointerEvents = 'none';
        });
    }

    // --- MATCHING ---
    function renderMatching(area, puzzle) {
        puzzleState.matches = {};
        puzzleState.selectedLeft = null;

        const container = document.createElement('div');
        container.className = 'matching-container';

        const leftCol = document.createElement('div');
        leftCol.className = 'matching-column';
        leftCol.innerHTML = `<h3>${puzzle.leftTitle || 'Items'}</h3>`;

        const rightCol = document.createElement('div');
        rightCol.className = 'matching-column';
        rightCol.innerHTML = `<h3>${puzzle.rightTitle || 'Matches'}</h3>`;

        const shuffledRight = [...puzzle.right].sort(() => Math.random() - 0.5);

        puzzle.left.forEach((item, i) => {
            const el = document.createElement('div');
            el.className = 'match-item';
            el.textContent = item;
            el.dataset.index = i;
            el.dataset.side = 'left';
            el.addEventListener('click', () => handleMatchClick(el, 'left'));
            leftCol.appendChild(el);
        });

        shuffledRight.forEach((item, i) => {
            const el = document.createElement('div');
            el.className = 'match-item';
            el.textContent = item;
            el.dataset.originalIndex = puzzle.right.indexOf(item);
            el.dataset.side = 'right';
            el.addEventListener('click', () => handleMatchClick(el, 'right'));
            rightCol.appendChild(el);
        });

        container.appendChild(leftCol);
        container.appendChild(rightCol);
        area.appendChild(container);
    }

    function handleMatchClick(el, side) {
        if (el.classList.contains('matched')) return;

        if (side === 'left') {
            document.querySelectorAll('.match-item[data-side="left"]').forEach(e => e.classList.remove('selected'));
            el.classList.add('selected');
            puzzleState.selectedLeft = el.dataset.index;
        } else if (puzzleState.selectedLeft !== null) {
            puzzleState.matches[puzzleState.selectedLeft] = el.dataset.originalIndex;

            const leftEl = document.querySelector(`.match-item[data-side="left"][data-index="${puzzleState.selectedLeft}"]`);
            leftEl.classList.remove('selected');
            leftEl.classList.add('matched');
            el.classList.add('matched');

            puzzleState.selectedLeft = null;
        }
    }

    function checkMatching(puzzle) {
        const matches = puzzleState.matches;
        if (Object.keys(matches).length < puzzle.left.length) {
            return { correct: false, message: 'Match all items before checking.' };
        }
        const allCorrect = Object.entries(matches).every(([l, r]) => parseInt(l) === parseInt(r));
        return { correct: allCorrect };
    }

    function revealMatching(puzzle, result) {
        if (!result.correct) {
            Object.entries(puzzleState.matches).forEach(([l, r]) => {
                const leftEl = document.querySelector(`.match-item[data-side="left"][data-index="${l}"]`);
                const rightEl = document.querySelector(`.match-item[data-side="right"][data-original-index="${r}"]`);
                if (parseInt(l) === parseInt(r)) {
                    leftEl.classList.add('matched');
                    rightEl.classList.add('matched');
                } else {
                    leftEl.classList.add('wrong');
                    rightEl.classList.add('wrong');
                }
            });
        }
    }

    // --- SEQUENCING ---
    function renderSequencing(area, puzzle) {
        const shuffled = puzzle.items.map((text, i) => ({ text, correctPos: i }))
            .sort(() => Math.random() - 0.5);

        puzzleState.items = shuffled;

        const container = document.createElement('div');
        container.className = 'sequence-container';

        shuffled.forEach((item, i) => {
            const el = document.createElement('div');
            el.className = 'sequence-item';
            el.draggable = true;
            el.dataset.index = i;
            el.innerHTML = `<span class="sequence-number">${i + 1}</span><span class="sequence-text">${item.text}</span>`;

            el.addEventListener('dragstart', (e) => {
                el.classList.add('dragging');
                e.dataTransfer.setData('text/plain', i.toString());
            });
            el.addEventListener('dragend', () => el.classList.remove('dragging'));
            el.addEventListener('dragover', (e) => {
                e.preventDefault();
                el.classList.add('drag-over');
            });
            el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
            el.addEventListener('drop', (e) => {
                e.preventDefault();
                el.classList.remove('drag-over');
                const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                swapSequenceItems(container, fromIndex, parseInt(el.dataset.index));
            });

            el.addEventListener('click', () => {
                handleSequenceClick(container, parseInt(el.dataset.index));
            });

            container.appendChild(el);
        });

        area.appendChild(container);
    }

    function handleSequenceClick(container, index) {
        const items = container.querySelectorAll('.sequence-item');
        if (puzzleState.selectedSequenceItem === undefined || puzzleState.selectedSequenceItem === null) {
            puzzleState.selectedSequenceItem = index;
            items[index].classList.add('drag-over');
        } else {
            items[puzzleState.selectedSequenceItem].classList.remove('drag-over');
            swapSequenceItems(container, puzzleState.selectedSequenceItem, index);
            puzzleState.selectedSequenceItem = null;
        }
    }

    function swapSequenceItems(container, fromIndex, toIndex) {
        if (fromIndex === toIndex) return;
        const temp = puzzleState.items[fromIndex];
        puzzleState.items[fromIndex] = puzzleState.items[toIndex];
        puzzleState.items[toIndex] = temp;

        const items = container.querySelectorAll('.sequence-item');
        items.forEach((el, i) => {
            el.dataset.index = i;
            el.querySelector('.sequence-number').textContent = i + 1;
            el.querySelector('.sequence-text').textContent = puzzleState.items[i].text;
        });
    }

    function checkSequencing(puzzle) {
        const correct = puzzleState.items.every((item, i) => item.correctPos === i);
        return { correct };
    }

    function revealSequencing(puzzle, result) {
        if (!result.correct) {
            const container = document.querySelector('.sequence-container');
            const items = container.querySelectorAll('.sequence-item');
            items.forEach((el, i) => {
                if (puzzleState.items[i].correctPos !== i) {
                    el.style.borderColor = 'var(--error)';
                } else {
                    el.style.borderColor = 'var(--success)';
                }
            });
        }
    }

    // --- LABELING ---
    function renderLabeling(area, puzzle) {
        puzzleState.placements = {};
        puzzleState.selectedLabel = null;

        const container = document.createElement('div');
        container.className = 'labeling-container';

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', puzzle.diagram.viewBox || '0 0 400 300');
        svg.classList.add('diagram-svg');
        svg.innerHTML = puzzle.diagram.svg;
        container.appendChild(svg);

        const targets = document.createElement('div');
        targets.className = 'label-targets';

        puzzle.targets.forEach((target, i) => {
            const dot = document.createElement('div');
            dot.className = 'label-target';
            dot.style.left = target.x + '%';
            dot.style.top = target.y + '%';
            dot.dataset.index = i;
            dot.title = 'Drop a label here';
            dot.addEventListener('click', () => placeLabel(dot, i));
            targets.appendChild(dot);
        });

        container.appendChild(targets);
        area.appendChild(container);

        const bank = document.createElement('div');
        bank.className = 'label-bank';

        const shuffledLabels = [...puzzle.labels].sort(() => Math.random() - 0.5);
        shuffledLabels.forEach(label => {
            const chip = document.createElement('div');
            chip.className = 'label-chip';
            chip.textContent = label;
            chip.addEventListener('click', () => selectLabel(chip, label));
            bank.appendChild(chip);
        });

        area.appendChild(bank);
    }

    function selectLabel(chip, label) {
        if (chip.classList.contains('placed')) return;
        document.querySelectorAll('.label-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
        puzzleState.selectedLabel = label;
    }

    function placeLabel(dot, targetIndex) {
        if (!puzzleState.selectedLabel) return;

        if (puzzleState.placements[targetIndex]) {
            const oldLabel = puzzleState.placements[targetIndex];
            document.querySelectorAll('.label-chip').forEach(c => {
                if (c.textContent === oldLabel) c.classList.remove('placed');
            });
        }

        puzzleState.placements[targetIndex] = puzzleState.selectedLabel;
        dot.classList.add('filled');
        dot.title = puzzleState.selectedLabel;

        const labelEl = dot.querySelector('.placed-label') || document.createElement('span');
        labelEl.className = 'placed-label';
        labelEl.style.cssText = 'position:absolute;top:50%;left:120%;transform:translateY(-50%);white-space:nowrap;font-size:0.75rem;color:var(--ink);font-weight:bold;';
        labelEl.textContent = puzzleState.selectedLabel;
        dot.appendChild(labelEl);

        document.querySelectorAll('.label-chip').forEach(c => {
            if (c.textContent === puzzleState.selectedLabel) c.classList.add('placed');
        });

        puzzleState.selectedLabel = null;
        document.querySelectorAll('.label-chip').forEach(c => c.classList.remove('selected'));
    }

    function checkLabeling(puzzle) {
        if (Object.keys(puzzleState.placements).length < puzzle.targets.length) {
            return { correct: false, message: 'Place all labels before checking.' };
        }
        const correct = puzzle.targets.every((target, i) => puzzleState.placements[i] === target.correctLabel);
        return { correct };
    }

    function revealLabeling(puzzle, result) {
        const dots = document.querySelectorAll('.label-target');
        dots.forEach((dot, i) => {
            if (puzzleState.placements[i] === puzzle.targets[i].correctLabel) {
                dot.classList.add('correct');
            } else {
                dot.classList.add('wrong');
                const label = dot.querySelector('.placed-label');
                if (label) label.textContent = `${puzzleState.placements[i] || '?'} → ${puzzle.targets[i].correctLabel}`;
            }
        });
    }

    // --- JOURNAL ENTRY (Fill blanks) ---
    function renderJournalEntry(area, puzzle) {
        const container = document.createElement('div');
        container.className = 'journal-entry-container';

        let html = puzzle.text;
        puzzle.blanks.forEach((blank, i) => {
            html = html.replace(`{${i}}`, `<input type="text" class="blank-input" data-index="${i}" placeholder="..." autocomplete="off">`);
        });

        container.innerHTML = html;
        area.appendChild(container);
    }

    function checkJournalEntry(puzzle) {
        const inputs = document.querySelectorAll('.blank-input');
        let allCorrect = true;

        inputs.forEach((input, i) => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswers = puzzle.blanks[i].answers.map(a => a.toLowerCase());
            if (!correctAnswers.includes(userAnswer)) {
                allCorrect = false;
            }
        });

        return { correct: allCorrect };
    }

    function revealJournalEntry(puzzle, result) {
        const inputs = document.querySelectorAll('.blank-input');
        inputs.forEach((input, i) => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswers = puzzle.blanks[i].answers.map(a => a.toLowerCase());
            if (correctAnswers.includes(userAnswer)) {
                input.classList.add('correct');
            } else {
                input.classList.add('incorrect');
                input.value = puzzle.blanks[i].answers[0];
            }
            input.disabled = true;
        });
    }

    // --- DIAGRAM TRACING ---
    function renderTracing(area, puzzle) {
        puzzleState.tracePath = [];

        const container = document.createElement('div');
        container.className = 'tracing-container';
        container.style.height = (puzzle.height || 400) + 'px';

        puzzle.nodes.forEach((node, i) => {
            const el = document.createElement('div');
            el.className = 'trace-node';
            el.textContent = node.label;
            el.style.left = node.x + '%';
            el.style.top = node.y + '%';
            el.dataset.index = i;
            el.addEventListener('click', () => handleTraceClick(el, i));
            container.appendChild(el);
        });

        area.appendChild(container);

        const instruction = document.createElement('p');
        instruction.style.cssText = 'text-align:center;font-size:0.85rem;color:var(--ink-light);margin-top:0.8rem;';
        instruction.textContent = `Click nodes in the correct order (${puzzle.correctPath.length} steps)`;
        area.appendChild(instruction);
    }

    function handleTraceClick(el, index) {
        if (el.classList.contains('visited')) {
            puzzleState.tracePath = puzzleState.tracePath.filter(i => i !== index);
            el.classList.remove('visited');
        } else {
            puzzleState.tracePath.push(index);
            el.classList.add('visited');
        }
    }

    function checkTracing(puzzle) {
        const correct = JSON.stringify(puzzleState.tracePath) === JSON.stringify(puzzle.correctPath);
        return { correct };
    }

    function revealTracing(puzzle, result) {
        const nodes = document.querySelectorAll('.trace-node');
        nodes.forEach(n => n.classList.remove('visited', 'correct-path', 'wrong-path'));

        puzzle.correctPath.forEach(i => {
            nodes[i].classList.add('correct-path');
        });

        if (!result.correct) {
            puzzleState.tracePath.forEach(i => {
                if (!puzzle.correctPath.includes(i)) {
                    nodes[i].classList.add('wrong-path');
                }
            });
        }
    }

    return { render, check, reveal };
})();
