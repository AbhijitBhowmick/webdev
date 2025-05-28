

let x: number = 1;
console.log(x);

function greet( firstName: string, lastName: string): string {
    return `Hello ${firstName} ${lastName}`;
}
console.log(greet("John", "Doe"));

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10));
//type inference
function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(5, 10));

function isLegalAge(age: number){
    return age >= 18;
}       
console.log(isLegalAge(20));

function runAfter1s(fn : ()=> void) {
    setTimeout(fn, 1000);
}
runAfter1s(function(){
    console.log("Hello after 1 second");    
})

interface User{
    firstName: string;
    lastName: string;
    age: number;
}

function isLegalAge2(user: User){
    return user.age >= 18;
}   
console.log(isLegalAge2({firstName: "John", lastName: "Doe", age: 20}));