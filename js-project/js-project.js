const buttons = document.querySelectorAll('.num-button');
const output = document.getElementById('output');
let phoneNumber = '';
buttons.forEach(button => {
    button.addEventListener('mouseenter', evade);
    button.addEventListener('click', enterNumber);
});
function evade(event) {
    const button = event.target;
    const offset = 100;
    const moveX = Math.random() > 0.5 ? offset : -offset;
    const moveY = Math.random() > 0.5 ? offset : -offset;

    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
}
function enterNumber(event) {
    const button = event.target;
    phoneNumber += button.textContent;
    output.textContent = phoneNumber;
}
buttons.forEach(button => {
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

