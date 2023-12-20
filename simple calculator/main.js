let currentIndex=" ";
let screen= document.querySelector("#screen");

document.querySelector("#clearBtn").addEventListener('click',()=>{
    currentIndex=" ";
    updateScreen();
});
document.querySelector("#divideBtn").addEventListener('click',()=>appendValue('/'));
document.querySelector("#multiplyBtn").addEventListener('click',()=>appendValue('*'));
document.querySelector("#subtractBtn").addEventListener('click',()=>appendValue('-'));
document.querySelector("#percentBtn").addEventListener('click',()=>appendValue('%'));
document.querySelector("#addBtn").addEventListener('click',()=>appendValue('+'));
document.querySelector("#decimalBtn").addEventListener('click',()=>appendValue('.'));
document.querySelector("#equalsBtn").addEventListener('click',calculator);
document.querySelector("#sevenBtn").addEventListener('click',()=>appendValue('7'));
document.querySelector("#eightBtn").addEventListener('click',()=>appendValue('8'));
document.querySelector("#nineBtn").addEventListener('click',()=>appendValue('9'));
document.querySelector("#fourBtn").addEventListener('click',()=>appendValue('4'));
document.querySelector("#fiveBtn").addEventListener('click',()=>appendValue('5'));
document.querySelector("#sixBtn").addEventListener('click',()=>appendValue('6'));
document.querySelector("#oneBtn").addEventListener('click',()=>appendValue('1'));
document.querySelector("#twoBtn").addEventListener('click',()=>appendValue('2'));
document.querySelector("#zeroBtn").addEventListener('click',()=>appendValue('0'));
document.querySelector("#threeBtn").addEventListener('click',()=>appendValue('3'));



function updateScreen(){
    screen.textContent=currentIndex;
}

function appendValue(value){
    currentIndex+=value;
    updateScreen();
}

function calculator(){
    currentIndex=eval(currentIndex);
    updateScreen();
}
