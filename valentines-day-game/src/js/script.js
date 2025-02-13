// This file contains the JavaScript code for the Valentine's Day game.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.createElement('h1');
    greetingElement.textContent = "Happy Valentine's Day!";
    greetingElement.style.textAlign = 'center';
    greetingElement.style.color = 'red';
    greetingElement.style.fontFamily = 'Arial, sans-serif';
    greetingElement.style.marginTop = '50px';

    document.body.appendChild(greetingElement);
});