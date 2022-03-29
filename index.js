

//  var myName = " Bogdan"
// {
//     let secondName = "Caiutanu"
// }

//     console.log(myName)

//  const age = 25


// Primite si obiecte

// let boolean = false
// let n = null
// let undf = undefined 
// let num = 123
// let str = "Aceasta este un String"


// //object
// let person = {
//     age: 20
//     name: "Bogdan"
// }
//     let person2 = {
//         age: 30,
//         name: "Mihai"
//     } 

// const person = [person1, person2]
// cont people = [{ id: 1 , age: 35 , email: "person@email.com"

// }
// console.log(tipef(boolean))



// //Array
// let hobbies = ["Reading", "Biking", "Swimming"]
// const prices = [12.5 , 13.3 , 25.7, 30.1]

// const Biking = hobbies[1]
// const prices = price[3]
// // console.log(hobbies)
// // console.log(prices)

// //Operatori
// const sum = 1+1; console.log(sum)
// cont difference = 2 - 1; console.log(difference)
// cont division = 10 / 5 ; console.log(division)
// let multiplication = 10*5; console.log(multiplication)

// // 2.Logici && , !
// // 3. Comparatie ==, !=, ===, <= , >=

// const number1 = 12;
// const number2 = 10;
//  console.log(number1 == number2);
//  console.log(number1 != number2);

//  const myNumber = "12"

// console.log ( number1 === myNumber);

// // 4. atribuire = , += , -=, /=

// const myName = "Bogdan"
// let mySecondNumber = 20;
// console.log("My number: " + mySecondNumber)
// mySecondNumber += 5 ;
// console.log("My number: " + mySecondNumber);



// // FLOW
// const age = 15
// //debugger
// if(age < 18){
//     console.log("You are under age")

// } else {
//     console.log("You are an adult")
// }

// //for loop (bucle)
// cont people = ["Bogdan" , "Mihai", "Andreea", "Ovidiu"];

//  for(i=0; i<people.length; i++){
//      console.log(people[i]);
//  }
//  //sau pentru a inversa
  
//   for(i=people.length-1; i>=0; i--)
//   console.log(people[i]);
// }

//WHILE
// let number = 1
// while (number < 10){
//     console.log(number);
//     number++
// }

// DO WHILE

// do {
//     console.lod(number)
//     number++
// } while(number <= 10)
// let number = 1
// switch(number{
//     case 1:
//         console.log("Number este 1");
//         break;
//     case 2:
//         console.log("Number este 2");
//         break;
//     default:
//         console.log("Number este defaut: " + number)

// }

// //Prinderea si tratarea eroriror
// try{
// if (Number === 1){
//     console.log("number are valoarea 1")
// } catch(error){
//     console.log("Number trebuie sa fie diferit de 1");

// } finally{
//     console.log("Finally a fost executat")
// }
// } 

// FUNCTII

// function displayPesonalDetails(myName, age, email){
//     console.log("My name is: "+ myName)
//     console.log("My age is: " + age);
//     console.log("My email adress is : " + email)

// }

// displayPesonalDetails();

// function function1(anotherFunction){
//     anotherFunction()
// }

// function1(function(){
//     console.log("Functia a fost executata")
// });

//     function1(() => console.log("Functia a fost executata"))

// ((myName)) => {
//     console.log(myName);

// })();



// class Person{
//     constructor (firstName, lastName, dateOfBirth){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dateOfBirth = dateOfBirth;

//     }
//     calculateAge(){
//         return new Date().getFullYear() - this.dateOfBirth.getFullYear();

//     }
// }

// var p = new Person("Mihai", "Popescu", new Date("11-11-1985"));
// console.log (p.calculateAge());

// var h1 = document.querySelector("h1")
// console.log(h1.outerText)

// var submitButton = document.getElementById("btn-submit")
// submitButton.addEventListener("click", onBtnClick) 

// function onBtnClick(e) {
//     alert("Button has been clicked")
// }