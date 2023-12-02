// Chapter 17 to 20

// Question 01

// var arr = [[],[],[]];

// console.log(arr);

// Question 02

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for(var i = 0; i < arr.length; i++){
    
//     console.log(arr[i]);

// }

// Question 03

// for(var i = 1; i <= 10; i++){

//     console.log(i);

// }

// Question 04

// var userInput = +prompt("Enter a number to show its multiplication table");
// var tableLength = +prompt("Enter length multiplication table", 12);

// for(var i = 1; i <= tableLength; i++){
//     document.write(userInput + " x " + i + " = " + userInput * i + "</br>");
// }

// Question 05

// var fruits = ["apple","banana","mango","orange","strawberry"];

// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// Question 06

// A ===> Counting
// for(var i = 1; i <= 15; i++){
//     console.log("Counting: ",i);
// }

// B ===> Reverse Counting
// for(var i = 10; i > 0; i--){
//     console.log("Reverse Counting: ",i);
// }
// for(var i = 10; i >= 1; i--){
//     console.log("Reverse Counting: ",i);
// }

// C ===> Even Number

// for(var i = 0; i <= 20; i++){
//     console.log("Even: ", i++);
// }

// for(var i = 0; i <= 20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// D ===> Odd Number

// for(var i = 0; i < 20; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// E ===> Series

// for(var i = 1; i <= 20; i++){
//     i++
//     console.log(i + "k");
// }

// Question 07

// var userInput = prompt("Welcome to ABC meal what do you want to order Sir/Ma'am");
// var A = ["cake","apple pie","cookie","chips","patties"];
// var flag = false;

// for(var i = 0; i < A.length; i++){
//     if(userInput === A[i]){
//         flag = true;
//         break;
//     }
// }
// if(flag === true){
//     console.log(userInput + " is available at index " + [i] + " in our bakery");
// }else{
//     console.log("We are sorry. " + userInput + " is not available in our bakery");
// }

// Question 08

// var num = [24, 53, 78, 91, 12];
// var large = num[0];

// for (var i = 0; i < num.length; i++) {
//   if (num[i] > large) {
//     large = num[i];
//   }
// }

// document.write("Array item " + num);
// document.write("<br/>The largest num is " + large);

// Question 10

// for(var i = 5; i <= 100; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }

var palindrome = ["level", "Maam","Wow","level", "Maam","Wow"];

