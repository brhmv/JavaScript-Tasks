// Task 1
// Create a "shopping list" array. Each element of the array is an object 
// that contains product name, the required quantity and whether it is 
// purchased or not. Write several functions to work with such an array.


const shoppingList = [
  { name: 'Apples', quantity: 5, purchased: true },
  { name: 'Milk', quantity: 2, purchased: false },
  { name: 'Bread', quantity: 7, purchased: true },
  { name: 'Eggs', quantity: 10, purchased: false },
  { name: 'Oranges', quantity: 4, purchased: false },
  { name: 'Cereal', quantity: 1, purchased: true },
  { name: 'Chicken', quantity: 8, purchased: false },
  { name: 'Banana', quantity: 9, purchased: true },
  { name: 'Watermelon', quantity: 6, purchased: false },
  { name: 'Lemon', quantity: 3, purchased: true }
];

// 1. Displaying the entire list on the screen in such a way that first 
// go uncharged products, and then bought.

// function DisplayArray(shoppingList){
// const arr1 = shoppingList.filter((item)=> item.purchased === false);
// const arr2 = shoppingList.filter((item)=> item.purchased === true);

// const arr3=arr1.concat(arr2);
// console.log(arr3)
// }

// DisplayArray(shoppingList);

// 2. Adding a purchase to the list. Note that when adding a purchase 
// with the already existing product in the list, you need to increase 
// the quantity in the existing purchase instead of adding a new one.


// function AddPurchase(purchase){    
//     const item = shoppingList.find(item => item.name === purchase.name);
    
//     if (item) item.quantity += purchase.quantity;

//     else shoppingList.push(purchase);    
// }

// let newPurchase = { name: 'Bread', quantity: 7, purchased: false };
// AddPurchase(newPurchase);
// console.log(shoppingList);


// 3. Purchase of the product. Function takes product name and 
// marks it as purchased.

// function purchaseProduct(productName) {
// const item = shoppingList.find(item => item.name === productName);
// if (item) item.purchased=true;
// else console.log("Product not found:");
// }

// purchaseProduct("Watermelon");

// console.log(shoppingList);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 2
// Create an array that describes receipt in a store. Each element of 
// the array consists of the product name, quantity, and price per unit. 
// Write the following functions.


const receipt = [
  { productName: 'Apples', quantity: 3, pricePerUnit: 1.5 },
  { productName: 'Bananas', quantity: 2, pricePerUnit: 0.75 },
  { productName: 'Milk', quantity: 1, pricePerUnit: 2.0 },
  { productName: 'Bread', quantity: 2, pricePerUnit: 1.0 },
  { productName: 'Eggs', quantity: 1, pricePerUnit: 2.5 },
  { productName: 'Cheese', quantity: 1, pricePerUnit: 3.0 },
  { productName: 'Pasta', quantity: 3, pricePerUnit: 1.2 },
  { productName: 'Tomatoes', quantity: 4, pricePerUnit: 0.5 },
  { productName: 'Chicken', quantity: 2, pricePerUnit: 5.0 },
  { productName: 'Rice', quantity: 1, pricePerUnit: 2.0 },
];

// 1. Displaying a receipt on the screen.

// function displayReceipt(receiptArr,receiptName) {
//     const item = receiptArr.find(item => item.productName === receiptName);
//     console.log(item);
// }

// displayReceipt(receipt,"Rice");


// 2. Calculation of the total amount of purchase.

// function calculateTotalPurchase(receipt) {
// let totalAmount = 0;
// for (const item of receipt) {
// totalAmount += item.quantity * item.pricePerUnit;
// }
// return totalAmount;
// }

// console.log(calculateTotalPurchase(receipt));


// 3. Getting the most expensive purchase in the receipt.

// function getMostExpensivePurchase(receipt){
//     mostExpensive=0;
//     let mostExpItem;
//     for (const i of receipt) {
//         let amount = i.quantity * i.pricePerUnit;
//         if (amount > mostExpensive){
//             mostExpensive= amount;
//             mostExpItem=i;
//         }    
//     }
//     return mostExpItem;
// }

// console.log(getMostExpensivePurchase(receipt));


