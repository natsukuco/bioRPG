Game.registerChapter({
    title: 'Transport in Humans',
    location: 'Cape of Good Hope — A Sailor\'s Wound',
    lore: [
        'Beneath the skin runs a hidden river, red and tireless, that visits every corner of the living realm.',
        'At the heart of the body sits a tireless engine, beating out the rhythm of life itself.',
        'A wound lays bare what the living guard most jealously — the secret roads by which the blood travels.'
    ],
    story: [
        {
            speaker: 'Ship\'s Surgeon',
            text: 'A spar has come down upon one of the hands — he bleeds like a stuck hog! Quickly now, lend me your hands to staunch it. And while we labour, mark well the marvel laid open before us: the great hidden network that carries the blood to every last corner of a man.'
        },
        {
            speaker: 'Charles Darwin',
            text: 'The circulatory system — behold it! Picture a country threaded with rivers and streams, bearing nourishment from the gut to every living cell in the body\'s vast dominion. And at its centre, never resting, beats the heart — the tireless engine that drives the whole red tide.'
        },
        {
            speaker: '',
            text: 'Kneeling beside the surgeon, you study the blood as it wells — and find it is no simple red fluid at all. Through the lens swim distinct citizens of this inner world: red cells, white cells, and a pale straw-coloured sea that bears them. Each plays its part. And beneath your fingers the heart beats on, driving its cargo through not one circuit, but two...'
        }
    ],
    puzzles: [
        {
            type: 'labeling',
            title: 'Structure of the Heart',
            instruction: 'Drag each label onto the matching numbered slot. (You may also tap a label, then tap a slot.)',
            xp: 30,
            hints: ['The left side of the heart (your right when looking at a diagram) pumps to the body.', 'Ventricles are the lower, thicker-walled chambers.'],
            explanation: 'The heart has 4 chambers: right atrium (receives deoxygenated blood from body), right ventricle (pumps to lungs), left atrium (receives oxygenated blood from lungs), left ventricle (pumps to body — thickest wall). Valves prevent backflow.',
            diagram: {
                viewBox: '0 0 400 350',
                svg: `
                    <path d="M 120 80 Q 200 30 280 80 Q 320 120 300 180 Q 280 250 200 300 Q 120 250 100 180 Q 80 120 120 80 Z" fill="rgba(139,26,26,0.08)" stroke="#5c3d2e" stroke-width="2"/>
                    <line x1="200" y1="60" x2="200" y2="300" stroke="#5c3d2e" stroke-width="2"/>
                    <line x1="110" y1="150" x2="290" y2="150" stroke="#5c3d2e" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <text x="155" y="120" text-anchor="middle" font-size="10" fill="#8b6914">RA</text>
                    <text x="245" y="120" text-anchor="middle" font-size="10" fill="#8b6914">LA</text>
                    <text x="155" y="210" text-anchor="middle" font-size="10" fill="#8b6914">RV</text>
                    <text x="245" y="210" text-anchor="middle" font-size="10" fill="#8b6914">LV</text>
                    <line x1="155" y1="60" x2="155" y2="40" stroke="#5c3d2e" stroke-width="2" marker-end="url(#arrowUp)"/>
                    <line x1="245" y1="60" x2="245" y2="40" stroke="#8b1a1a" stroke-width="2"/>
                    <line x1="130" y1="80" x2="110" y2="60" stroke="#5c3d2e" stroke-width="2"/>
                    <line x1="270" y1="80" x2="290" y2="60" stroke="#8b1a1a" stroke-width="2"/>
                    <path d="M 185 148 Q 190 155 195 148" stroke="#5c3d2e" stroke-width="1.5" fill="none"/>
                    <path d="M 205 148 Q 210 155 215 148" stroke="#5c3d2e" stroke-width="1.5" fill="none"/>
                    <text x="200" y="20" text-anchor="middle" font-size="11" fill="#5c3d2e" font-style="italic">The Human Heart (front view)</text>
                    <text x="200" y="340" text-anchor="middle" font-size="9" fill="#8b7355">Note: left/right are the patient's left/right</text>
                `
            },
            targets: [
                { x: 39, y: 31, correctLabel: 'Right Atrium' },
                { x: 61, y: 31, correctLabel: 'Left Atrium' },
                { x: 39, y: 57, correctLabel: 'Right Ventricle' },
                { x: 61, y: 57, correctLabel: 'Left Ventricle' },
                { x: 39, y: 14, correctLabel: 'Pulmonary Artery' },
                { x: 61, y: 14, correctLabel: 'Aorta' },
                { x: 50, y: 43, correctLabel: 'Valves' }
            ],
            labels: ['Right Atrium', 'Left Atrium', 'Right Ventricle', 'Left Ventricle', 'Pulmonary Artery', 'Aorta', 'Valves']
        },
        {
            type: 'tracing',
            title: 'Double Circulation',
            instruction: 'Trace the path of blood through the double circulatory system. Click in order from the body back to the body.',
            xp: 30,
            hints: ['Deoxygenated blood returns to the RIGHT side of the heart first.', 'Blood goes: Body → Right heart → Lungs → Left heart → Body.'],
            explanation: 'Double circulation: (1) Pulmonary circuit — right ventricle pumps deoxygenated blood to lungs, where it picks up oxygen, then returns to left atrium. (2) Systemic circuit — left ventricle pumps oxygenated blood to body, delivers oxygen, then returns to right atrium.',
            storyBefore: {
                speaker: 'Charles Darwin',
                text: 'Here lies the cunning of it: the blood does not run one loop, but two — "double circulation," as I have come to call it. One circuit ventures to the lungs to drink in air; the other carries that precious breath to every corner of the body. Follow the whole winding road, and lose not the thread!'
            },
            height: 400,
            nodes: [
                { label: 'Body (uses oxygen)', x: 50, y: 90 },
                { label: 'Vena Cava\n(deoxygenated blood)', x: 20, y: 70 },
                { label: 'Right Atrium', x: 20, y: 50 },
                { label: 'Right Ventricle', x: 20, y: 30 },
                { label: 'Lungs\n(picks up oxygen)', x: 50, y: 15 },
                { label: 'Left Atrium', x: 80, y: 30 },
                { label: 'Left Ventricle', x: 80, y: 50 },
                { label: 'Aorta\n(oxygenated blood)', x: 80, y: 70 }
            ],
            correctPath: [0, 1, 2, 3, 4, 5, 6, 7]
        },
        {
            type: 'matching',
            title: 'Blood Components',
            instruction: 'Match each blood component to its function.',
            xp: 25,
            hints: ['Red blood cells contain haemoglobin which carries oxygen.', 'Platelets are involved in clotting — they help seal wounds.'],
            explanation: 'Blood has 4 components: Red blood cells (carry oxygen using haemoglobin), White blood cells (fight infection), Platelets (blood clotting), Plasma (liquid that carries dissolved substances like glucose, CO₂, urea).',
            storyBefore: {
                speaker: 'Ship\'s Surgeon',
                text: 'Set your eye to the lens and behold this drop of blood — a whole teeming nation in miniature! Each citizen bears its charge: the red cells ferry the breath of life, the white cells make war upon invaders, the little fragments rush to seal a breach, and the pale tide carries all the rest upon its current.'
            },
            leftTitle: 'Component',
            rightTitle: 'Function',
            left: [
                'Red Blood Cells',
                'White Blood Cells',
                'Platelets',
                'Plasma'
            ],
            right: [
                'Carry oxygen (contain haemoglobin)',
                'Fight pathogens and infection',
                'Help blood clot at wound sites',
                'Carries dissolved glucose, CO₂, urea, hormones'
            ]
        },
        {
            type: 'multiple-choice',
            title: 'Arteries, Veins, and Capillaries',
            instruction: 'Which blood vessel has thick muscular walls, carries blood at high pressure AWAY from the heart, and has no valves (except near the heart)?',
            xp: 20,
            hints: ['Arteries carry blood AWAY from the heart (A for Away).'],
            explanation: 'Arteries: thick walls, high pressure, carry blood away from heart. Veins: thinner walls, low pressure, have valves to prevent backflow, carry blood to heart. Capillaries: one cell thick, allow exchange of substances with tissues.',
            options: [
                'Arteries — thick walls, high pressure, blood flows away from heart',
                'Veins — thin walls, low pressure, blood flows toward heart',
                'Capillaries — one cell thick, site of exchange',
                'Lymph vessels — carry excess tissue fluid'
            ],
            correctIndex: 0
        },
        {
            type: 'sequencing',
            title: 'One Complete Circulation',
            instruction: 'Arrange the steps of one complete double circulation, starting from the body.',
            xp: 25,
            hints: ['Start with deoxygenated blood returning from the body.', 'Blood must pass through the heart TWICE in one complete circuit.'],
            explanation: 'Complete double circulation: Body → vena cava → right atrium → right ventricle → pulmonary artery → lungs (gas exchange) → pulmonary vein → left atrium → left ventricle → aorta → body.',
            items: [
                'Deoxygenated blood leaves body cells via vena cava',
                'Blood enters the right atrium, then right ventricle',
                'Right ventricle pumps blood through pulmonary artery to lungs',
                'In the lungs: CO₂ is released, O₂ is picked up (gas exchange)',
                'Oxygenated blood returns via pulmonary vein to left atrium',
                'Blood moves to left ventricle (thickest wall — strongest pump)',
                'Left ventricle pumps oxygenated blood through aorta to body'
            ]
        }
    ],
    journal: [
        'The heart has 4 chambers: right atrium, right ventricle, left atrium, left ventricle.',
        'Left ventricle has the thickest wall — it pumps blood to the entire body.',
        'Double circulation: Pulmonary (heart → lungs → heart) + Systemic (heart → body → heart).',
        'Arteries: thick walls, high pressure, carry blood AWAY from heart.',
        'Veins: thinner walls, valves to prevent backflow, carry blood TO the heart.',
        'Capillaries: one cell thick, allow exchange of O₂, CO₂, glucose with tissues.',
        'Red blood cells: contain haemoglobin, carry oxygen, no nucleus, biconcave shape.',
        'White blood cells: fight infection (phagocytosis and antibodies).',
        'Platelets: cell fragments that help blood clot at wound sites.',
        'Plasma: liquid that transports dissolved substances (glucose, CO₂, urea, hormones).'
    ]
});
