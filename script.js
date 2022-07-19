const input = document.querySelectorAll('.input');
const button = document.querySelector('.botaoDeLogin');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('ativarSpan')
}

const handleFocusOut = ({ target }) => {
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('ativarSpan')
    }
}

const handleChange = () => {

    const [username, password] = input;

    if ( username.value && password.value.length >= 8){
        button.removeAttribute('disabled');

    } else {

        button.setAttribute('disabled', '');
    }

}

input.forEach((input) => input.addEventListener('focus', handleFocus));
input.forEach((input) => input.addEventListener('focusout', handleFocusOut));
input.forEach((input) => input.addEventListener('input', handleChange));