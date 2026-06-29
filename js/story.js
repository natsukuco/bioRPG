const Story = (() => {
    let typing = false;
    let typeTimeout = null;
    let fullText = '';
    let currentIndex = 0;

    function display(speaker, text) {
        const speakerEl = document.getElementById('story-speaker');
        const textEl = document.getElementById('story-text');

        speakerEl.textContent = speaker || '';
        textEl.innerHTML = '';
        fullText = text;
        currentIndex = 0;
        typing = true;

        typeNext(textEl);
    }

    function typeNext(el) {
        if (currentIndex < fullText.length) {
            el.textContent = fullText.substring(0, currentIndex + 1);
            currentIndex++;
            const delay = fullText[currentIndex - 1] === '.' ? 60 :
                         fullText[currentIndex - 1] === ',' ? 40 : 25;
            typeTimeout = setTimeout(() => typeNext(el), delay);
        } else {
            typing = false;
        }
    }

    function skipTyping() {
        if (typeTimeout) clearTimeout(typeTimeout);
        typing = false;
        document.getElementById('story-text').textContent = fullText;
    }

    function isTyping() {
        return typing;
    }

    return { display, skipTyping, isTyping };
})();
