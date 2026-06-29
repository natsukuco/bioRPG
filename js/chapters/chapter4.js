Game.registerChapter({
    title: 'Enzymes',
    location: 'Galapagos Islands — Iguana Digestion Studies',
    story: [
        {
            speaker: 'Charles Darwin',
            text: 'These marine iguanas are remarkable! They dive into the cold sea to eat tough algae from the rocks. But how do they break down such resistant material? The answer must lie in their digestive enzymes.'
        },
        {
            speaker: 'Charles Darwin',
            text: 'Enzymes are biological catalysts — they speed up chemical reactions in living things without being used up themselves. Each enzyme has a specific shape that only fits one type of substrate, like a lock and key.'
        },
        {
            speaker: '',
            text: 'You set up experiments on the volcanic shore, testing how different conditions affect enzyme activity. The tropical heat gives you an idea — what happens when enzymes get too hot?'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'The Lock and Key Model',
            instruction: 'Label the parts of the enzyme-substrate interaction. Select a label, then click the correct position.',
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
                text: 'Let us design a proper experiment! We must test how temperature affects enzyme activity. Remember — a good scientist changes only one variable at a time and keeps all others constant.'
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
                text: 'Your results are clear: enzyme activity increases with temperature up to about 37°C, then suddenly drops. At 60°C, there is no activity at all. Something has gone permanently wrong with the enzyme...'
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
                text: 'Wonderful discoveries today! Record your findings carefully in the journal. Future scientists will want to know about the properties of these remarkable biological catalysts.'
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
