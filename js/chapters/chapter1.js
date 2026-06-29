Game.registerChapter({
    title: 'Cell Structure and Organisation',
    location: 'Plymouth, England — The Ship\'s Laboratory',
    story: [
        {
            speaker: 'Professor Henslow',
            text: 'Welcome aboard, young naturalist! Before HMS Beagle sets sail, you must prove your worth in the laboratory. Take this microscope — it belonged to Robert Hooke himself.'
        },
        {
            speaker: 'Professor Henslow',
            text: 'Your first task: examine these specimens and catalogue what you see. Every living thing is made of tiny units called cells. Learn to identify their parts, and you shall understand the very building blocks of life.'
        },
        {
            speaker: '',
            text: 'You peer through the brass microscope at a thin slice of onion skin. Tiny rectangular compartments come into focus — each one a cell, a miniature world unto itself. You begin sketching in your journal...'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'The Animal Cell',
            instruction: 'Label the parts of this animal cell. Select a label, then click on the correct position.',
            xp: 20,
            hints: ['The nucleus is the large, dark circular structure in the centre.', 'Mitochondria are the small bean-shaped organelles.'],
            explanation: 'Animal cells contain a cell membrane, cytoplasm, nucleus (with genetic material), and mitochondria (for energy). They lack a cell wall and chloroplasts.',
            diagram: {
                viewBox: '0 0 400 300',
                svg: `
                    <ellipse cx="200" cy="150" rx="170" ry="120" fill="none" stroke="#5c3d2e" stroke-width="2" stroke-dasharray="4,2"/>
                    <ellipse cx="200" cy="150" rx="165" ry="115" fill="rgba(244,228,193,0.3)" stroke="#8b6914" stroke-width="1.5"/>
                    <circle cx="200" cy="140" r="45" fill="rgba(139,105,20,0.15)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <circle cx="200" cy="140" r="12" fill="rgba(92,61,46,0.3)" stroke="#5c3d2e" stroke-width="1"/>
                    <ellipse cx="130" cy="180" rx="18" ry="9" fill="rgba(107,58,42,0.2)" stroke="#6b3a2a" stroke-width="1" transform="rotate(-20,130,180)"/>
                    <ellipse cx="280" cy="120" rx="18" ry="9" fill="rgba(107,58,42,0.2)" stroke="#6b3a2a" stroke-width="1" transform="rotate(15,280,120)"/>
                    <ellipse cx="250" cy="200" rx="18" ry="9" fill="rgba(107,58,42,0.2)" stroke="#6b3a2a" stroke-width="1" transform="rotate(-10,250,200)"/>
                    <text x="200" y="20" text-anchor="middle" font-size="12" fill="#5c3d2e" font-style="italic">Animal Cell</text>
                `
            },
            targets: [
                { x: 93, y: 50, correctLabel: 'Cell Membrane' },
                { x: 50, y: 47, correctLabel: 'Nucleus' },
                { x: 50, y: 40, correctLabel: 'Nucleolus' },
                { x: 33, y: 60, correctLabel: 'Mitochondrion' },
                { x: 50, y: 55, correctLabel: 'Cytoplasm' }
            ],
            labels: ['Cell Membrane', 'Nucleus', 'Cytoplasm', 'Mitochondrion', 'Nucleolus']
        },
        {
            type: 'labeling',
            title: 'The Plant Cell',
            instruction: 'Plant cells have extra structures that animal cells lack. Label this plant cell.',
            xp: 25,
            hints: ['The cell wall is the rigid outermost layer.', 'Chloroplasts are green — they capture light for photosynthesis.'],
            explanation: 'Plant cells have everything animal cells have, PLUS a cell wall (for support), large central vacuole (for storage and turgor), and chloroplasts (for photosynthesis).',
            storyBefore: {
                speaker: '',
                text: 'You switch to a leaf specimen. The cells here are different — more rigid, more structured. You notice green bodies inside and a large clear space in the centre. These must be the plant-specific structures Professor Henslow mentioned!'
            },
            diagram: {
                viewBox: '0 0 400 300',
                svg: `
                    <rect x="20" y="20" width="360" height="260" rx="5" fill="none" stroke="#5c3d2e" stroke-width="3"/>
                    <rect x="28" y="28" width="344" height="244" rx="3" fill="rgba(244,228,193,0.3)" stroke="#8b6914" stroke-width="1.5"/>
                    <circle cx="200" cy="140" r="40" fill="rgba(139,105,20,0.12)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <ellipse cx="200" cy="200" rx="80" ry="40" fill="rgba(139,105,20,0.06)" stroke="#8b7355" stroke-width="1" stroke-dasharray="3,2"/>
                    <ellipse cx="100" cy="100" rx="12" ry="8" fill="rgba(45,90,39,0.3)" stroke="#2d5a27" stroke-width="1"/>
                    <ellipse cx="130" cy="220" rx="12" ry="8" fill="rgba(45,90,39,0.3)" stroke="#2d5a27" stroke-width="1"/>
                    <ellipse cx="300" cy="150" rx="12" ry="8" fill="rgba(45,90,39,0.3)" stroke="#2d5a27" stroke-width="1"/>
                    <text x="200" y="15" text-anchor="middle" font-size="12" fill="#5c3d2e" font-style="italic">Plant Cell</text>
                `
            },
            targets: [
                { x: 5, y: 50, correctLabel: 'Cell Wall' },
                { x: 12, y: 50, correctLabel: 'Cell Membrane' },
                { x: 50, y: 47, correctLabel: 'Nucleus' },
                { x: 50, y: 70, correctLabel: 'Vacuole' },
                { x: 25, y: 33, correctLabel: 'Chloroplast' },
                { x: 40, y: 55, correctLabel: 'Cytoplasm' }
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
                text: 'Excellent observations! Now, consider this: a single cell is remarkable, but how do cells come together to form something as complex as a human body? There are levels of organisation — from the simplest to the most complex.'
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
