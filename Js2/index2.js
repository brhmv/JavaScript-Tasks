// 1. Write a function that takes a string and displays statistics about 
// it: number of letters, number of digits, and number of other 
// characters.


// function StatsOfStr(str) {
//     console.log(`str: ${str}`);

//     const countOfletters =str.match(/[a-zA-Z]/g);

//     const countOfNumbers = str.match(/[0-9]/g);

//     console.log(`countOfletters : ${countOfletters.length}`);   

//     console.log(`countOfNumbers : ${countOfNumbers.length}`);   
// }

// StatsOfStr("asdf 123");

// 2. Write a function that takes a two-digit number and returns it 
// in text form. For example: 35 – thirty five, 89 – eighty nine,12 – twelve. 

// function numberToText(number) {
//   const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//   const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//   const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

//   if (number < 10) return units[number]; 

//   else if (number < 20) return teens[number - 10]; 
  
//   else {
//     let tensDigit = Math.floor(number / 10);
//     let unitsDigit = number % 10;
//     return tens[tensDigit] + (unitsDigit > 0 ? '-' + units[unitsDigit] : '');
//   }
// }

// console.log(numberToText(42));


// 3. Write a function that replaces capital letters with small, 
// small with capital, and numbers with underscore in the 
// received string.

// function transformString(Str) {
//   let resultStr = '';
  
//   for (let i = 0; i < Str.length; i++) {
//     const char = Str.charAt(i);
    
//     if (/[A-Z]/.test(char)) resultStr += char.toLowerCase();
//     else if (/[a-z]/.test(char)) resultStr += char.toUpperCase();
//     else if (/[0-9]/.test(char)) resultStr += '_'; 
//     else resultStr += char;

//   }
  
//   return resultStr;
// }

// console.log(transformString("capital LOWER 221312"));



// 4. Write a function that converts names of css styles with a hyphen 
// to a name in the CamelCase style: font-size to fontSize, background-color to backgroundColor, text-align to textAlign.


// function cssToCamelCase(cssName) {
//   return cssName.replace(/-([a-z])/g, (match, char) => char.toUpperCase());
// }

// console.log(cssToCamelCase('background-color'));


// 5. Write a function that takes a phrase and converts it to an abbreviation. 
// For example: cascading style sheets to CSS, object-oriented programming to OOP. 
// 2

// function strToAbbreviation(str){

// let slicedStr= str.split(" ");

// console.log(slicedStr);

// let resultStr="";

// for (const i of slicedStr) {
//     resultStr+=i[0];
// }

// return resultStr.toUpperCase();
// }

// const str="cascading style sheets";

// console.log(strToAbbreviation(str));


// 6. Write a function that takes any number of strings, combines 
// them into one long string and returns it.

// function strCombine(strArray){
//     let resultStr="";
//     for (const i of strArray) {
//         resultStr+=i;
//     }
//     return resultStr
// }

// const strArr=["Apple", "Banana", "Cherry", "Date", "Fig"];

// console.log(strCombine(strArr));


// 7. Write a calculator function. The function takes a string with 
// an example, determines what is to be done (+ – * /), converts 
// operands to numbers, solves it, and returns the result. 


// const str="42+33-70";

// function calculator(str){
//     return eval(str);
// }

// console.log(calculator(str));


// 8. Write a function that gets a url and displays detailed information about it. 
// For example: url “https://itstep.org/ua/about”, “protocol: 
// https, domain: itstep.org, path: /ua/about”.


// function detailsOfUrl(url){

// let strDividedTwo = url.split("//");

// let mainSide= strDividedTwo[1].split("/");

// const protocol= strDividedTwo[0];
// const domain=mainSide[0];
// const path="/"+mainSide[1]+"/"+mainSide[2];

// return `protocol: ${protocol}  domain: ${ domain}  path: ${ path}`
// }

// console.log(detailsOfUrl("https://itstep.org/ua/about"));


// 9. Write a function that takes a string and delimiter and returns 
// an array of substrings that are broken up using the specified 
// delimiter. 
// For example: line “10/08/2020”, separator “/”, the result: “10”,
// “08”, “2020”. 
// While performing the task, do not use the split() function.


// function customSplit(inputString, delimiter) {
//   const substrings = [];
//   let currentSubstring = '';

//   for (const char of inputString) {
//     if (char === delimiter) {
//       if (currentSubstring !== '') {
//         substrings.push(currentSubstring);
//         currentSubstring = '';
//       }
//     } else {
//       currentSubstring += char;
//     }
//   }

//   if (currentSubstring !== '') {
//     substrings.push(currentSubstring);
//   }

//   return substrings;
// }

// const result = customSplit("10/08/2020", "/");
// console.log(result);


// 10. Write a function to output text according to a given template. 
// As the first parameter, the function takes a template that can 
// use % in the text, index of the input parameter is specified after 
// the % sign. When outputting index instead of %, output value 
// of the corresponding input parameter. 
// For example: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) must print “Today is Monday 10.8.2020”


// function print(template, ...values) {
//   let result = template;

//   for (let i = 0; i < values.length; i++) {
//     const placeholder = `%${i + 1}`;
//     result = result.replace(placeholder, values[i]);
//   }

//   return result;
// }

// const output = print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);
// console.log(output); 