// 4. Calculate the average cost of a single item in the receipt. 

// function calculateAvarageCost(receipt){
//     let totalAmount=0;
//     for (const item of receipt){
//         totalAmount += item.quantity * item.pricePerUnit;
//     }
//     return totalAmount / receipt.length;
// }

// console.log(calculateAvarageCost(receipt));


///////////////////////////////////////////////////////////////////////////////////////////////////////

// Task 3
// Create an array of CSS styles (color, font size, alignment, underline, 
// etc.). Each element of the array is an object consisting of two properties: 
// the style name and the style value. 
// And write a function that takes an array of styles and text and 
// prints this text using document.write() in the <p> </p> tags, adding 
// the style attribute to the opening tag with all the styles listed in the 
// array.

// const styles = [
//   { name: 'color', value: 'red' },
//   { name: 'font-size', value: '50px' },
//   { name: 'text-align', value: 'center' },
//   { name: 'text-decoration', value: 'underline' }
// ];

// function generateStyledText(styles, text) {
//   const styleAttributes = styles.map(style => `${style.name}: ${style.value};`);
//   console.log(styleAttributes);

//   const styleString = styleAttributes.join(' ');
//  console.log(styleString);

//   const html = `<p style="${styleString}">${text}</p>`;
  
//   document.write(html);
// }

// generateStyledText(styles, 'Hello, World!');


///////////////////////////////////////////////////////////////////////////////////////////////////////


// Task 4
// Create an array of the Academy classrooms. The classroom object 
// consists of name, number of seats (from 10 to 20), and name of the 
// department for which it is intended. 




const academyClassrooms = [
  { name: 'Classroom A', seats: 20, department: 'Art' },
  { name: 'Classroom E', seats: 14, department: 'Computer Science' },
  { name: 'Classroom I', seats: 22, department: 'Art' },
  { name: 'Classroom B', seats: 20, department: 'Mathematics' },
  { name: 'Classroom D', seats: 12, department: 'Art' },
  { name: 'Classroom H', seats: 19, department: 'Geography' },
  { name: 'Classroom C', seats: 18, department: 'Chemistry' },
  { name: 'Classroom Z', seats: 11, department: 'Music' },
  { name: 'Classroom F', seats: 16, department: 'History' },
  { name: 'Classroom G', seats: 17, department: 'English' }
];

// 1. Display all classrooms.


// function displayClassrooms(classrooms){
//     console.log(classrooms);
// }
// displayClassrooms(academyClassrooms);

// 2. Display classrooms for the specified department.

// function displayClassromsWithDepartment(classrooms,departmentName){

//     let newClassroomsArr =classrooms.filter((classroom)=> classroom.department===departmentName);
//     console.log(newClassroomsArr);
// }

// displayClassromsWithDepartment(academyClassrooms,"Art");


// 3. Display only those classrooms that are suitable for the transferred 
// group. The object-group consists of name, number of students,and department name. 


// let group={name:"681",studentsCount: 16,departmentName:"Art"};

// function displayTransferrableClassees(classrooms,group){
//      let transfarebleClassroms =classrooms.filter((classroom)=> classroom.department===group.departmentName && classroom.seats >= group.studentsCount);
//      console.log(transfarebleClassroms);
// }

// displayTransferrableClassees(academyClassrooms,group);


// 4. The function of classroom sorting by number of seats.

// function sortCountOfSeats(classrooms,seatCount){
//     let sortedClassroomsArr =classrooms.filter((classroom)=>classroom.seats === seatCount);
//     return sortedClassroomsArr;
// }

// console.log(sortCountOfSeats(academyClassrooms,20));


// 5. Function of classroom sorting by name (alphabetically)

// function sortClassName(classrooms){
//     let sortedClassroomsArr =classrooms.sort((classroom1, classroom2) => {
    
//     const name1 = classroom1.name;
//     const name2 = classroom2.name;
    
//     if (name1 < name2) return -1;
//     else if (name1 > name2) return 1;
//     else return 0;
//     });
//     return sortedClassroomsArr;
// }

// console.log(sortClassName(academyClassrooms));