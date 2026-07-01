// Animated, self-contained SVG scenes that accompany each chapter's story.
// Pure inline SVG + SMIL animation — no external assets, works offline.
const Scenes = (() => {

    // Ch1 — Plymouth laboratory: candle flame flicker + microscope field of view with pulsing cells
    const cells = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <rect x="58" y="92" width="16" height="60" rx="3" fill="rgba(200,162,74,0.2)" stroke="#c8a24a"/>
        <ellipse cx="66" cy="150" rx="26" ry="6" fill="rgba(227,194,102,0.12)"/>
        <path d="M66 92 Q58 76 66 62 Q74 76 66 92 Z" fill="#e3c266">
            <animate attributeName="d" values="M66 92 Q58 76 66 62 Q74 76 66 92 Z;M66 92 Q60 74 66 56 Q73 73 66 92 Z;M66 92 Q58 76 66 62 Q74 76 66 92 Z" dur="1.7s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.8;1;0.8" dur="1.7s" repeatCount="indefinite"/>
        </path>
        <circle cx="300" cy="90" r="70" fill="rgba(30,42,42,0.55)" stroke="#c8a24a" stroke-width="2"/>
        <circle cx="300" cy="90" r="76" fill="none" stroke="#8c733a" stroke-width="1" opacity="0.6"/>
        <clipPath id="fov1"><circle cx="300" cy="90" r="68"/></clipPath>
        <g clip-path="url(#fov1)" stroke="#7fa8b0" stroke-width="1.5" fill="rgba(127,168,176,0.14)">
            <g><circle cx="282" cy="78" r="20"/><circle cx="282" cy="78" r="6" fill="#5c3d2e" stroke="none"/>
               <animateTransform attributeName="transform" type="translate" values="0 0;6 4;0 0" dur="6s" repeatCount="indefinite"/></g>
            <g><circle cx="330" cy="102" r="16"/><circle cx="330" cy="102" r="5" fill="#5c3d2e" stroke="none"/>
               <animate attributeName="opacity" values="1;0.7;1" dur="4s" repeatCount="indefinite"/></g>
            <circle cx="300" cy="118" r="12"><animate attributeName="r" values="12;15;12" dur="4.2s" repeatCount="indefinite"/></circle>
            <circle cx="336" cy="66" r="9"><animate attributeName="r" values="9;7;9" dur="3.6s" repeatCount="indefinite"/></circle>
        </g>
        <g stroke="#c8a24a" stroke-width="3" fill="none" stroke-linecap="round">
            <line x1="486" y1="150" x2="560" y2="150"/>
            <path d="M523 150 L523 74 Q523 58 539 58"/>
            <rect x="514" y="40" width="18" height="20" rx="4" fill="rgba(200,162,74,0.25)"/>
            <line x1="523" y1="96" x2="500" y2="120"/>
            <circle cx="523" cy="128" r="4" fill="rgba(227,194,102,0.4)"/>
        </g>
    </svg>`;

    // Ch2 — Atlantic crossing: HMS Beagle rocking on moving waves
    const atlantic = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <circle cx="500" cy="46" r="20" fill="rgba(227,194,102,0.18)" stroke="#e3c266" stroke-width="1"/>
        <g fill="none" stroke="#e3c266" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M250 120 L350 120 L336 140 Q300 150 264 140 Z" fill="rgba(200,162,74,0.22)"/>
            <line x1="270" y1="70" x2="270" y2="120"/>
            <line x1="300" y1="54" x2="300" y2="120"/>
            <line x1="330" y1="74" x2="330" y2="120"/>
            <path d="M270 74 Q286 80 270 108 Z" fill="rgba(244,236,210,0.85)" stroke="#cbb88c">
                <animate attributeName="d" values="M270 74 Q286 80 270 108 Z;M270 74 Q294 80 270 108 Z;M270 74 Q286 80 270 108 Z" dur="3.4s" repeatCount="indefinite"/>
            </path>
            <path d="M300 58 Q320 66 300 112 Z" fill="rgba(244,236,210,0.9)" stroke="#cbb88c">
                <animate attributeName="d" values="M300 58 Q320 66 300 112 Z;M300 58 Q330 66 300 112 Z;M300 58 Q320 66 300 112 Z" dur="3.8s" repeatCount="indefinite"/>
            </path>
            <path d="M330 78 Q348 84 330 110 Z" fill="rgba(244,236,210,0.85)" stroke="#cbb88c">
                <animate attributeName="d" values="M330 78 Q348 84 330 110 Z;M330 78 Q356 84 330 110 Z;M330 78 Q348 84 330 110 Z" dur="3.1s" repeatCount="indefinite"/>
            </path>
            <path d="M300 54 L316 58 L300 62 Z" fill="#9c3030" stroke="none"/>
            <animateTransform attributeName="transform" type="rotate" values="-3 300 135;3 300 135;-3 300 135" dur="4.4s" repeatCount="indefinite"/>
        </g>
        <g fill="none" stroke="#7fa8b0" stroke-width="2.5" stroke-linecap="round">
            <path d="M-80 140 q 30 -12 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0" opacity="0.55">
                <animateTransform attributeName="transform" type="translate" from="0 0" to="120 0" dur="6s" repeatCount="indefinite"/>
            </path>
            <path d="M-80 158 q 30 -12 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0" opacity="0.35">
                <animateTransform attributeName="transform" type="translate" from="-120 0" to="0 0" dur="8s" repeatCount="indefinite"/>
            </path>
        </g>
    </svg>`;

    // Ch3 — Brazilian rainforest: swaying canopy + a butterfly gliding across
    const rainforest = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g stroke="#6f9a5a" stroke-width="3" fill="rgba(111,154,90,0.18)" stroke-linecap="round">
            <path d="M90 180 L90 70">
                <animateTransform attributeName="transform" type="rotate" values="-1.5 90 180;1.5 90 180;-1.5 90 180" dur="5s" repeatCount="indefinite"/>
            </path>
            <path d="M150 180 L150 60"/>
            <path d="M510 180 L510 66">
                <animateTransform attributeName="transform" type="rotate" values="1.5 510 180;-1.5 510 180;1.5 510 180" dur="5.5s" repeatCount="indefinite"/>
            </path>
        </g>
        <g fill="rgba(111,154,90,0.28)" stroke="#6f9a5a" stroke-width="1.5">
            <ellipse cx="120" cy="60" rx="90" ry="34">
                <animate attributeName="ry" values="34;38;34" dur="6s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="470" cy="52" rx="110" ry="40">
                <animate attributeName="ry" values="40;36;40" dur="6.5s" repeatCount="indefinite"/>
            </ellipse>
            <ellipse cx="300" cy="40" rx="120" ry="34" opacity="0.85"/>
        </g>
        <g fill="none" stroke="#c8a24a" stroke-width="1" opacity="0.5">
            <line x1="220" y1="70" x2="220" y2="150"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite"/></line>
            <line x1="360" y1="60" x2="360" y2="150"><animate attributeName="opacity" values="0.5;0.15;0.5" dur="5s" repeatCount="indefinite"/></line>
        </g>
        <g>
            <g fill="rgba(227,194,102,0.9)" stroke="#8c733a" stroke-width="0.8">
                <path d="M0 0 Q-12 -10 -16 2 Q-12 10 0 4 Z"/>
                <path d="M0 0 Q12 -10 16 2 Q12 10 0 4 Z">
                    <animateTransform attributeName="transform" type="scale" values="1 1;0.4 1;1 1" dur="0.5s" repeatCount="indefinite" additive="sum"/>
                </path>
            </g>
            <animateMotion dur="9s" repeatCount="indefinite" rotate="auto"
                path="M40 130 Q180 70 300 120 T560 90"/>
        </g>
    </svg>`;

    // Ch4 — Galapagos: volcanic isle, sun with turning rays + heat shimmer, marine iguana
    const galapagos = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g stroke="#e3c266" stroke-width="2" fill="none" opacity="0.8">
            <g>
                <line x1="470" y1="16" x2="470" y2="2"/><line x1="470" y1="90" x2="470" y2="104"/>
                <line x1="433" y1="53" x2="419" y2="53"/><line x1="507" y1="53" x2="521" y2="53"/>
                <line x1="444" y1="27" x2="434" y2="17"/><line x1="496" y1="27" x2="506" y2="17"/>
                <line x1="444" y1="79" x2="434" y2="89"/><line x1="496" y1="79" x2="506" y2="89"/>
                <animateTransform attributeName="transform" type="rotate" from="0 470 53" to="360 470 53" dur="40s" repeatCount="indefinite"/>
            </g>
            <circle cx="470" cy="53" r="18" fill="rgba(227,194,102,0.25)"/>
        </g>
        <path d="M60 150 L150 74 L220 150 Z" fill="rgba(92,61,46,0.4)" stroke="#8c733a" stroke-width="2"/>
        <path d="M150 74 Q158 60 150 50 Q142 62 150 74 Z" fill="rgba(156,48,48,0.4)">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite"/>
        </path>
        <g fill="none" stroke="#7fa8b0" stroke-width="2" stroke-linecap="round" opacity="0.5">
            <path d="M-40 158 q 24 -8 48 0 t 48 0 t 48 0 t 48 0 t 48 0 t 48 0 t 48 0 t 48 0">
                <animateTransform attributeName="transform" type="translate" from="0 0" to="96 0" dur="6s" repeatCount="indefinite"/>
            </path>
        </g>
        <g fill="rgba(92,61,46,0.55)" stroke="#5c3d2e" stroke-width="1.5">
            <path d="M300 140 Q330 128 372 134 L392 130 L386 138 L398 138 L388 144 Q345 150 300 146 Z"/>
            <path d="M300 146 L286 152 M312 148 L308 158 M336 148 L336 158 M360 146 L366 156"/>
            <animateTransform attributeName="transform" type="translate" values="0 0;4 -2;0 0" dur="5s" repeatCount="indefinite"/>
        </g>
    </svg>`;

    // Ch5 — Nutrition: a morsel travelling along the alimentary canal
    const nutrition = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path id="gut" d="M120 40 Q180 40 180 70 Q180 100 120 100 Q60 100 90 130 Q120 160 300 150 Q460 142 470 120"
              fill="none" stroke="#c8a24a" stroke-width="10" opacity="0.35" stroke-linecap="round"/>
        <path d="M120 40 Q180 40 180 70 Q180 100 120 100 Q60 100 90 130 Q120 160 300 150 Q460 142 470 120"
              fill="none" stroke="#e3c266" stroke-width="2" stroke-dasharray="3,7" opacity="0.7"/>
        <circle cx="120" cy="40" r="14" fill="rgba(227,194,102,0.25)" stroke="#e3c266" stroke-width="1.5"/>
        <text x="120" y="26" text-anchor="middle" font-size="10" fill="#8c733a" font-family="Cinzel, serif">mouth</text>
        <circle cx="470" cy="120" r="7" fill="rgba(111,154,90,0.4)" stroke="#6f9a5a"/>
        <g>
            <circle r="8" fill="#e3c266" stroke="#8c733a" stroke-width="1"/>
            <animateMotion dur="7s" repeatCount="indefinite" rotate="0"
                path="M120 40 Q180 40 180 70 Q180 100 120 100 Q60 100 90 130 Q120 160 300 150 Q460 142 470 120"/>
            <animate attributeName="opacity" values="1;1;1;0.3" keyTimes="0;0.7;0.9;1" dur="7s" repeatCount="indefinite"/>
        </g>
        <g fill="rgba(111,154,90,0.7)">
            <circle cx="300" cy="150" r="2"><animate attributeName="cy" values="150;168" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite"/></circle>
            <circle cx="360" cy="146" r="2"><animate attributeName="cy" values="146;164" dur="3.4s" begin="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.8;0" dur="3.4s" begin="1s" repeatCount="indefinite"/></circle>
        </g>
    </svg>`;

    // Ch6 — Transport: a beating heart with blood cells flowing along a vessel
    const transport = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g transform="translate(300 92)">
            <path d="M0 34 C-34 6 -46 -14 -30 -30 C-16 -42 0 -30 0 -16 C0 -30 16 -42 30 -30 C46 -14 34 6 0 34 Z"
                  fill="rgba(156,48,48,0.4)" stroke="#9c3030" stroke-width="2.5">
                <animateTransform attributeName="transform" type="scale" values="1;1.12;1;1.04;1" keyTimes="0;0.15;0.4;0.55;1" dur="1.1s" repeatCount="indefinite"/>
            </path>
        </g>
        <path id="vessel" d="M40 150 Q160 150 200 110 Q240 70 300 70 Q360 70 400 110 Q440 150 560 150"
              fill="none" stroke="#9c3030" stroke-width="9" opacity="0.28" stroke-linecap="round"/>
        <path d="M40 150 Q160 150 200 110 Q240 70 300 70 Q360 70 400 110 Q440 150 560 150"
              fill="none" stroke="#c8a24a" stroke-width="1" opacity="0.4"/>
        <g fill="#c93b3b" stroke="#7a1f1f" stroke-width="0.8">
            <circle r="6"><animateMotion dur="4s" repeatCount="indefinite" path="M40 150 Q160 150 200 110 Q240 70 300 70 Q360 70 400 110 Q440 150 560 150"/></circle>
            <circle r="6"><animateMotion dur="4s" begin="1.3s" repeatCount="indefinite" path="M40 150 Q160 150 200 110 Q240 70 300 70 Q360 70 400 110 Q440 150 560 150"/></circle>
            <circle r="6"><animateMotion dur="4s" begin="2.6s" repeatCount="indefinite" path="M40 150 Q160 150 200 110 Q240 70 300 70 Q360 70 400 110 Q440 150 560 150"/></circle>
        </g>
    </svg>`;

    // Ch7 — Respiration / Royal Society: a domed hall, glowing lungs pulsing, rising embers
    const respiration = `
    <svg viewBox="0 0 600 180" class="scene-svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <g stroke="#c8a24a" stroke-width="2" fill="rgba(200,162,74,0.12)">
            <path d="M470 150 L470 96 Q470 60 510 60 Q550 60 550 96 L550 150 Z"/>
            <path d="M486 60 Q510 30 534 60 Z" fill="rgba(200,162,74,0.2)"/>
            <line x1="510" y1="30" x2="510" y2="20"/>
            <line x1="486" y1="96" x2="486" y2="150"/><line x1="510" y1="96" x2="510" y2="150"/><line x1="534" y1="96" x2="534" y2="150"/>
        </g>
        <g transform="translate(230 92)">
            <path d="M-6 -40 L-6 -6 Q-6 40 -40 40 Q-64 40 -60 6 Q-56 -20 -30 -22 Q-10 -24 -6 -6"
                  fill="rgba(127,168,176,0.22)" stroke="#7fa8b0" stroke-width="2">
                <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="3.4s" repeatCount="indefinite"/>
            </path>
            <path d="M6 -40 L6 -6 Q6 40 40 40 Q64 40 60 6 Q56 -20 30 -22 Q10 -24 6 -6"
                  fill="rgba(127,168,176,0.22)" stroke="#7fa8b0" stroke-width="2">
                <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="3.4s" repeatCount="indefinite"/>
            </path>
            <line x1="0" y1="-56" x2="0" y2="-8" stroke="#c8a24a" stroke-width="3"/>
            <circle cx="0" cy="0" r="5" fill="#e3c266">
                <animate attributeName="r" values="4;7;4" dur="3.4s" repeatCount="indefinite"/>
            </circle>
        </g>
        <g fill="#e3c266">
            <circle cx="120" cy="150" r="2"><animate attributeName="cy" values="150;30" dur="5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.9;0" dur="5s" repeatCount="indefinite"/></circle>
            <circle cx="330" cy="150" r="2"><animate attributeName="cy" values="150;40" dur="6s" begin="1.5s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.8;0" dur="6s" begin="1.5s" repeatCount="indefinite"/></circle>
            <circle cx="410" cy="150" r="1.6"><animate attributeName="cy" values="150;50" dur="5.5s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;0.8;0" dur="5.5s" begin="0.8s" repeatCount="indefinite"/></circle>
        </g>
    </svg>`;

    const list = [cells, atlantic, rainforest, galapagos, nutrition, transport, respiration];

    function get(index) {
        return list[index] || '';
    }

    return { get };
})();
