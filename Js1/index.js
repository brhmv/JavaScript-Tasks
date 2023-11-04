// 1. Ask the user for their name and print "Hello, their name!" in response.

// let person = prompt("Please enter your name");

// console.log(person);   

// alert(`Hello, ${person}`);


// 2. Ask the user for the year of their birth, calculate how old they are and display the result. Specify the current year as a constant in the code.

// const year =prompt("Please enter your birth year");

// alert(new Date().getFullYear() - year); 


// 3. Ask the user for the length of the square side and output the perimeter of that square.

// let length = prompt("Please enter length of square");

// alert(`Perimeter is: ${length*4}`);


// 4. Ask the user for the circle radius and output the area of such circle.

// let radius = prompt("Insert circle radius");

// alert(`Circle area is: ${3.14*(radius**2)}`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Ask the user for their age and determine who they are: a child (0–12), a teenager (12–18), an adult (18–60), or a retiree (60–...).

// let age=parseInt(prompt("Insert age:"));
// alert(typeof(age));

// if(0 < age && age<= 12){
//     alert("child");
// }
// else if(12 < age  && age <= 18){
//     alert("teenager");
// }
// else if(18 < age  && age <= 60){
//     alert("adult");
// }
// else if(60 < age  && age <= 150){
//     alert("retiree");
// }

// 2. Ask the user for a number from 0 to 9 and output a special character located on this key (1–!, 2–@, 3–#, and so on).

// let inputNumber = parseInt(prompt("Insert number:"));

// const Characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// if (inputNumber >= 1 && inputNumber <= 9) {
    
//     const character = Characters[inputNumber-1];
    
//     alert(`Special character for ${inputNumber} is: ${character}`);
// } 
// else {
//     alert("Invalid input");
// }

// 3. Ask the user 3 questions, each question has 3 answers. For each correct answer, 2 points are awarded. After the questions are over, output the number of scored points.

// let score = 0;

// let answer1 =parseInt(prompt("What is the capital of France? \n 1)Paris 2)London 3)Berlin")); 

// let answer2 =parseInt(prompt("Which planet is known as the Red Planet? \n 1)Mars 2)Venus 3)Venera")); 

// let answer3 =parseInt(prompt("What is the largest mammal on Earth? \n 1)Elephant 2)Blue Whale 3)Giraffe")); 

// if (answer1 == 1 ) {
//     score+=2;
// }
// if(answer2 == 1) {
//     score+=2;
// }
// if(answer3 == 2){
//     score+=2;
// }

// alert(`Your score ${score}/6.`);


// 4. Ask the user for a year and check whether it is a leap year or not. A leap year is either a multiple of 400 or 4, and not a multiple of 100

// const year = parseInt(prompt("Enter a year:"));

// if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//     alert(`${year} is a leap year.`);
// } 
// else {
//     alert(`${year} is not a leap year.`);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1. Calculate the sum of all numbers in a range specified by the user

// const firsNumber =parseInt(prompt("From: "));
// const lastNumber =parseInt(prompt("To: "));

// let sum = firsNumber;

// while(sum < lastNumber){
//     sum+=sum+1;
// }
// alert(`Sum of all numbers: ${sum}.`)


// 2. Determine the number of digits in the entered number

// const number = parseInt(prompt("Insert a number:"));

// const numString = number.toString();
// const numDigits = numString.length;

// alert(`${number} has ${numDigits} digit(s).`);



//3. The game "Guess the number." Ask the user to think of a number from 0 to 100 and guess it in the following way: each iteration,
//divide the range of numbers by half, write the result in N and ask the user "Is this your number > N, number <N or == N?".
//Depending on what the user indicates, reduce the range. The initial range from 
//0 to 100 is divided by half and you get 50. If the user indicates that their number is > 50,
//then change the range from 51 to 100. And so on until the user chooses == N

// const userNumber = 0;

// let minRange = 0;
// let maxRange = 100;

// while(minRange <= maxRange){

//     let guess=Math.floor((minRange + maxRange) / 2);

//     const userResponse = prompt(`Is your number > ${guess}, < ${guess}, or = ${guess}? (Enter >, <, or ==)`);

//     if (userResponse === "=") {
//         alert(`Your number is ${guess}.`);
//         break; 
//     } 
//     else if (userResponse === ">") {
//         minRange = guess + 1;
//     } 
//     else if (userResponse === "<") {
//         maxRange = guess - 1;
//     } 
//     else {
//         alert("Invalid input. Please enter >, <, or =.");
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Write a function that calculates the factorial of the number passed to it.


// const number=parseInt(prompt("insert number:"));

// let result=1;

// function calculateFactorial(number) {
   
//     if (number < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }
    
//     while(number>0){
//         result *= number;
//         number--; 
//     }
//     return result;
// }

// alert(`result : ${calculateFactorial(number)}`);


// 2. Write a function that takes three separate digits and turns them into one number. For example: the digits 1, 4, 9 will become the number 149.

// let result=1;

// const num1 =prompt("Insert first number:");
// const num2 =prompt("Insert second number:");
// const num3 =prompt("Insert third number:");


// function uniteNums(num1, num2, num3){
//     return parseInt(num1 + num2+ num3)
// }

// alert(`result : ${uniteNums(num1, num2, num3)}`);


// 3. Write a function that takes the length and width of a rectangle and calculates its area. If 1 parameter is passed to the function, then it calculates the square area.

// const num1 =parseInt(prompt("Insert first number:"));

// const num2 =parseInt(prompt("Insert second number.(optional));

// function areaCalculater(number1,number2){
//     if(number1 ===undefined){
//         if(number1 > 0){
//             return number1**2;
//         }
//     }
//     else{
//         if(number1 <= 0 && number2 <= 0){
//              return "Invalid input";
//         }
//         return number1*number2;
//     }
// }

// alert(`result : ${areaCalculater(num1, num2)}`);