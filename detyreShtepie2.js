// let arr5 = [2, 'edin', 6, 5, 2];
// let arr6 = [2, 'programeri', 6, 4, 7];
// let arr7=[];

// function sum(x,y){
//     if(typeof(x)==="string" && typeof(y)==="string"){
//         return `${x} ${y}`;
//     }else{
//         return x+y;
//     }
// }

// for(let i in arr5){
//     arr7.push(sum(arr5[i],arr6[i]));
// }
// console.log(arr7);


// EDHE PER MOS MU BASHKU TEKSTI 
                               

let arr8 = [2, 'edin', 6, 5, 2];
let arr9 = [2, 'programeri', 6, 4, 7];
let arr0=[];

function sum(x,y){
    if(typeof(x)==="string" && typeof(y)==="string"){
        return "Keta dy tekste nuk mund te bashkohen"
    }else{
        return x+y;
    }
}

for(let i in arr8){
    arr0.push(sum(arr8[i],arr9[i]));
}
console.log(arr0);