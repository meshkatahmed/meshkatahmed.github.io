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
    if (exp===''){
        alert('You didn\'t enter your email!');
    } else if (exp===null){
        alert('You have cancelled email validation!');
    } else {
        if (re.test(exp)){
            alert('Your email address is valid!');
        } else {
            alert('Your email address is invalid!');
        }
    }
}
function validatePhoneNumber(e){
    let exp = prompt('Enter your phone number: ');
    let re = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
    if (exp===''){
        alert('You didn\'t enter your phone number!');
    } else if (exp===null){
        alert('You have cancelled phone number validation!');
    } else {
        if (re.test(exp)){
            alert('Your phone number is a valid Bangladeshi phone number!');
        } else {
            alert('Your phone number is not a valid Bangladeshi phone number!');
        }
    }
}
function validatePostalCode(e){
    let exp = prompt('Enter your postal code: ');
    console.log(exp);
}
