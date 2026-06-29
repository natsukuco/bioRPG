Game.registerChapter({
    title: 'Nutrition in Humans',
    location: 'Patagonia — Combating Scurvy',
    story: [
        {
            speaker: 'Ship\'s Surgeon',
            text: 'Captain! Three more men have fallen ill with scurvy — bleeding gums, loose teeth, terrible fatigue. We must understand how the body processes food, or we shall lose the entire crew!'
        },
        {
            speaker: 'Charles Darwin',
            text: 'This is a matter of nutrition. The body has an entire system for breaking food into molecules small enough to absorb into the blood. Let us trace the journey of food through the alimentary canal.'
        },
        {
            speaker: '',
            text: 'You volunteer to study the problem. Starting from the mouth, you must map out every organ involved in digestion — how food is broken down mechanically (by teeth and churning) and chemically (by enzymes), until nutrients can finally be absorbed into the bloodstream.'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'The Digestive System',
            instruction: 'Label the organs of the human digestive system in order from top to bottom.',
            xp: 25,
            hints: ['Start from the mouth at the top.', 'The small intestine is where most absorption happens.'],
            explanation: 'The alimentary canal: Mouth → Oesophagus → Stomach → Small intestine (duodenum + ileum) → Large intestine → Rectum → Anus. The liver and pancreas produce secretions that aid digestion.',
            diagram: {
                viewBox: '0 0 300 450',
                svg: `
                    <ellipse cx="150" cy="35" rx="25" ry="15" fill="rgba(139,26,26,0.1)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <line x1="150" y1="50" x2="150" y2="120" stroke="#5c3d2e" stroke-width="3"/>
                    <ellipse cx="150" cy="160" rx="35" ry="40" fill="rgba(139,105,20,0.1)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <path d="M 120 220 Q 110 260 120 300 Q 140 320 160 300 Q 180 280 180 260 Q 170 240 160 220" fill="rgba(139,105,20,0.08)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <path d="M 120 310 Q 130 350 160 360 Q 190 350 200 330 Q 210 360 200 390" fill="none" stroke="#5c3d2e" stroke-width="2.5"/>
                    <circle cx="150" cy="420" r="8" fill="rgba(92,61,46,0.2)" stroke="#5c3d2e" stroke-width="1.5"/>
                    <ellipse cx="220" cy="150" rx="20" ry="30" fill="rgba(107,58,42,0.1)" stroke="#6b3a2a" stroke-width="1" stroke-dasharray="3,2"/>
                    <ellipse cx="90" cy="200" rx="15" ry="20" fill="rgba(139,105,20,0.1)" stroke="#8b6914" stroke-width="1" stroke-dasharray="3,2"/>
                    <text x="150" y="15" text-anchor="middle" font-size="11" fill="#5c3d2e" font-style="italic">Human Digestive System</text>
                `
            },
            targets: [
                { x: 50, y: 8, correctLabel: 'Mouth' },
                { x: 50, y: 19, correctLabel: 'Oesophagus' },
                { x: 50, y: 35, correctLabel: 'Stomach' },
                { x: 45, y: 58, correctLabel: 'Small Intestine' },
                { x: 55, y: 78, correctLabel: 'Large Intestine' },
                { x: 50, y: 93, correctLabel: 'Anus' },
                { x: 73, y: 33, correctLabel: 'Liver' },
                { x: 30, y: 44, correctLabel: 'Pancreas' }
            ],
            labels: ['Mouth', 'Oesophagus', 'Stomach', 'Small Intestine', 'Large Intestine', 'Anus', 'Liver', 'Pancreas']
        },
        {
            type: 'matching',
            title: 'Digestive Enzymes',
            instruction: 'Match each enzyme to the molecule it digests and where it works.',
            xp: 30,
            hints: ['Amylase breaks down starch — "amyl" relates to starch.', 'Protease breaks down protein — the name gives it away.'],
            explanation: 'Amylase (mouth & small intestine) breaks starch → maltose. Protease/pepsin (stomach) breaks proteins → amino acids. Lipase (small intestine) breaks fats → glycerol + fatty acids. Bile (from liver) emulsifies fats into smaller droplets.',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'Each region of the gut produces specific enzymes. The mouth has amylase for starch, the stomach has pepsin for proteins, and the small intestine has lipase for fats. Let us match them correctly!'
            },
            leftTitle: 'Enzyme',
            rightTitle: 'What it does',
            left: [
                'Amylase',
                'Protease (pepsin)',
                'Lipase',
                'Bile (not an enzyme)'
            ],
            right: [
                'Breaks starch → maltose/glucose (mouth & small intestine)',
                'Breaks protein → amino acids (stomach, pH 2)',
                'Breaks fats → glycerol + fatty acids (small intestine)',
                'Emulsifies fats into small droplets (from liver)'
            ]
        },
        {
            type: 'sequencing',
            title: 'The Journey of a Piece of Bread',
            instruction: 'Trace what happens to a piece of bread from ingestion to absorption.',
            xp: 25,
            hints: ['Bread is mostly starch — which enzyme acts on starch first?', 'Absorption happens in the small intestine through villi.'],
            explanation: 'Bread (starch) is chewed in the mouth where amylase begins chemical digestion. It passes through the oesophagus to the stomach (no starch digestion here). In the small intestine, pancreatic amylase completes starch → glucose conversion, which is then absorbed through villi into the blood.',
            storyBefore: {
                speaker: '',
                text: 'The ship\'s cook has prepared hardtack biscuits — mostly starch. You decide to trace exactly what happens to a piece from the moment it enters the mouth until its nutrients reach the blood...'
            },
            items: [
                'Mouth: teeth break bread into smaller pieces; amylase begins digesting starch to maltose',
                'Oesophagus: peristalsis pushes food down to the stomach',
                'Stomach: acid kills bacteria; protease digests any protein; churning mixes food',
                'Small intestine: pancreatic amylase completes starch → glucose digestion',
                'Small intestine: glucose is absorbed through villi into the bloodstream'
            ]
        },
        {
            type: 'multiple-choice',
            title: 'Absorption in the Small Intestine',
            instruction: 'The small intestine has finger-like projections called villi. Why do villi help with absorption?',
            xp: 20,
            hints: ['Think about surface area — more surface means more absorption.'],
            explanation: 'Villi massively increase the surface area of the small intestine for absorption. They also have thin walls (one cell thick), a rich blood supply to carry absorbed nutrients away, and a lacteal for absorbing fats.',
            options: [
                'Villi increase the surface area for absorption, have thin walls, and a rich blood supply',
                'Villi produce enzymes that speed up digestion',
                'Villi act as filters, only allowing good molecules through',
                'Villi store nutrients until the body needs them'
            ],
            correctIndex: 0
        },
        {
            type: 'multiple-choice',
            title: 'Solving the Scurvy Problem',
            instruction: 'The crew has scurvy due to a lack of vitamin C. What would you recommend to the Captain?',
            xp: 20,
            hints: ['Vitamin C is found in fresh fruits and vegetables.'],
            explanation: 'Scurvy is caused by vitamin C deficiency. Fresh citrus fruits (lemons, limes, oranges) are rich in vitamin C. This is why British sailors were later called "limeys" — they carried limes to prevent scurvy!',
            storyBefore: {
                speaker: 'Captain FitzRoy',
                text: 'We have mapped the digestive system and understand how nutrients are absorbed. But what specific food should I procure at the next port to cure the crew\'s scurvy? Their lives depend on your knowledge!'
            },
            options: [
                'Stock up on fresh citrus fruits — lemons and limes are rich in vitamin C',
                'Buy more salted meat — protein will cure the bleeding gums',
                'Purchase extra hardtack biscuits — starch provides all needed nutrients',
                'Give the crew extra rum rations — alcohol kills disease'
            ],
            correctIndex: 0
        }
    ],
    journal: [
        'The alimentary canal: Mouth → Oesophagus → Stomach → Small intestine → Large intestine → Rectum → Anus.',
        'Mechanical digestion: teeth (chewing) and stomach churning break food into smaller pieces.',
        'Chemical digestion: enzymes break large molecules into small, soluble ones for absorption.',
        'Amylase: starch → maltose/glucose (works in mouth and small intestine).',
        'Protease/Pepsin: protein → amino acids (works in stomach at pH 2).',
        'Lipase: fats → glycerol + fatty acids (works in small intestine).',
        'Bile from the liver emulsifies fats (breaks them into smaller droplets for lipase to work on).',
        'Villi in the small intestine increase surface area for absorption — thin walls, good blood supply.',
        'Vitamin C (from citrus fruits) prevents scurvy.'
    ]
});
