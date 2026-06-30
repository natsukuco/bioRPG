Game.registerChapter({
    title: 'Enzymes',
    location: 'Galapagos Islands — Iguana Digestion Studies',
    lore: [
        'On these black volcanic isles, life has bent itself into shapes no English field could conjure.',
        'Within every living gut toil unseen workers — tireless, particular, and easily broken by heat or acid.',
        'A key fits but one lock. So too, they say, does each living catalyst answer to but one master.'
    ],
    story: [
        {
            speaker: 'Charles Darwin',
            text: 'These marine iguanas confound me utterly! They plunge into the cold and hostile sea to tear tough algae from the rocks — fare that would defeat any English stomach. How does the beast rend such stubborn matter into sustenance? The answer, I wager, lies in the hidden agents of their digestion: their enzymes.'
        },
        {
            speaker: 'Charles Darwin',
            text: 'Enzymes are the unseen artisans of the living body — catalysts that hasten its chemistry yet are never themselves consumed in the labour. And each is fashioned to a single, exacting shape, admitting but one kind of substrate, as a lock yields only to its one true key.'
        },
        {
            speaker: '',
            text: 'Upon the scorched volcanic shore you arrange your apparatus, resolved to learn what bends these tiny workers to their task — and what breaks them. The merciless tropic sun beats upon your neck, and with it comes an unsettling question: what becomes of an enzyme when the heat grows too fierce to bear?'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'The Lock and Key Model',
            instruction: 'Drag each label onto the matching numbered slot. (You may also tap a label, then tap a slot.)',
            xp: 20,
            hints: ['The enzyme is the larger structure with a specific shape.', 'The active site is the groove where the substrate fits.'],
            explanation: 'In the lock-and-key model, the enzyme has a specifically shaped active site that only one type of substrate can fit into. When the substrate binds, the reaction occurs and products are released. The enzyme is unchanged and can be reused.',
            diagram: {
                viewBox: '0 0 500 250',
                svg: `
                    <path d="M 50 150 Q 80 80 140 100 Q 160 70 180 100 Q 200 80 210 110 L 210 140 Q 195 150 195 170 Q 205 190 210 180 L 210 200 Q 180 220 140 200 Q 80 220 50 150 Z" fill="rgba(139,105,20,0.15)" stroke="#5c3d2e" stroke-width="2"/>
                    <path d="M 195 140 L 195 170 Q 200 155 210 155 Q 210 155 210 140 Z" fill="rgba(244,228,193,0.5)" stroke="#8b6914" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <path d="M 280 130 Q 290 120 300 130 L 300 170 Q 290 180 280 170 Z" fill="rgba(107,58,42,0.2)" stroke="#6b3a2a" stroke-width="2"/>
                    <line x1="250" y1="150" x2="270" y2="150" stroke="#8b6914" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arrow)"/>
                    <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#8b6914"/></marker></defs>
                    <path d="M 370 100 Q 400 80 440 100 Q 460 70 480 100 Q 500 80 500 110 L 500 200 Q 480 220 440 200 Q 400 220 370 150 Z" fill="rgba(139,105,20,0.15)" stroke="#5c3d2e" stroke-width="2"/>
                    <path d="M 400 130 Q 410 120 420 130 L 420 170 Q 410 180 400 170 Z" fill="rgba(107,58,42,0.2)" stroke="#6b3a2a" stroke-width="2"/>
                    <text x="130" y="240" text-anchor="middle" font-size="10" fill="#5c3d2e">Before binding</text>
                    <text x="430" y="240" text-anchor="middle" font-size="10" fill="#5c3d2e">Substrate bound</text>
                `
            },
            targets: [
                { x: 26, y: 55, correctLabel: 'Enzyme' },
                { x: 40, y: 58, correctLabel: 'Active Site' },
                { x: 57, y: 55, correctLabel: 'Substrate' },
                { x: 84, y: 55, correctLabel: 'Enzyme-Substrate Complex' }
            ],
            labels: ['Enzyme', 'Active Site', 'Substrate', 'Enzyme-Substrate Complex']
        },
        {
            type: 'multiple-choice',
            title: 'Designing an Enzyme Experiment',
            instruction: 'You want to find the optimum temperature for an iguana\'s digestive enzyme. Which experimental setup is correct?',
            xp: 25,
            hints: ['A good experiment changes only ONE variable at a time.', 'You need multiple temperatures to find the optimum.'],
            explanation: 'A valid experiment tests one variable (temperature) while keeping all others constant (same enzyme concentration, same substrate, same pH, same time). Testing at multiple temperatures reveals the optimum.',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'Now we must contrive a worthy trial. We shall learn how heat governs the labour of these enzymes — but heed the first law of the careful seeker: alter but a single thing at a time, and hold all else unmoving, lest the truth slip through your fingers unseen.'
            },
            options: [
                'Test the enzyme at 20°C, 30°C, 37°C, 40°C, and 60°C — keeping pH, enzyme amount, and substrate the same each time',
                'Test the enzyme at 37°C with different amounts of substrate and different pH levels',
                'Test at one temperature only (37°C) and measure the reaction speed',
                'Mix different enzymes together at different temperatures'
            ],
            correctIndex: 0
        },
        {
            type: 'multiple-choice',
            title: 'Reading an Enzyme Graph',
            instruction: 'At high temperatures (above 45°C), enzyme activity drops rapidly to zero. Why does this happen?',
            xp: 25,
            hints: ['Think about what heat does to the shape of a protein.', 'The active site has a specific shape — what if that shape changes?'],
            explanation: 'At high temperatures, the enzyme\'s 3D shape is destroyed (denatured). The active site changes shape, so the substrate can no longer fit — like a melted lock that no key can open. This is irreversible.',
            storyBefore: {
                speaker: '',
                text: 'The figures spell out a chilling tale. As the heat climbs, the enzymes toil ever faster — to a peak near 37 degrees — and then, without warning, they falter and fail. By 60 degrees the labour has ceased entirely, and no cooling brings it back. Something in them has been broken beyond all mending...'
            },
            options: [
                'The enzyme is denatured — its active site shape is permanently destroyed by heat',
                'The enzyme is simply moving too fast to bind with substrate',
                'The substrate melts at high temperatures',
                'The enzyme falls asleep at high temperatures and can be woken up by cooling'
            ],
            correctIndex: 0
        },
        {
            type: 'sequencing',
            title: 'Steps of Enzyme Action',
            instruction: 'Arrange the steps of enzyme action in the correct order.',
            xp: 20,
            hints: ['Start with the substrate approaching the enzyme.', 'The enzyme is free to work again at the end.'],
            explanation: 'Enzyme action follows these steps: substrate approaches → binds to active site → reaction occurs → products released → enzyme is free and unchanged (ready to be reused).',
            items: [
                'Substrate molecule approaches the enzyme',
                'Substrate fits into the enzyme\'s active site (lock and key)',
                'Enzyme-substrate complex forms',
                'Chemical reaction occurs (substrate is broken down or built up)',
                'Products are released from the active site',
                'Enzyme is unchanged and ready to catalyse another reaction'
            ]
        },
        {
            type: 'journal-entry',
            title: 'Journal: Enzyme Properties',
            instruction: 'Complete your journal entry summarising what you\'ve learned about enzymes.',
            xp: 20,
            hints: ['Enzymes are made of protein.', 'The lock-and-key model explains why each enzyme works on only one substrate.'],
            explanation: 'Enzymes are protein catalysts with specific active sites. They work best at an optimum temperature and pH. Beyond the optimum, they denature (active site shape destroyed permanently).',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'A momentous day\'s work! Set it down faithfully in the journal, every particular of it. Those who come after us — in years we shall never see — will hunger to know the nature of these remarkable living catalysts.'
            },
            text: 'Enzymes are biological {0} — they speed up reactions without being used up. They are made of {1}. Each enzyme has a specifically shaped {2} where only one type of substrate can fit. This is called the {3} model. Enzymes work best at an optimum {4} (about 37°C in humans). Above this, the enzyme is {5} — its shape is permanently destroyed.',
            blanks: [
                { answers: ['catalysts', 'catalyst'] },
                { answers: ['protein', 'proteins'] },
                { answers: ['active site'] },
                { answers: ['lock and key', 'lock-and-key'] },
                { answers: ['temperature'] },
                { answers: ['denatured'] }
            ]
        }
    ],
    journal: [
        'Enzymes are biological catalysts made of protein — they speed up reactions without being used up.',
        'Lock-and-key model: the substrate fits into the enzyme\'s specifically shaped active site.',
        'Each enzyme is specific — it only works on one type of substrate.',
        'Optimum temperature: enzyme works fastest (37°C for human enzymes).',
        'Denaturation: above optimum temperature, the active site shape is permanently destroyed.',
        'pH also affects enzymes — each has an optimum pH (e.g., pepsin works best at pH 2 in stomach).',
        'Enzymes are reusable — after the reaction, the enzyme is unchanged.'
    ]
});
