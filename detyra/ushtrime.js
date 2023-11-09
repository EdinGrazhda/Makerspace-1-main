const name = 'Edin';
const surname='Grazhda';
let isWorking=false;
let age = 20;
const fullName=name+" "+surname+"is "+age+" years old";
console.log(fullName);
const fullName2=`${name}${surname}is${age}years old`;
console.log(fullName2);

if(age>=18 && age<=35 && !isWorking){
    console.log('Can sign up for course in Makerspace');
}else{
    console.log('Try next year !');
}