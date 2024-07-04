const buttons = document.querySelectorAll('.num-button');
const output = document.getElementById('output');
let phoneNumber = '';

buttons.forEach(button => {
    button.addEventListener('mouseenter', evade);
    button.addEventListener('click', enterNumber);
});

function evade(event) {
    const button = event.target;
    const offset = 60; 
    const maxMove = 80;
    const minMove = 20;
    let moveX = Math.random() * (maxMove - minMove) + minMove;
    let moveY = Math.random() * (maxMove - minMove) + minMove;
    if (Math.random() > 0.5) moveX = -moveX;
    if (Math.random() > 0.5) moveY = -moveY;
    let newPosX = button.offsetLeft + moveX;
    let newPosY = button.offsetTop + moveY;
    newPosX = Math.max(0, Math.min(newPosX, window.innerWidth - button.clientWidth));
    newPosY = Math.max(0, Math.min(newPosY, window.innerHeight - button.clientHeight));
    button.style.left = `${newPosX}px`;
    button.style.top = `${newPosY}px`;
    button.style.position = 'absolute';
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

function enterNumber(event) {
    const button = event.target;
    phoneNumber += button.textContent;
    output.textContent = phoneNumber;
}

