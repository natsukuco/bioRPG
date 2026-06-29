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
            text: 'A single candle gutters beside the brass instrument. You bend to the eyepiece, and a sliver of onion skin swims into focus — rank upon rank of silent, walled chambers, each a small world holding its breath. Your hand reaches for the journal, and you begin to draw...'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'The Animal Cell',
            instruction: 'Label the parts of this animal cell. Select a label, then click on the correct position.',
            xp: 20,
            hints: ['The nucleus is the large, dark circular structure in the centre.', 'Mitochondria are the small bean-shaped organelles scattered in the cytoplasm.'],
            explanation: 'Animal cells contain a cell membrane, cytoplasm, nucleus (with genetic material), and mitochondria (for energy). They lack a cell wall and chloroplasts.',
            diagram: {
                viewBox: '0 0 500 400',
                svg: `
                    <!-- Cell membrane - outer boundary -->
                    <ellipse cx="250" cy="200" rx="190" ry="150" fill="rgba(210,180,140,0.15)" stroke="#5c3d2e" stroke-width="2.5"/>
                    <!-- Cytoplasm fill - area between membrane and nucleus -->
                    <ellipse cx="250" cy="200" rx="186" ry="146" fill="rgba(232,213,163,0.25)" stroke="none"/>
                    <!-- Nucleus - large circle in centre -->
                    <circle cx="250" cy="190" r="55" fill="rgba(139,105,20,0.18)" stroke="#5c3d2e" stroke-width="2"/>
                    <!-- Nucleolus - small dark circle inside nucleus -->
                    <circle cx="260" cy="180" r="14" fill="rgba(92,61,46,0.35)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <!-- Mitochondria - bean shapes scattered in cytoplasm (OUTSIDE nucleus) -->
                    <ellipse cx="120" cy="160" rx="22" ry="10" fill="rgba(178,102,60,0.25)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(-25,120,160)"/>
                    <path d="M 108 155 Q 120 165 132 155" stroke="#6b3a2a" stroke-width="0.8" fill="none"/>
                    <ellipse cx="370" cy="140" rx="22" ry="10" fill="rgba(178,102,60,0.25)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(20,370,140)"/>
                    <path d="M 358 135 Q 370 145 382 135" stroke="#6b3a2a" stroke-width="0.8" fill="none"/>
                    <ellipse cx="340" cy="280" rx="22" ry="10" fill="rgba(178,102,60,0.25)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(-15,340,280)"/>
                    <path d="M 328 275 Q 340 285 352 275" stroke="#6b3a2a" stroke-width="0.8" fill="none"/>
                    <!-- Leader lines from label areas to structures -->
                    <line x1="480" y1="60" x2="430" y2="120" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="430" cy="120" r="3" fill="#8b7355"/>
                    <line x1="20" y1="60" x2="200" y2="185" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="200" cy="185" r="3" fill="#8b7355"/>
                    <line x1="20" y1="120" x2="258" y2="178" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="258" cy="178" r="3" fill="#8b7355"/>
                    <line x1="20" y1="300" x2="120" y2="162" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="120" cy="162" r="3" fill="#8b7355"/>
                    <line x1="480" y1="340" x2="160" y2="250" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="160" cy="250" r="3" fill="#8b7355"/>
                    <!-- Title -->
                    <text x="250" y="25" text-anchor="middle" font-size="14" fill="#5c3d2e" font-weight="bold">Animal Cell</text>
                    <!-- Annotation labels on diagram for visual clarity -->
                    <text x="250" y="195" text-anchor="middle" font-size="9" fill="#8b7355" font-style="italic">(dark circle = nucleus)</text>
                    <text x="120" y="185" text-anchor="middle" font-size="8" fill="#8b7355" font-style="italic">(bean shape)</text>
                `
            },
            targets: [
                { x: 96, y: 15, correctLabel: 'Cell Membrane' },
                { x: 4, y: 15, correctLabel: 'Nucleus' },
                { x: 4, y: 30, correctLabel: 'Nucleolus' },
                { x: 4, y: 75, correctLabel: 'Mitochondrion' },
                { x: 96, y: 85, correctLabel: 'Cytoplasm' }
            ],
            labels: ['Cell Membrane', 'Nucleus', 'Cytoplasm', 'Mitochondrion', 'Nucleolus']
        },
        {
            type: 'labeling',
            title: 'The Plant Cell',
            instruction: 'Plant cells have extra structures that animal cells lack. Label this plant cell.',
            xp: 25,
            hints: ['The cell wall is the thick, rigid outermost boundary (rectangular shape).', 'Chloroplasts are the green oval shapes — they capture light for photosynthesis.'],
            explanation: 'Plant cells have everything animal cells have, PLUS a cell wall (for support), large central vacuole (for storage and turgor), and chloroplasts (for photosynthesis).',
            storyBefore: {
                speaker: '',
                text: 'You exchange the onion for a sliver of green leaf. At once the chambers change their nature — rigid, ordered, fortress-like, with strange green bodies adrift inside and a great clear hollow at the heart of each. So these are the secrets Henslow whispered of: the things that set the green kingdom apart from the beasts.'
            },
            diagram: {
                viewBox: '0 0 500 420',
                svg: `
                    <!-- Cell wall - thick outer rectangle -->
                    <rect x="30" y="40" width="440" height="340" rx="8" fill="none" stroke="#5c3d2e" stroke-width="4"/>
                    <!-- Cell membrane - just inside wall -->
                    <rect x="40" y="50" width="420" height="320" rx="6" fill="rgba(232,213,163,0.2)" stroke="#8b6914" stroke-width="2"/>
                    <!-- Cytoplasm fill - between membrane and vacuole -->
                    <rect x="42" y="52" width="416" height="316" rx="5" fill="rgba(210,190,150,0.15)" stroke="none"/>
                    <!-- Large central vacuole - dominant feature -->
                    <ellipse cx="260" cy="220" rx="120" ry="90" fill="rgba(180,210,230,0.15)" stroke="#5c7a9a" stroke-width="1.5" stroke-dasharray="4,2"/>
                    <text x="260" y="225" text-anchor="middle" font-size="9" fill="#5c7a9a" font-style="italic">(large central vacuole)</text>
                    <!-- Nucleus - circle pushed to one side by vacuole -->
                    <circle cx="110" cy="140" r="40" fill="rgba(139,105,20,0.18)" stroke="#5c3d2e" stroke-width="2"/>
                    <!-- Nucleolus inside nucleus -->
                    <circle cx="118" cy="132" r="10" fill="rgba(92,61,46,0.35)" stroke="#5c3d2e" stroke-width="1"/>
                    <!-- Chloroplasts - green ovals scattered in cytoplasm -->
                    <ellipse cx="400" cy="110" rx="18" ry="10" fill="rgba(45,120,39,0.3)" stroke="#2d7a27" stroke-width="1.5"/>
                    <line x1="390" y1="110" x2="410" y2="110" stroke="#2d7a27" stroke-width="0.5"/>
                    <line x1="387" y1="106" x2="413" y2="106" stroke="#2d7a27" stroke-width="0.5"/>
                    <line x1="387" y1="114" x2="413" y2="114" stroke="#2d7a27" stroke-width="0.5"/>
                    <ellipse cx="90" cy="300" rx="18" ry="10" fill="rgba(45,120,39,0.3)" stroke="#2d7a27" stroke-width="1.5"/>
                    <line x1="80" y1="300" x2="100" y2="300" stroke="#2d7a27" stroke-width="0.5"/>
                    <line x1="77" y1="296" x2="103" y2="296" stroke="#2d7a27" stroke-width="0.5"/>
                    <line x1="77" y1="304" x2="103" y2="304" stroke="#2d7a27" stroke-width="0.5"/>
                    <ellipse cx="420" cy="310" rx="18" ry="10" fill="rgba(45,120,39,0.3)" stroke="#2d7a27" stroke-width="1.5" transform="rotate(30,420,310)"/>
                    <!-- Mitochondria in cytoplasm -->
                    <ellipse cx="180" cy="330" rx="16" ry="8" fill="rgba(178,102,60,0.25)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(-10,180,330)"/>
                    <path d="M 170 327 Q 180 335 190 327" stroke="#6b3a2a" stroke-width="0.7" fill="none"/>
                    <ellipse cx="400" cy="200" rx="16" ry="8" fill="rgba(178,102,60,0.25)" stroke="#6b3a2a" stroke-width="1.5" transform="rotate(15,400,200)"/>
                    <path d="M 390 197 Q 400 205 410 197" stroke="#6b3a2a" stroke-width="0.7" fill="none"/>
                    <!-- Leader lines -->
                    <line x1="8" y1="15" x2="30" y2="40" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="30" cy="40" r="3" fill="#8b7355"/>
                    <line x1="492" y1="15" x2="458" y2="52" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="458" cy="52" r="3" fill="#8b7355"/>
                    <line x1="8" y1="130" x2="70" y2="140" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="70" cy="140" r="3" fill="#8b7355"/>
                    <line x1="492" y1="220" x2="380" y2="220" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="380" cy="220" r="3" fill="#8b7355"/>
                    <line x1="492" y1="100" x2="418" y2="108" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="418" cy="108" r="3" fill="#8b7355"/>
                    <line x1="8" y1="350" x2="65" y2="260" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <circle cx="65" cy="260" r="3" fill="#8b7355"/>
                    <!-- Title -->
                    <text x="250" y="28" text-anchor="middle" font-size="14" fill="#5c3d2e" font-weight="bold">Plant Cell</text>
                    <!-- Annotation labels -->
                    <text x="110" y="148" text-anchor="middle" font-size="8" fill="#8b7355" font-style="italic">(nucleus)</text>
                    <text x="400" y="125" text-anchor="middle" font-size="8" fill="#2d7a27" font-style="italic">(green, with layers)</text>
                `
            },
            targets: [
                { x: 2, y: 4, correctLabel: 'Cell Wall' },
                { x: 98, y: 4, correctLabel: 'Cell Membrane' },
                { x: 2, y: 31, correctLabel: 'Nucleus' },
                { x: 98, y: 52, correctLabel: 'Vacuole' },
                { x: 98, y: 24, correctLabel: 'Chloroplast' },
                { x: 2, y: 83, correctLabel: 'Cytoplasm' }
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
        'Animal cells have: cell membrane, cytoplasm, nucleus, and mitochondria.',
        'Plant cells also have: cell wall, large central vacuole, and chloroplasts.',
        'The nucleus contains DNA and controls cell activities.',
        'Mitochondria are the "powerhouses" — they release energy through respiration.',
        'Levels of organisation: Cell → Tissue → Organ → Organ System → Organism.'
    ]
});
