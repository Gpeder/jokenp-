const optionImage = document.querySelectorAll('.option-img');
const container = document.querySelector('.container');
const result = document.querySelector('.result-text');
const resultLeft = document.querySelector('.left img');
const resultRight = document.querySelector('.right img');

const imgs = ['./src/img/pedra.png', './src/img/papel.png', './src/img/tesoura.png'];

function handleOnlyClick(e) {
    const clickedImage = e.currentTarget;
    const clickedIndex = Array.from(optionImage).indexOf(clickedImage);

    container.classList.add('start');
    result.innerHTML = 'Pera aí !';

    setTimeout(() => {
        container.classList.remove('start');

        const randomNumber = Math.floor(Math.random() * imgs.length);

        resultRight.src = imgs[randomNumber];
        resultLeft.src = imgs[clickedIndex];

        console.log(randomNumber);

        result.innerHTML = 'bandidin';

        if (randomNumber === clickedIndex) {
            result.innerHTML = 'Empate';
        } else if (
            (randomNumber === 0 && clickedIndex === 1) ||
            (randomNumber === 1 && clickedIndex === 2) ||
            (randomNumber === 2 && clickedIndex === 0)
        ) {
            result.innerHTML = 'Você ganhou';
        } else {
            result.innerHTML = 'Você perdeu';
        }
    }, 2000);
}

optionImage.forEach(img => {
    img.addEventListener('click', handleOnlyClick);
});
