function sum(x,y){
    if(typeof(x)==="undefined"){
        console.log("x nuk ka vlere NaN");
    }else if(typeof(y)==="undefined"){
        console.log("y nuk ka vlere NaN");
    }else{
        console.log("x dhe y nuk ka vlere NaN");
    }
    let a = x+y;
    return a;
    
}
console.log(sum(5,3));

module.exports={sum};
