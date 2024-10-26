// ^ 1
let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let sum = document.getElementById('sum');
let code = document.querySelector('#code')

function Sum() {
    let param1 = +input1.value;
    let param2 = +input2.value;
    return (param1 + param2);
}

function ShowResult() {
    if (input1.value != "" && input2.value != "") {
        sum.innerText = `Sum : ${Sum()}`;
    } else {
        sum.innerText = `enter Both field`;

    }
}

function ShowCode(area) {
    area.classList.toggle('hide')
}

// ^ 2 
let IsPrime = document.querySelector('#input-3')
let Prime = document.getElementById('Prime');
let code2 = document.querySelector('#code2')

function CheckPrime() {
    if (IsPrime.value % 2 > 0) {
        Prime.innerText = `True  ✔ Prime Number `;
    } else if (IsPrime.value == "") {
        Prime.innerText = `Enter  a Number `;

    }
    else {
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

    ReversedString.innerText = ` ${resReverse}`;
}

// ^ 4
let UserNumber = document.querySelector('#input-5')
let max = document.getElementById('max');
let code4 = document.querySelector('#code4')

function FindMax() {
    let inputEntered = UserNumber.value;
    console.log(inputEntered);
    let newArray = [];
    let NumberArray = [...inputEntered]
    for (let i = 0; i < NumberArray.length; i++) {

        if (NumberArray[i] == '-') {
            NumberArray.splice(i, 1)
        }
        newArray = NumberArray
    }
    console.log(newArray);
    if (inputEntered != null && inputEntered != "") {
        let ismax = Math.max(...newArray);
        max.innerHTML = `Max :${ismax}`
    }

}


// ^ 5 
let UserNumber2 = document.querySelector('#input-6')
let even = document.getElementById('even');
let code5 = document.querySelector('#code5')

function evenNumber() {
    let inputEntered2 = UserNumber2.value;
    console.log(inputEntered2);
    let newArray2 = [];
    let NumberArray2 = [...inputEntered2]
    for (let i = 0; i < NumberArray2.length; i++) {

        if (NumberArray2[i] == '-') {
            NumberArray2.splice(i, 1)
        }
        newArray2 = NumberArray2
    }
    console.log(newArray2);
    if (inputEntered2 != null && inputEntered2 != "") {
        for (let y = 0; y < newArray2.length; y++) {
            if (newArray2[y] % 2 !== 0) {
                NumberArray2.splice(y, 1)
            }
        }
        even.innerHTML = `Even No :${newArray2}`
    }

}

// ^ 6
function ReverseString2() {
    let userText3 = document.querySelector('#input-7');
    let ReversedString2 = document.getElementById('reverse2');
    let code6 = document.querySelector('#code6');
    let res = userText3.value;
    let newText = [];
    for (let i = res.length; i >= 0; i--) {
        newText.push(res[i])
    }

    ReversedString2.innerHTML = `${(newText).join('')}`;

}

// ^ 7 
function mean() {
    let userText4 = document.querySelector('#input-8');
    let meanV = document.getElementById('mean');
    let userT = userText4.value;
    let inNo = [...userT];
    let sum = 0; count = 0;

    for (let x = 0; x < inNo.length; x++) {
        if (inNo[x] == '-') {
            inNo.splice(x, 1)
        }
    }

    for (let y = 0; y < inNo.length; y++) {
        sum += parseInt(inNo[y]);
        count++
    }

    let avg = sum / count;
    meanV.innerHTML = `AVG : ${avg}`;
}

// ^8
function CheckDay() {
    let UserDay = document.getElementById('input-9');
    let dayNo = +UserDay.value
    let dayP = document.getElementById('day');

    if (dayNo > 7) {
        dayP.innerHTML = `Week only 7 dude`;

    }
    switch (dayNo) {
        case 7:
            dayP.innerHTML = `Day : Week-End`;
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            dayP.innerHTML = `Day : WeekDay`;
            break;
    }
}

// ^9
function TwoThreeOnly() {
    let inUser = document.getElementById('input-10');
    let Nums = inUser.value;
    let toArray = Array.from(Nums)
    let OutPut = document.getElementById('Output');

    for (let x = 0; x < toArray.length; x++) {
        if (toArray[x] === '-' || toArray[x] === ',') {
            toArray.splice(x, 1)
        }

    }

    for (let y = 0; y < toArray.length; y++) {
        toArray[y] = parseInt(+toArray[y])
    }
    for (let i = 0; i < toArray.length; i++) {
        if (toArray[i] == 1) {
            toArray.splice(i, 1)
        }
        if (toArray[i] == 0) {
            toArray.splice(i, 1)
        }

        if (toArray[i] % 2 != 0 && toArray[i] % 3 != 0) {
            toArray.splice(i, 1)
        }
    }
    OutPut.innerHTML = `Divided by 2 or 3 are: ${(toArray)}`
}


//^10
function SearchFor() {
    let Arr = window.prompt(`
        Question : Write a function that finds the index of a given element in an array. If the element isn't 
        found, return \`-1\`.
        enter an Array`);
    let newT = [];
    console.log(Arr.split(''));
    for (let t = 0; t < Arr.length; t++) {
        newT.push(parseInt(Arr[t]));
    }

    console.log(newT)
    let No = parseInt(window.prompt('Enter No'));

    console.log(newT.indexOf(No));

    if (newT.indexOf(No) == -1) {
        window.alert('Your No is Out : -1 ')
    } else {
        window.alert(`Your No is include : ${newT.indexOf(No)} `)

    }

}

//^11
function FactorialN() {
    let N = +window.prompt(`
       Question:Write a function to calculate the factorial of a given number
       Enter Number`);
    let fac = N;
    if (N == 1 || N === 0) {
        window.alert(`Your Factorial : 1`)

    } else {

        while (N > 1) {
            N--;
            fac = fac * N;

        }
        window.alert(`Your Factorial : ${fac}`)
    }


}



//^12
function objArr() {
    let Input = { name: "John", age: 30 }
    let KeyArray = [];
    for (keyValue in Input) {
        KeyArray.push(keyValue)
    }

    window.confirm(KeyArray)


}


//^13
function unique() {
    let input = window.prompt(`Write a function that returns only the unique numbers from an array.

           Note:  Console OutPut
enter a Array`);

    console.log(input);
    let inputSort = input.split('').sort();
    let AllNum = [];
    let Deleted = [] ; 
    let Saved = [] ; 
  
    console.log(inputSort);

    for (let t = 0; t < inputSort.length; t++) {
        AllNum.push(parseInt(inputSort[t]));
    }
    console.log(AllNum)
    let s = new Set(AllNum)
  let uni= Array.from(s); 
    console.log(`Unique Numbers: `+uni);
        
}

//^14
function Repeated() {
    let text = window.prompt(`Write a function to count the occurrences of each character in a string.
           Note:  Console OutPut
enter a Text`);

    console.log(text);
    let sort = text.split('').sort();
    let allword = text;
  
    console.log(sort);


    for (let t = 0; t < sort.length; t++) {
        let currentLetter = sort[t];
        let count = 1;
        //^ Repeated Letters
        for (let x = t + 1; x < sort.length; x++) {
            if (sort[x] == currentLetter) {
                console.log (`Repeated Letter : ${sort[x]} :  ${++count}  `)
            }

        }
    }

    for (let i = 0; i < allword.length; i++) {
        let x = allword.split(allword[i]).length - 1
        console.log(`letter ${allword[i]} : count ${x}  `)
    }


}

//^15
function SortAsc(){ 
    let input = window.prompt(`Write a function that sorts an array of numbers in ascending order
        Note:  Console OutPut
enter a Array`);

 console.log(input);
 let inputSort = input.split('').sort();
 let AllNum=[]; 


 console.log(inputSort);

 for (let t = 0; t < inputSort.length; t++) {
     AllNum.push(parseInt(inputSort[t]));
 }
 console.log(AllNum)
}
//^16
function Anagram() { 
   let str1= window.prompt(`Write a function to check if a given string is an anagram of another string (i.e., contains
the same characters in a different order)
Enter Frsit String `); 

let str2 = window.prompt("Enter second String "); 
let countMatch =0 ; 
    for ( let i=0; i<str1.length; i++){ 
        for(let x=0; x<str2.length; x++){ 
            if (str1[i] == str2[x]){ 
                countMatch++; 
            }
            
            
        }
        

    }
    if (countMatch === str1.length){ 
        console.log("anagram found")
    }else {
        console.log("Not anagram")
    } 
}
//^17
function RemoveFasly() { 
    let Arr = window.confirm(`
        Write a function that removes all falsy values (\`false\`, \`null\`, \`0\`, \`""\`, \`undefined\`,
and \`NaN\`) from an array.
        Input: [0, false, "Hello", "", null, undefined, NaN, 42]

        `)

        Arr = [0, false, "Hello", "", null, undefined, NaN, 42]; 
       
        // * Retrun Only True Value 
        let OnlyTrue = Arr.filter(Boolean); 
        console.log(OnlyTrue)
            
         
}

//^18
function CreateObject(){
    model = window.prompt('enter car model')
    year = window.prompt('enter car year')
   let car ={ 
    model,
    year,
    display:()=>{
        return ` Model : ${car.model} & Year : ${car.year}`
    }
   }
   console.log(car);
   
   return car ;
}




//^19
//^20
//^21
//^22
 
        
        
