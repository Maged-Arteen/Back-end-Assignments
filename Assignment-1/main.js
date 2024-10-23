// ^ 1
let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let sum = document.getElementById('sum');
let code = document.querySelector('#code')

function Sum( ) {
    let param1= +input1.value;
    let param2= +input2.value;
    return (param1+param2);
}

function ShowResult(){ 
   if( input1.value !="" && input2.value !=""){
    sum.innerText = `Sum : ${Sum()}`; 
   }else{
    sum.innerText = `enter Both field`; 

   }   
}

function ShowCode(area){ 
    area.classList.toggle('hide')
}

// ^ 2 
let IsPrime = document.querySelector('#input-3')
let Prime = document.getElementById('Prime');
let code2 = document.querySelector('#code2')

function CheckPrime(){ 
if (IsPrime.value % 2 > 0){
    Prime.innerText = `True  ✔ Prime Number `; 
}else if (IsPrime.value == ""){ 
    Prime.innerText = `Enter  a Number `; 
    
}
else{ 
    Prime.innerText = `False ❌ Not Prime `; 

}
}

// ^ 3 
let userText = document.querySelector('#input-4'); 
let ReversedString = document.getElementById('reverse');
let code3 = document.querySelector('#code3'); 

function ReverseString() { 
    let res = userText.value; 
    let resReverse = [...res].reverse().join(""); 
    
    ReversedString.innerText =` ${resReverse}`; 
}

// ^ 4