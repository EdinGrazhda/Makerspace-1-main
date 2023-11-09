//let arr=[]
// for(let i = 1;i<=10;i++){
//     arr.push(i);
    
// }
// console.log(arr);

// let arr=[];
// for(let i = 1;i<=10;i++){
//     arr.unshift(i);
    
// }
// console.log(arr);

// let arr2=[]
//     for(let i = 10; i>=1;i--){
//         arr2.push(i);
//     }
// console.log(arr2);

// arr4=[];

// for(let i=1;i<=10;i++){
//     if(i >5 ){
//         arr4.unshift(i);
//     }else{
//         arr4.push(i);
//     }
// }
// console.log(arr4);

let arr5=[]
    for(let i = 1; i<=10;i++){
        arr5.push(i);
       
    }
console.log(arr5);

for (let i in arr5) {
  if(arr5[i]==3){
    console.log(i);
  }
  
}

const{sum}=require('./functions');

sum(5,4);




