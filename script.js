// Code By NhutCoder Team · https://nhutcoderteam.io.vn
const messages = [
    "Are you sure?",
    "Really sure??",
    "Pookie please...",
    "Don't do this to me :(",
    "I will buy you sweet treats! 🍫",
    "I'll give you my hoodie!",
    "I'll even let you win in games!",
    "If you say no, I'm gonna be cooked...",
    "I'll just stare at the ceiling...",
    "I will be very very sad...",
    "I'm literally crying rn...",
    "My heart is breaking... 💔",
    "Pretty please with a cherry on top? 🍒",
    "Ok fine, I will stop asking...",
    "Just kidding, SAY YES POOKIE! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}