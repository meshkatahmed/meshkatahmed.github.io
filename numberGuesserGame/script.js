//UI elements
let main = document.querySelector('.container');
let button = document.getElementById('submit-number');
let numberInput = document.getElementById('guess-number');

//Random number generator
let max = 10;
let correct_ans = Math.floor(Math.random()*max)+1;

//Extra UI elements
let message = document.createElement('div');
let reload = document.createElement('button');
reload.innerText = 'Restart';

//Event listeners
button.addEventListener('click',evaluate);
reload.addEventListener('click',reloadDocument);

//Decider variable
let left = 3;

//Function
function evaluate(e){
    if (numberInput.value===''){
        alert('Enter a number in the field!');
    } else {
        if (numberInput.value>correct_ans){
            alert('Correct answer is smaller!');
            numberInput.value = '';
            left -= 1;
            message.innerText = `You have ${left} chances left. Try again!`;
            message.setAttribute('class','error');
            main.appendChild(message);
        } else if (numberInput.value<correct_ans){
            alert('Correct answer is greater!');
            numberInput.value = '';
            left -= 1;
            message.innerText = `You have ${left} chances left. Try again!`;
            message.setAttribute('class','error');
            main.appendChild(message);
        } else {
            numberInput.disabled = true;
            button.disabled = true;
            message.innerText = 'You Win!!';
            message.setAttribute('class','success');
            main.appendChild(message);
            main.appendChild(document.createElement('br'));
            main.appendChild(reload);
        }
    }

    if (left===0){
        numberInput.disabled = true;
        button.disabled = true;
        message.innerText = 'Game over! You Lose!!';
        message.setAttribute('class','failed');
        main.appendChild(message);
        main.appendChild(document.createElement('br'));
        main.appendChild(reload);
    }
}

function reloadDocument(e){
    location.reload();
}
