//UI elements
let emailButton = document.querySelector('.emailButton');
let phoneNumberButton = document.querySelector('.phoneNumberButton');
let postalCodeButton = document.querySelector('.postalCodeButton');

//Event listener
emailButton.addEventListener('click',validateEmail);
phoneNumberButton.addEventListener('click',validatePhoneNumber);
postalCodeButton.addEventListener('click',validatePostalCode);

//Functions
function validateEmail(e){
    let exp = prompt('Enter your email: ');
    let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    if (re.test(exp)){
        alert('Your email address is valid!');
    } else {
        alert('Your email address is invalid!');
    }
}
function validatePhoneNumber(e){
    let exp = prompt('Enter your phone number: ');
    console.log(exp);
}
function validatePostalCode(e){
    let exp = prompt('Enter your postal code: ');
    console.log(exp);
}
