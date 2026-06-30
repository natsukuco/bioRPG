Game.registerChapter({
    title: 'Cell Structure and Organisation',
    location: 'Plymouth, England — The Ship\'s Laboratory',
    lore: [
        'They say all flesh, leaf and bone is built of chambers too small to see. Tonight, you shall look upon them.',
        'The microscope was Hooke\'s own. Through its glass, the unseen architecture of life awaits a witness.',
        'Before the Beagle braves the deep, you must first descend into a smaller, stranger world.'
    ],
    story: [
        {
            speaker: 'Professor Henslow',
            text: 'So. You are the one who would sail into the unknown. Before HMS Beagle carries you beyond the maps, you must prove your eye in this dim laboratory. Take this microscope — it belonged to Robert Hooke himself, and it has seen things most men never dare to.'
        },
        {
            speaker: 'Professor Henslow',
            text: 'Your charge is this: peer into the specimens and name what no untrained eye can find. All living things — every beast, every leaf — are wrought from minute chambers called cells. Master their hidden parts, and you grasp the very foundation stone of life.'
        },
        {
            speaker: '',
            text: 'A single candle gutters beside the brass instrument. With the tip of a clean blade you scrape a little matter from inside your own cheek and smear it upon the glass. You bend to the eyepiece — and there they are: soft, rounded chambers drifting in stillness, each one a living cell from your own body. Your hand reaches for the journal, and you begin to draw...'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'The Cheek Cell',
            instruction: 'Drag each label onto the matching numbered slot. (You may also tap a label, then tap a slot.)',
            xp: 20,
            hints: ['The nucleus is the large, dark circular structure near the centre.', 'Mitochondria are the small bean-shaped organelles scattered in the cytoplasm.'],
            explanation: 'A cheek cell is a typical animal cell. It contains a cell membrane, cytoplasm, a nucleus (with genetic material) and mitochondria (for energy). Animal cells have no cell wall, no chloroplasts and no large vacuole.',
            diagram: {
                viewBox: '0 0 500 400',
                svg: `
                    <!-- Cell membrane - outer boundary -->
                    <ellipse cx="250" cy="205" rx="195" ry="150" fill="rgba(210,180,140,0.15)" stroke="#5c3d2e" stroke-width="2.5"/>
                    <!-- Cytoplasm fill - area between membrane and nucleus -->
                    <ellipse cx="250" cy="205" rx="190" ry="146" fill="rgba(232,213,163,0.25)" stroke="none"/>
                    <!-- Nucleus - large circle near centre -->
                    <circle cx="250" cy="205" r="52" fill="rgba(139,105,20,0.18)" stroke="#5c3d2e" stroke-width="2"/>
                    <!-- Nucleolus - small dark circle inside nucleus -->
                    <circle cx="250" cy="205" r="15" fill="rgba(92,61,46,0.35)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <!-- Mitochondria - bean shapes in cytoplasm (OUTSIDE nucleus) -->
                    <ellipse cx="120" cy="150" rx="22" ry="10" fill="rgba(178,102,60,0.3)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(-25,120,150)"/>
                    <path d="M 108 145 Q 120 155 132 145" stroke="#6b3a2a" stroke-width="0.8" fill="none"/>
                    <ellipse cx="380" cy="150" rx="22" ry="10" fill="rgba(178,102,60,0.3)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(20,380,150)"/>
                    <ellipse cx="345" cy="290" rx="22" ry="10" fill="rgba(178,102,60,0.3)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(-15,345,290)"/>
                    <!-- Title -->
                    <text x="250" y="28" text-anchor="middle" font-size="14" fill="#5c3d2e" font-weight="bold">Human Cheek Cell</text>
                `
            },
            targets: [
                { x: 50, y: 14, correctLabel: 'Cell Membrane' },
                { x: 44, y: 44, correctLabel: 'Nucleus' },
                { x: 50, y: 51, correctLabel: 'Nucleolus' },
                { x: 24, y: 37, correctLabel: 'Mitochondrion' },
                { x: 78, y: 62, correctLabel: 'Cytoplasm' }
            ],
            labels: ['Cell Membrane', 'Nucleus', 'Cytoplasm', 'Mitochondrion', 'Nucleolus']
        },
        {
            type: 'labeling',
            title: 'The Plant Cell',
            instruction: 'Drag each label onto the matching numbered slot. (You may also tap a label, then tap a slot.)',
            xp: 25,
            hints: ['The cell wall is the thick, rigid outermost boundary (rectangular shape). The cell membrane lies just inside it.', 'Chloroplasts are the green oval shapes — they capture light for photosynthesis.'],
            explanation: 'A leaf cell is a typical plant cell. It has everything an animal cell has, PLUS a cell wall (for support), a large central vacuole (for storage and turgor), and chloroplasts (for photosynthesis).',
            storyBefore: {
                speaker: '',
                text: 'You set the cheek-smear aside and slide a sliver of green leaf beneath the lens. At once the chambers change their nature — rigid, ordered, fortress-like, with strange green bodies adrift inside and a great clear hollow at the heart of each. So these are the secrets Henslow whispered of: the things that set the green kingdom apart from the beasts of flesh.'
            },
            diagram: {
                viewBox: '0 0 500 420',
                svg: `
                    <!-- Cell wall - thick outer rectangle -->
                    <rect x="30" y="45" width="440" height="335" rx="8" fill="none" stroke="#5c3d2e" stroke-width="5"/>
                    <!-- Cell membrane - just inside wall -->
                    <rect x="42" y="57" width="416" height="311" rx="6" fill="rgba(232,213,163,0.2)" stroke="#8b6914" stroke-width="2"/>
                    <!-- Cytoplasm fill -->
                    <rect x="44" y="59" width="412" height="307" rx="5" fill="rgba(210,190,150,0.15)" stroke="none"/>
                    <!-- Large central vacuole - dominant feature -->
                    <ellipse cx="265" cy="215" rx="120" ry="88" fill="rgba(180,210,230,0.18)" stroke="#5c7a9a" stroke-width="1.5" stroke-dasharray="5,3"/>
                    <!-- Nucleus - circle pushed to one side by vacuole -->
                    <circle cx="110" cy="135" r="40" fill="rgba(139,105,20,0.18)" stroke="#5c3d2e" stroke-width="2"/>
                    <circle cx="118" cy="128" r="10" fill="rgba(92,61,46,0.35)" stroke="#5c3d2e" stroke-width="1"/>
                    <!-- Chloroplasts - green ovals with internal layers -->
                    <ellipse cx="400" cy="110" rx="18" ry="10" fill="rgba(45,120,39,0.35)" stroke="#2d7a27" stroke-width="1.5"/>
                    <line x1="388" y1="110" x2="412" y2="110" stroke="#2d7a27" stroke-width="0.5"/>
                    <line x1="385" y1="106" x2="415" y2="106" stroke="#2d7a27" stroke-width="0.5"/>
                    <line x1="385" y1="114" x2="415" y2="114" stroke="#2d7a27" stroke-width="0.5"/>
                    <ellipse cx="95" cy="300" rx="18" ry="10" fill="rgba(45,120,39,0.35)" stroke="#2d7a27" stroke-width="1.5"/>
                    <line x1="83" y1="300" x2="107" y2="300" stroke="#2d7a27" stroke-width="0.5"/>
                    <ellipse cx="420" cy="310" rx="18" ry="10" fill="rgba(45,120,39,0.35)" stroke="#2d7a27" stroke-width="1.5" transform="rotate(30,420,310)"/>
                    <!-- Mitochondria in cytoplasm -->
                    <ellipse cx="180" cy="335" rx="16" ry="8" fill="rgba(178,102,60,0.3)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(-10,180,335)"/>
                    <!-- Title -->
                    <text x="250" y="30" text-anchor="middle" font-size="14" fill="#5c3d2e" font-weight="bold">Plant Cell (from a leaf)</text>
                `
            },
            targets: [
                { x: 50, y: 9, correctLabel: 'Cell Wall' },
                { x: 50, y: 88, correctLabel: 'Cell Membrane' },
                { x: 22, y: 32, correctLabel: 'Nucleus' },
                { x: 53, y: 51, correctLabel: 'Vacuole' },
                { x: 80, y: 26, correctLabel: 'Chloroplast' },
                { x: 18, y: 55, correctLabel: 'Cytoplasm' }
            ],
            labels: ['Cell Wall', 'Cell Membrane', 'Nucleus', 'Vacuole', 'Chloroplast', 'Cytoplasm']
        },
        {
            type: 'matching',
            title: 'Organelle Functions',
            instruction: 'Match each organelle to its function in the cell.',
            xp: 20,
            hints: ['Think about what "powerhouse of the cell" means.', 'Chloroplasts are only in plant cells — what do plants do that animals cannot?'],
            explanation: 'Each organelle has a specific role: the nucleus controls cell activities, mitochondria release energy, chloroplasts photosynthesise, the cell membrane controls entry/exit of substances, and the vacuole stores cell sap.',
            leftTitle: 'Organelle',
            rightTitle: 'Function',
            left: [
                'Nucleus',
                'Mitochondria',
                'Chloroplast',
                'Cell Membrane',
                'Vacuole'
            ],
            right: [
                'Controls cell activities; contains DNA',
                'Releases energy through respiration',
                'Absorbs light for photosynthesis',
                'Controls what enters and leaves the cell',
                'Stores cell sap; maintains turgor'
            ]
        },
        {
            type: 'sequencing',
            title: 'Levels of Organisation',
            instruction: 'Arrange these from simplest to most complex level of organisation.',
            xp: 15,
            hints: ['Start with the smallest unit of life.', 'An organ system is made of multiple organs working together.'],
            explanation: 'Living things are organised in levels: Cells (basic unit) → Tissues (group of similar cells) → Organs (group of tissues) → Organ Systems (group of organs) → Organism (complete living thing).',
            storyBefore: {
                speaker: 'Professor Henslow',
                text: 'Your eye sharpens — good. But heed this riddle: a lone cell is a marvel, yet how do such specks conspire to raise a creature as vast and intricate as a man? There is an order to it, a ladder climbing from the smallest part to the whole living being. Set its rungs in their proper place.'
            },
            items: [
                'Cells — the basic unit of life',
                'Tissues — groups of similar cells',
                'Organs — groups of different tissues',
                'Organ Systems — groups of organs working together',
                'Organism — the complete living thing'
            ]
        }
    ],
    journal: [
        'All living things are made of cells — the basic unit of life.',
        'Animal cells (e.g. a cheek cell) have: cell membrane, cytoplasm, nucleus, and mitochondria.',
        'Plant cells (e.g. a leaf cell) also have: cell wall, large central vacuole, and chloroplasts.',
        'The nucleus contains DNA and controls cell activities.',
        'Mitochondria are the "powerhouses" — they release energy through respiration.',
        'Levels of organisation: Cell → Tissue → Organ → Organ System → Organism.'
    ]
});
