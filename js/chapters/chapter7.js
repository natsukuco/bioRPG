Game.registerChapter({
    title: 'Respiration in Humans',
    location: 'London, England — The Royal Society',
    story: [
        {
            speaker: 'Charles Darwin',
            text: 'We have returned to England at last! The Royal Society has invited you to present your findings. Your final challenge: explain how living cells obtain the energy they need to survive.'
        },
        {
            speaker: 'Charles Darwin',
            text: 'Everything connects: the food we studied in the rainforest, the digestion we mapped in Patagonia, the blood transport from the Cape — it all leads to this. Cells need glucose and oxygen to release energy through respiration.'
        },
        {
            speaker: '',
            text: 'You stand before the assembled Fellows of the Royal Society in London. Portraits of Newton and Hooke gaze down from the walls. To earn your place among these great minds, you must demonstrate mastery of the final piece of the puzzle: how every living cell releases the energy it needs to function.'
        }
    ],
    puzzles: [
        {
            type: 'matching',
            title: 'Aerobic vs Anaerobic Respiration',
            instruction: 'Match each characteristic to either aerobic or anaerobic respiration.',
            xp: 25,
            hints: ['Aerobic means "with oxygen" — it produces much more energy.', 'Anaerobic happens during intense exercise when oxygen supply can\'t keep up.'],
            explanation: 'Aerobic respiration uses oxygen and releases much more energy (38 ATP). Anaerobic respiration occurs without oxygen, releases less energy, and produces lactic acid in animals (or ethanol + CO₂ in yeast).',
            leftTitle: 'Characteristic',
            rightTitle: 'Type',
            left: [
                'Requires oxygen',
                'Produces lactic acid (in animals)',
                'Releases large amounts of energy',
                'Occurs during intense exercise',
                'Produces CO₂ and water'
            ],
            right: [
                'Aerobic respiration',
                'Anaerobic respiration',
                'Aerobic respiration',
                'Anaerobic respiration',
                'Aerobic respiration'
            ]
        },
        {
            type: 'journal-entry',
            title: 'The Word Equation for Aerobic Respiration',
            instruction: 'Complete the word equation for aerobic respiration.',
            xp: 25,
            hints: ['The reactants are a sugar and a gas we breathe in.', 'The products are a gas we breathe out and a liquid.'],
            explanation: 'Aerobic respiration: Glucose + Oxygen → Carbon dioxide + Water + Energy. This occurs in the mitochondria of cells and is the main way cells release energy for life processes.',
            storyBefore: {
                speaker: 'Royal Society Fellow',
                text: 'Young naturalist, please write upon the board the fundamental equation that describes how cells release energy. Every Fellow here knows it — show us that you do too!'
            },
            text: 'The word equation for aerobic respiration:\n\n{0} + {1} → {2} + {3} + Energy\n\nThis reaction takes place in the {4} of cells.',
            blanks: [
                { answers: ['Glucose', 'glucose'] },
                { answers: ['Oxygen', 'oxygen'] },
                { answers: ['Carbon dioxide', 'carbon dioxide', 'CO2'] },
                { answers: ['Water', 'water'] },
                { answers: ['mitochondria', 'Mitochondria', 'mitochondrion'] }
            ]
        },
        {
            type: 'tracing',
            title: 'The Path of Oxygen',
            instruction: 'Trace the journey of an oxygen molecule from the air to where it is used in a cell.',
            xp: 30,
            hints: ['Oxygen enters through the lungs first.', 'It travels in red blood cells using haemoglobin, then reaches the mitochondria.'],
            explanation: 'Oxygen journey: Air → lungs (alveoli) → diffuses into blood → binds to haemoglobin in red blood cells → pumped by heart through arteries → releases at capillaries → diffuses into cells → enters mitochondria → used in aerobic respiration.',
            storyBefore: {
                speaker: '',
                text: 'The Fellows lean forward with interest. "Now trace for us," says the chairman, "the complete path of an oxygen molecule — from the air we breathe to the very organelle where it is consumed." This requires connecting everything you have learned...'
            },
            height: 400,
            nodes: [
                { label: 'Air breathed in\n(nose/mouth)', x: 15, y: 15 },
                { label: 'Lungs (alveoli)\ngas exchange', x: 35, y: 15 },
                { label: 'Diffuses into\nblood capillaries', x: 55, y: 15 },
                { label: 'Binds to haemoglobin\nin red blood cells', x: 78, y: 15 },
                { label: 'Heart pumps blood\nthrough arteries', x: 78, y: 45 },
                { label: 'Blood reaches\nbody capillaries', x: 55, y: 45 },
                { label: 'O₂ diffuses\ninto body cell', x: 35, y: 45 },
                { label: 'Enters mitochondria\n→ aerobic respiration', x: 15, y: 45 }
            ],
            correctPath: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
            type: 'sequencing',
            title: 'Breathing, Gas Exchange, and Respiration',
            instruction: 'Arrange these stages in order: from breathing in to energy release.',
            xp: 25,
            hints: ['Start with the physical act of breathing (ventilation).', 'Cellular respiration is the final chemical process inside cells.'],
            explanation: 'Breathing (ventilation) moves air in/out of lungs. Gas exchange in alveoli moves O₂ into blood and CO₂ out. Transport carries O₂ to cells. Cellular respiration in mitochondria uses O₂ + glucose to release energy. These are three separate but connected processes.',
            items: [
                'Ventilation: diaphragm contracts, ribs move up and out, air enters lungs',
                'Gas exchange in alveoli: O₂ diffuses into blood, CO₂ diffuses out',
                'Transport: oxygenated blood is pumped by heart to body cells',
                'O₂ and glucose enter the cell from the blood capillaries',
                'Cellular respiration: glucose + oxygen → CO₂ + water + energy (in mitochondria)'
            ]
        },
        {
            type: 'multiple-choice',
            title: 'Oxygen Debt',
            instruction: 'After intense exercise, you continue to breathe heavily even though you have stopped moving. Why?',
            xp: 25,
            hints: ['During intense exercise, muscles respire anaerobically and build up lactic acid.', 'The extra oxygen after exercise is needed to deal with the lactic acid.'],
            explanation: 'During intense exercise, muscles respire anaerobically, producing lactic acid. After exercise, extra oxygen is needed to break down this lactic acid — this is called "oxygen debt." Heavy breathing repays this debt by supplying the extra oxygen needed.',
            storyBefore: {
                speaker: 'Royal Society Fellow',
                text: 'One final question! After a man runs a great distance, he pants and gasps for many minutes after stopping. If he has stopped exercising, why does he still need so much air? This has puzzled physicians for years!'
            },
            options: [
                'The body must repay "oxygen debt" — extra O₂ is needed to break down lactic acid that built up during anaerobic respiration',
                'The lungs were damaged by exercise and need extra air to heal',
                'The heart is simply slowing down gradually and cannot stop quickly',
                'The muscles are still contracting involuntarily after exercise'
            ],
            correctIndex: 0
        },
        {
            type: 'tracing',
            title: 'The Complete Picture: Food to Energy',
            instruction: 'Final challenge! Trace the journey of a glucose molecule from food all the way to energy release. Click in order.',
            xp: 40,
            hints: ['Start with eating food containing starch/glucose.', 'Think: digestion → absorption → transport → respiration.'],
            explanation: 'This connects ALL chapters: Food (Ch3) → Digestion by enzymes (Ch4-5) → Absorption in small intestine (Ch5) → Transport in blood (Ch6) → Delivered to cells → Used in respiration with O₂ (Ch7) → Energy released in mitochondria. The whole voyage of discovery connected!',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'And now — your masterwork! Show these distinguished Fellows how EVERYTHING connects. Trace the complete journey of a glucose molecule, from the food on your plate to the energy released in your cells. This is the culmination of all we have learned!'
            },
            height: 450,
            nodes: [
                { label: 'Food eaten\n(contains starch)', x: 15, y: 15 },
                { label: 'Digestion: enzymes\nbreak starch → glucose', x: 42, y: 15 },
                { label: 'Absorption: glucose\npasses through villi', x: 72, y: 15 },
                { label: 'Transport: glucose\ndissolved in blood plasma', x: 85, y: 40 },
                { label: 'Heart pumps blood\nto body cells', x: 65, y: 40 },
                { label: 'Glucose diffuses\nfrom capillary into cell', x: 40, y: 40 },
                { label: 'Glucose + O₂ enter\nmitochondria', x: 20, y: 40 },
                { label: 'ENERGY released!\n(+ CO₂ + H₂O)', x: 15, y: 70 }
            ],
            correctPath: [0, 1, 2, 3, 4, 5, 6, 7]
        }
    ],
    journal: [
        'Aerobic respiration: Glucose + Oxygen → Carbon dioxide + Water + Energy.',
        'Aerobic respiration occurs in the MITOCHONDRIA and releases large amounts of energy.',
        'Anaerobic respiration: Glucose → Lactic acid + small amount of energy (no oxygen needed).',
        'Anaerobic respiration occurs during intense exercise when O₂ supply is insufficient.',
        'Oxygen debt: after exercise, extra O₂ is needed to break down accumulated lactic acid.',
        'Breathing (ventilation) is NOT the same as respiration — breathing moves air; respiration releases energy in cells.',
        'Gas exchange in alveoli: O₂ diffuses into blood, CO₂ diffuses out (both by diffusion down concentration gradients).',
        'The complete pathway: Food → Digestion → Absorption → Transport → Cellular Respiration → Energy.',
        'All living cells respire — it is a continuous process that provides energy for all life functions.'
    ]
});
