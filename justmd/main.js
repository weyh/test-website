const STORAGE_NAME = "md";
const DONE_TYPING_INTERVAL = 750;

let typingTimer = null;
const converter = new showdown.Converter();

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const markdownDisplay = document.querySelector("#md");

    function doneTyping() {
        localStorage.setItem(STORAGE_NAME, textarea.value);
    }

    textarea.addEventListener("input", _ => {
        if (typingTimer != null)
            clearTimeout(typingTimer);

        typingTimer = setTimeout(doneTyping, DONE_TYPING_INTERVAL);
    });

    textarea.addEventListener("keyup", _ => {
        markdownDisplay.innerHTML = converter.makeHtml(textarea.value);
    });

    textarea.value = localStorage.getItem(STORAGE_NAME);
    markdownDisplay.innerHTML = converter.makeHtml(textarea.value);
});
