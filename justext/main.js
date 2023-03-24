document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea');
    textarea.addEventListener("keyup", (event) => {
        localStorage.setItem("text", event.target.value);
    });

    textarea.value = localStorage.getItem("text");
});
