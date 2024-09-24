const doneTypingInterval = 1000;
let typingTimer = null;

const converter = new showdown.Converter();

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    const markdownDisplay = document.querySelector('#md');

    function doneTyping() {
        localStorage.setItem("text", textarea.value);
    }

    textarea.addEventListener("input", _ => {
        if (typingTimer != null)
            clearTimeout(typingTimer);

        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });

    textarea.addEventListener("keyup", _ => {
        markdownDisplay.innerHTML = converter.makeHtml(textarea.value);
    });

    textarea.value = localStorage.getItem("text");
    markdownDisplay.innerHTML = converter.makeHtml(textarea.value);
});
