let btn = document.querySelectorAll('.number');
let input = document.querySelector('#input');

let allClearBtn = document.querySelector('#all-clear');
let clearBtn = document.querySelector('#clear');

let dot = document.querySelector('#dot');
let amt = document.querySelectorAll('.amt');

let resultBtn = document.querySelector('#result');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        input.innerText += Number(btn[i].innerText);
    })
}

for (let i = 0; i < amt.length; i++) {
    amt[i].addEventListener('click', function() {
        let inputValue = input.innerHTML;
        let inputLastEl = inputValue.slice(inputValue.length - 1, inputValue.length);
    
        if (inputLastEl === '+' || inputLastEl === '-' || inputLastEl === '*' || inputLastEl == "/" || inputLastEl == '.') {
            return
        } else {
            input.innerHTML += amt[i].innerHTML;
        }
    })
}

dot.addEventListener('click', function() {
    input.innerHTML += dot.innerHTML;
})

allClearBtn.addEventListener('click', function() {
    input.innerHTML = '';
})

clearBtn.addEventListener('click', function(){
    let inputValue = input.innerHTML;
    let yangiQiymat = '';
    // for (let i = 0; i < inputValue.length - 1; i++) {
    //     yangiQiymat += inputValue[i];
    // }

    yangiQiymat = inputValue.slice(0, inputValue.length - 1);

    input.innerHTML = yangiQiymat;
})

resultBtn.addEventListener('click', function() {
    let inputValue = input.innerHTML;
    input.innerHTML = eval(inputValue);
})
