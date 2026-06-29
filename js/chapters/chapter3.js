Game.registerChapter({
    title: 'Biological Molecules',
    location: 'Coast of Brazil — Rainforest Specimens',
    story: [
        {
            speaker: 'Charles Darwin',
            text: 'The Brazilian rainforest is extraordinary! Such diversity of life — from towering trees to tiny insects. But what are all these living things made of at the chemical level?'
        },
        {
            speaker: 'Charles Darwin',
            text: 'I need you to help me classify the molecules in our specimens. There are three main types we must identify: carbohydrates for energy, proteins for growth and repair, and fats for energy storage. Each can be detected with a specific chemical test.'
        },
        {
            speaker: '',
            text: 'You set up a makeshift laboratory on deck. Bottles of iodine solution, Benedict\'s reagent, biuret reagent, and ethanol line the shelf. Each specimen must be tested methodically — a true scientific approach.'
        }
    ],
    puzzles: [
        {
            type: 'matching',
            title: 'Food Molecules and Their Sources',
            instruction: 'Match each food type to its primary biological molecule.',
            xp: 15,
            hints: ['Bread and rice are starchy foods — what type of molecule is starch?', 'Butter and oils are examples of one type of molecule.'],
            explanation: 'Foods contain different biological molecules: starchy foods (rice, bread, potatoes) contain carbohydrates; meat, fish, and eggs contain proteins; butter, oils, and nuts contain fats (lipids).',
            leftTitle: 'Food',
            rightTitle: 'Molecule Type',
            left: [
                'Rice and bread',
                'Meat and fish',
                'Butter and cooking oil',
                'Fruits (glucose)',
                'Eggs (albumin)'
            ],
            right: [
                'Complex carbohydrate (starch)',
                'Protein',
                'Fat (lipid)',
                'Simple carbohydrate (sugar)',
                'Protein'
            ]
        },
        {
            type: 'matching',
            title: 'Food Tests',
            instruction: 'Match each food test to the molecule it detects and its positive result.',
            xp: 25,
            hints: ['Iodine is used to test for starch — think of the colour of iodine on a cut potato.', 'Benedict\'s solution needs heating to work.'],
            explanation: 'Iodine test: starch → brown/yellow to blue-black. Benedict\'s test: reducing sugar → blue to brick-red (when heated). Biuret test: protein → blue to purple/violet. Ethanol emulsion test: fats → clear to cloudy white.',
            storyBefore: {
                speaker: '',
                text: 'You prepare four test tubes, each containing a different specimen dissolved in water. Time to apply the reagents and observe the colour changes carefully...'
            },
            leftTitle: 'Food Test',
            rightTitle: 'Positive Result',
            left: [
                'Iodine solution (for starch)',
                'Benedict\'s solution + heat (for reducing sugar)',
                'Biuret reagent (for protein)',
                'Ethanol emulsion test (for fats)'
            ],
            right: [
                'Brown/yellow → Blue-black',
                'Blue → Brick-red/orange',
                'Blue → Purple/violet',
                'Clear → Cloudy white emulsion'
            ]
        },
        {
            type: 'multiple-choice',
            title: 'Monomers and Polymers',
            instruction: 'Starch is a large molecule (polymer) made of many small units joined together. What is the monomer (small unit) of starch?',
            xp: 20,
            hints: ['Starch is a carbohydrate. Its building block is the simplest sugar.'],
            explanation: 'Starch is a polymer made of many glucose monomers joined together. Similarly, proteins are polymers of amino acid monomers, and fats are made of glycerol and fatty acids.',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'I have been thinking about how these large molecules are constructed. It seems that complex molecules are built from simpler, repeating units — like bricks forming a wall. What fundamental unit builds up starch?'
            },
            options: [
                'Glucose — a simple sugar that links together to form starch',
                'Amino acids — the building blocks of all molecules',
                'Fatty acids — small units that make up large molecules',
                'Cellulose — the structural molecule of plants'
            ],
            correctIndex: 0
        },
        {
            type: 'sequencing',
            title: 'Building a Starch Molecule',
            instruction: 'Arrange the steps of how starch is formed from glucose, in the correct order.',
            xp: 20,
            hints: ['It starts with glucose from food or photosynthesis.', 'Many glucose molecules must join before starch is formed.'],
            explanation: 'Starch (a polymer) is formed when many glucose molecules (monomers) join together through condensation reactions, which release water. This is called polymerisation. The reverse — breaking starch back to glucose — is hydrolysis (adding water).',
            items: [
                'Glucose molecules are produced (e.g., from photosynthesis or digestion)',
                'Two glucose molecules join together, releasing a water molecule (condensation)',
                'More glucose molecules are added one by one',
                'A long chain of glucose units forms — this is starch (a polymer)',
                'To break starch down again, water is added (hydrolysis) to release glucose'
            ]
        }
    ],
    journal: [
        'Three main biological molecules: carbohydrates, proteins, and fats (lipids).',
        'Carbohydrates provide energy. Starch (complex) is made of glucose (simple) units.',
        'Proteins are needed for growth and repair. Made of amino acid monomers.',
        'Fats store energy and insulate. Made of glycerol + fatty acids.',
        'Food tests: Iodine → starch (blue-black); Benedict\'s + heat → sugar (brick-red); Biuret → protein (purple); Ethanol emulsion → fats (cloudy white).',
        'Polymers are large molecules made of repeating monomers joined by condensation (releasing water).',
        'Hydrolysis breaks polymers back into monomers by adding water.'
    ]
});
