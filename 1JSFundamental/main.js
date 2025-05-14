var a =1 ;
a =2;
console.log(a);

let b =1 ;
b =2;
console.log(b);

const c =1 ;
//c =2;
console.log(c);


let fisrtname = "John";
let age = 30;
let isEmployed = true;
console.log("This persons anme is " + fisrtname + " and he is " + age + " years old and he is employed" + isEmployed);

if(isEmployed){
    console.log("This person is employed");
} else{
    console.log("This person is not employed");
}

let answer = 0;
for(let i = 0; i < 10; i++){
    answer =answer + 1;
    console.log(answer);
}
let person1 = "Abhijit";
let person2 = "Abhijit1";
let person3 = "Abhijit2";

const personArray = [person1, person2, person3];
console.log(personArray);
console.log(personArray[0]);
const ages = [20, 30, 40];
for(let i = 0; i < ages.length; i++){
    if (i%20 == 0){
        console.log("This person is " + ages[i] + " years old");
    }   
}
const user1 = {
    firstname : "Abhijit",
    gender : "male"
}
console.log(user1["firstname"]);
//Function
function sum(a, b){
    return a + b;
}

const value = sum(10 , 20);
console.log(value);                                                                                                                                                       