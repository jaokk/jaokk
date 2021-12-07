const inputVal = document.getElementById("inputVal");
const numeros = document.querySelectorAll('[id*=tecla]');
const simbolos = document.querySelectorAll('.simbolos')
const total = document.getElementById('total');
const C = document.getElementById('C');

document.addEventListener('click', function(e) {

    if(e.target.textContent === '1') inputVal.value += 1;
    if(e.target.textContent === '2') inputVal.value += 2;
    if(e.target.textContent === '3') inputVal.value += 3;
    if(e.target.textContent === '4') inputVal.value += 4;
    if(e.target.textContent === '5') inputVal.value += 5;
    if(e.target.textContent === '6') inputVal.value += 6;
    if(e.target.textContent === '7') inputVal.value += 7;
    if(e.target.textContent === '8') inputVal.value += 8;
    if(e.target.textContent === '9') inputVal.value += 9;
    if(e.target.textContent === '0') inputVal.value += 0;
    if(e.target.textContent === 'CE') inputVal.value = '';
    if(e.target.textContent === 'X') inputVal.value += '*';
    if(e.target.textContent === '-') inputVal.value += '-';
    if(e.target.textContent === '+') inputVal.value += '+';
    if(e.target.textContent === '/') inputVal.value += '/';
    if(e.target.textContent === '.') inputVal.value += '.';

    console.log( typeof inputVal.value)
    //console.log(e.target.textContent)
})

C.addEventListener('click', function() {
    
})

total.addEventListener('click', function() {
    let resul = inputVal.value.replace(/[^-()\d/*+.]/g, '');
    inputVal.value = eval(resul)

    if(eval(resul) === undefined) inputVal.value = '';
})
