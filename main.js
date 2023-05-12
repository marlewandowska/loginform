const rejestracja_btn = document.querySelector('.rejestracja-btn');
const logowanie_btn = document.querySelector('.logowanie-btn');
const rejestracja = document.querySelector('.rejestracja');
const logowanie = document.querySelector('.logowanie');
const formularz = document.querySelector('.formularz');

rejestracja_btn.addEventListener('click', () => {

    logowanie.classList.add('widok');
    rejestracja.classList.remove('widok');

    formularz.classList.add('form-register');
    formularz.classList.remove('form-login');

})

logowanie_btn.addEventListener('click', () => {

    logowanie.classList.remove('widok');
    rejestracja.classList.add('widok');

    formularz.classList.remove('form-register');
    formularz.classList.add('form-login');

})