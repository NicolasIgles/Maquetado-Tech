const h1 = document.querySelector('#txt');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const resultInputs = input1.value + input2.value;
    result.innerText = "Resultado: "+resultInputs;
}