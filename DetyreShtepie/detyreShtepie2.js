let arr1 = [2, 4, 6, 'test', 2];
let arr2 = [2, 5, 6, 4, 7];
let arr3=[];

function sum(x,y){
    if(typeof(x)===typeof(y)){
        return x+y;
    }else{
        return "Kta dy indexa nuk mund te bashkohen";
    }
}

for(let i in arr1){
    arr3.push(sum(arr1[i],arr2[i]));
}
console.log(arr3);
