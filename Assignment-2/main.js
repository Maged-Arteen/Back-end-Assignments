// ^ Question 
let Q1 = ` Write a function that uses a \`for\` loop to print numbers from 1 to 10. If the number is
        divisible by 3, skip printing the number.`
let Q2 = `. Write a function that uses a \`while\` loop to calculate the sum of numbers from 1 to 100.`
let Q3 = ` Implement a function using \`forEach\` to iterate over an array and print each element. `
let Q4 = `Explain the difference between \`forEach\` and \`for...of\` loops in JavaScript.`
let Q5 = `write a function that destructures an object to extract values and returns a formatted string.`
let Q6 = ` Use the spread operator to merge two arrays, then return the merged array.`
let Q7 = ` Write a function that accepts multiple parameters (two or more) and returns their sum.`
let Q8 = `Compare primitive and non-primitive data types in JavaScript with examples.`
let Q9 = `Explain how hoisting works in JavaScript and describe the Temporal Dead Zone (TDZ)`
let Q10 = `. Write a function that demonstrates closure by creating a counter function that returns 
the number of times it has been called.`
let Q11 = ` Create a function that returns a promise which resolves after 3 seconds with a 'Success' 
message. `
let Q12 = ` Convert the previous promise-based function to use \`async\` and \`await\`. `
let Q13 = ` Create a function that returns a promise, which resolves if a random number is greater 
than 5, otherwise it rejects.`
let Q14 = ` Implement a function that chains multiple .then() handlers to a promise to demonstrate 
promise chaining.`
let Q15 = `. Implement a function that handles errors using \`try...catch\` in an asynchronous 
operation`
// ^ Answer for Question 1 
function LoopToTen() {
    let output = [];
    for (let i = 0; i <= 10; i++) {
        if (i % 3 == 0) {
            //& do Nothoing 
        } else {
            output.push(i)

        }

    }
    document.querySelector('#Answer').innerHTML = `${Q1} <hr> ${output}`;


}

// ^ Answer for Question 2
function SumToHundrad() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i;
    }

    document.querySelector('#Answer').innerHTML = `${Q2}<hr>${sum}`;

}

// ^ Answer for Question 3 
function LoopForEach() {
    document.querySelector('#Answer').innerHTML = "";
    let Programming_Languages = ['C', 'C++', 'C#', 'JS', 'Python'];
    document.querySelector('#Answer').innerHTML += `${Q3}<hr> `;
    Programming_Languages.forEach(function (element) {

        {


            document.querySelector('#Answer').innerHTML += `<li> ${element} </li> `;

        }
    })

}
// ^ Answer for Question 4 
function Differance() {
    document.querySelector('#Answer').innerHTML = "";

    let iteratable = [1, 2, 3, 4, 5, 6, 7]
    document.querySelector('#Answer').innerHTML += `for loop on element thought<b> index - break & continue allowed - faster</b>  <br /> `;
    for (let i = 0; i < iteratable.length; i++) {

        document.querySelector('#Answer').innerHTML += ` ${i} `;


    }
    document.querySelector('#Answer').innerHTML += `<br /> foreach loop on element thought <b>callback function  - slower - continue & break not allowed</b> <br />`;

    iteratable.forEach(element => {
        document.querySelector('#Answer').innerHTML += `${element} `;

    });
}

// ^ Answer for Question 5
function DestructObject() {
    document.querySelector('#Answer').innerHTML += ""
    const person = { name: 'John', age: 25 };

    let des = `${person.name} is ${person.age} years old`;

    document.querySelector('#Answer').innerHTML = `${Q5}<hr> ${des} `;


}

// ^ Answer for Question 6
function MergeTwoArray() {
    document.querySelector('#Answer').innerHTML += ""
    let department = ['QC', 'QA', 'BU'];
    let Jobs = ['FED', 'BED', 'UID', 'UXD']

    let all = ([...department] + " " + [...Jobs])

    document.querySelector('#Answer').innerHTML = `${Q6} <hr> The First: ${department} <br/> <br/>The Second: ${Jobs}<br><br/> All:  ${all} `;

}
// ^ Answer for Question 7
function SumAll() {
    document.querySelector('#Answer').innerHTML += "";

    let arg = Array.from((window.prompt('Enter Your Number without spaces ')))
    console.log(arg)
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum += +arg[i];
    }

    document.querySelector('#Answer').innerHTML = `${Q7} <hr> ${sum} `;

}

// * Answer for Question 8
function Compare() {
    // ^ Primitive 
    let char = 'e';
    let age = 15;
    let number = 0.1;
    let IsMarried = true;

    // ^ Non - Primitve 
    let AllChar = ['a', 'b', 'c', 'x', 'y', 'z']
    let allinfo = {
        Age: 15,
        Number: 0.1,
        IsMarried: true
    }
}
// ^ Answer for Question 9
function Hoisting(){ 

    // hoisted , variables = undefined saved in TDZ
    console.log(`i'm hoisted varibale: ` , x )

    
    var x = 20 

    //after declared and initialized 
    console.log(`i'm declared varibale : `,x)
}

Hoisting() 
// ^ Answer for Question 10 
function closure(){
    let CounterForExecution = 0; 
     return function(){
        CounterForExecution+=1;
        return   CounterForExecution;
    }
    }


// let RunMore =  closure(); //!uncomment to execute

console.log(RunMore())
console.log(RunMore())
console.log(RunMore())

// ^ Answer for Question 11
function WaitThreeSecond(){ 
    return new Promise((resolved )=>{
        console.log("waiting")
            setTimeout(() => {
             resolved("After 3 Second Resolved ")
            }, 3000);
     });
}
// WaitThreeSecond().then(()=>console.log("3 second Passed")); // !uncomment to execute

// ^ Answer for Question 12 

async function Execute(){ 
    try{
        let myfn = await WaitThreeSecond(); 
        console.log(myfn)
    }catch (e){ 
        console.log(e)
    }
}
// Execute() //!uncomment to execute
// ^ Answer for Question 13 
 function RandomNumber(){ 
return new Promise(function(res , rej){
    let myRandomNumber = Math.round((Math.random()*10))
    console.log(myRandomNumber)
    if (myRandomNumber > 5 ){ 
        res("DONE Number > 5 ")
    }else { 
        rej("REJECTED rejected with Number < 5 ")
    }
})
}

// RandomNumber().then().catch();  // !uncomment to execute 

// ^ Answer for Question 14 
async function GetDataFromLocalFile(){ 
    let connection = await fetch("mydata.json", {
        method:"get"
    });
    let ConnectionResponse = await connection.json();
    console.log( ConnectionResponse)
   return ConnectionResponse; 
}
// GetDataFromLocalFile().then(function(){ 
//     console.log("Data Loaded Successfully ")
// }).catch(function(){
//     console.log("Data Error ")
// }); // !uncomment to execute

// ^ Answer for Question 15 
function ErrorHandling() {
    let CurrentYear = 2024;
    let userBirthYear=0;
    let age =0;
    try {

        userBirthYear = +window.prompt("Enter Your Birth Year ▶ console output")
        if (userBirthYear > CurrentYear) {
         throw new Error(); 
        }
        else { 
           age = CurrentYear-userBirthYear
           console.log(`Your Age : ${age}`)
           if(age >  100){
            console.log("Long Life , Hope it count ")
           }else if (age < 50 ){ 
            console.log("Short Life , Hope u Enjoy it ")
           }
        }
    } catch (error) {
        let dif = userBirthYear - CurrentYear
        console.log(`You Born ${dif} Year later  hahahah`)
    }
} 