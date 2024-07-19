// JavaScript for randomizing styles in experience and education groups
const experienceWords = document.querySelectorAll('.experience-group .tooltip, .experience-group > span');
const educationWords = document.querySelectorAll('.education-group .tooltip, .education-group > span');

function getRandomStyle(styles) {
    return styles[Math.floor(Math.random() * styles.length)];
}

const fontSizes = ['45px','45px', '25px', '35px', '55px'];
const fonts = ['Cascadia Code', 'Arial', 'Courier', 'Times New Roman', 'Cascadia Mono'];
const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FFC300', '#C70039', '#900C3F', 
    '#DAF7A6', '#581845', '#FF33FF', '#33FF33', '#FF6633', '#6633FF', '#3399FF',
    '#CCFF33', '#FF3366', '#33CCFF', '#FF9933', '#9933FF', '#33FF99']; // Example colors

experienceWords.forEach(word => {
    const randomSize = getRandomStyle(fontSizes);
    const randomFont = getRandomStyle(fonts);
    const randomColor = getRandomStyle(colors);
    word.style.fontSize = randomSize;
    word.style.fontFamily = randomFont;
    word.style.color = randomColor;
});

educationWords.forEach(word => {
    const randomSize = getRandomStyle(fontSizes);
    const randomFont = getRandomStyle(fonts);
    const randomColor = getRandomStyle(colors);
    word.style.fontSize = randomSize;
    word.style.fontFamily = randomFont;
    word.style.color = randomColor;
});

// Random background and headline color change
const body = document.querySelector('body');
const headline = document.querySelector('.headline');

const randomOption = Math.random() < 0.5 ? 1 : 2;

if (randomOption === 1) {
    body.style.backgroundColor = 'white';
    headline.style.color = 'purple';
} else {
    body.style.backgroundColor = 'black';
    headline.style.color = 'white';
}
