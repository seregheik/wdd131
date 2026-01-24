const dateObject = new Date()
const year = dateObject.getFullYear()
document.getElementById("year").innerText = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('open');
});
