Game.registerChapter({
    title: 'Movement of Substances',
    location: 'The Atlantic Ocean — River Mouth Observations',
    lore: [
        'Out here, the river and the sea do silent battle — and water itself takes sides, drawn by laws unseen.',
        'The crew sickens for want of sweet water, while the ocean mocks them with its bitter abundance.',
        'A wilted flower, set in a cup, rises again as if by witchcraft. Yet it is no magic — only the quiet creep of water.'
    ],
    story: [
        {
            speaker: 'Captain FitzRoy',
            text: 'We come upon the mouth of a great river, where sweet water and brine wage their endless, silent war. Mark it well — for the surgeon brings grim news: the salt has crept into our water casks, and a thirsty crew is a mutinous one.'
        },
        {
            speaker: 'Charles Darwin',
            text: 'And yet — what a riddle the sea has handed us! How does water pass between waters of unlike strength, unbidden, as though it possessed a will? Unravel this law, and we may yet wring sweet water from the cursed casks and save every soul aboard.'
        },
        {
            speaker: '',
            text: 'You try a small, uncanny experiment. A wilted bloom, drooping and spent, you set into fresh water — and within the hour it stands proud and swollen again, as if life had been poured back into it. The water moved of its own accord, from plenty toward want. Darwin names it "osmosis." But it is only one of the hidden ways that substance steals across a boundary...'
        }
    ],
    puzzles: [
        {
            type: 'multiple-choice',
            title: 'Identifying Transport Types',
            instruction: 'A drop of ink spreads through a beaker of still water without stirring. What type of movement is this?',
            xp: 15,
            hints: ['No membrane is involved here.', 'The ink particles move from high to low concentration on their own.'],
            explanation: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration. It does not require a membrane or energy.',
            options: [
                'Diffusion — particles move from high to low concentration',
                'Osmosis — water moves across a membrane',
                'Active transport — particles move against concentration gradient',
                'Filtration — particles are forced through a filter'
            ],
            correctIndex: 0
        },
        {
            type: 'tracing',
            title: 'Osmosis Through a Membrane',
            instruction: 'Trace the path of water molecules during osmosis. Click the nodes in the correct order.',
            xp: 25,
            hints: ['Water moves from a dilute solution (more water) to a concentrated solution (less water).', 'The membrane only allows water to pass, not the sugar.'],
            explanation: 'In osmosis, water moves from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution) through a partially permeable membrane.',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'Come, let us put the riddle to the test. Between two solutions — one weak, one strong — I have stretched a thin membrane, a gatekeeper that suffers only certain travellers to pass. Watch now, and tell me which way the water chooses to flow. This "partially permeable membrane" guards its threshold jealously.'
            },
            height: 350,
            nodes: [
                { label: 'Dilute Solution\n(more water)', x: 20, y: 50 },
                { label: 'Water molecules\ngather at membrane', x: 40, y: 50 },
                { label: 'Partially Permeable\nMembrane', x: 55, y: 50 },
                { label: 'Water passes\nthrough membrane', x: 70, y: 50 },
                { label: 'Concentrated Solution\n(less water)', x: 88, y: 50 }
            ],
            correctPath: [0, 1, 2, 3, 4]
        },
        {
            type: 'sequencing',
            title: 'What Happens to a Plant Cell?',
            instruction: 'Arrange these events in order: what happens when a plant cell is placed in a very concentrated salt solution?',
            xp: 20,
            hints: ['Start with what happens first — water leaving the cell.', 'Plasmolysis is the final stage when the membrane pulls away from the wall.'],
            explanation: 'When placed in a concentrated solution, water leaves the plant cell by osmosis. The vacuole shrinks, the cell becomes flaccid, and eventually the membrane pulls away from the cell wall (plasmolysis).',
            storyBefore: {
                speaker: '',
                text: 'You lay a fragment of plant tissue into strong brine and bend once more to the eyepiece. For long minutes nothing stirs — then, slowly, the cells begin to wither and recoil before your eyes, as though something vital were being drawn out of them...'
            },
            items: [
                'Cell is turgid — vacuole is full, membrane pushes against cell wall',
                'Water leaves the cell by osmosis (moving to higher concentration outside)',
                'Vacuole shrinks as water is lost',
                'Cell becomes flaccid — loses its firmness',
                'Membrane pulls away from cell wall — plasmolysis occurs'
            ]
        },
        {
            type: 'journal-entry',
            title: 'Darwin\'s Journal: Movement of Substances',
            instruction: 'Complete Darwin\'s journal entry about the three types of transport.',
            xp: 20,
            hints: ['Diffusion moves from HIGH to LOW concentration.', 'Active transport requires energy because it moves AGAINST the gradient.'],
            explanation: 'Diffusion: high → low concentration (no energy). Osmosis: water from high water potential to low water potential through a partially permeable membrane. Active transport: low → high concentration (requires energy from respiration).',
            text: 'Journal Entry, 15th March 1832: Today I have identified three ways substances move in living things. {0} is the movement of particles from a region of higher concentration to lower concentration. {1} is the movement of water through a {2} membrane, from a dilute solution to a more concentrated one. Finally, {3} requires energy from the cell, as it moves substances against the concentration gradient — from low to high concentration.',
            blanks: [
                { answers: ['Diffusion', 'diffusion'] },
                { answers: ['Osmosis', 'osmosis'] },
                { answers: ['partially permeable', 'semi-permeable', 'selectively permeable'] },
                { answers: ['active transport', 'Active transport', 'Active Transport'] }
            ]
        }
    ],
    journal: [
        'Diffusion: net movement of particles from HIGH to LOW concentration (no energy needed).',
        'Osmosis: movement of WATER from dilute to concentrated solution through a partially permeable membrane.',
        'Active transport: movement from LOW to HIGH concentration (requires energy from respiration).',
        'A turgid plant cell is firm because its vacuole is full of water.',
        'Plasmolysis occurs when a plant cell loses so much water that the membrane pulls from the cell wall.',
        'Partially permeable membranes allow only certain molecules (like water) to pass through.'
    ]
});
