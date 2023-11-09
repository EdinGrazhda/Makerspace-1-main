let inventory={
    water:true,
    soap:false
}
start = () =>{
    return new Promise((resolve,reject)=>{
        if(inventory.water && inventory.soap){
            resolve("Washing machine has started working");
        }else{
            reject("Machine cant start working because you are missing soap or water");
        }
    })
}
start()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})