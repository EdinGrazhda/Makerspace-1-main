// detyra e pare 
let computer ={
    rryma:true,
    bateria:false
}

 start=()=>{
    return new Promise((resolve,reject)=>{
        if(computer.rryma && computer.bateria){
            setTimeout(()=>{
                resolve("Computer started");
            },1500)
        }else{
            if(!computer.bateria){
                setTimeout(()=>{
                    reject("bateria");
                },1500)
            }else{
                reject("rryma");
            }
            
            
        }
    })
 }

 let moreEnergy=(Trofaz)=>{
    console.log("Kemi shtuar energji:", Trofaz);
    computer[Trofaz]=true;
    start().then((data)=>{
        console.log(data);
     }).catch((err)=>{
        console.log("Kompjuteri po i mungon bateria ose ska rryme");
        moreEnergy(err);
     })
 }

 start().then((data)=>{
    console.log(data);
 }).catch((err)=>{
    console.log("Kompjuteri po i mungon bateria ose ska rryme");
    moreEnergy(err);
 })
 //detyra e dyte

 let kursi ={
    nxenes:true,
    profesora:false,
 }

 cours=()=>{
    return new Promise((resolve,reject)=>{
        if(kursi.nxenes && kursi.profesora){
            setTimeout(()=>{
                resolve("profesorat mund te kordinohen per mesimdhenje !");
            },1500)
        }else{
            if(!kursi.profesora){
                setTimeout(()=>{
                    reject("profesora");
                },1500)
            }else{
                reject('nxenes');
            }
        }
    })
 }

 let shpalljePunes=(pun)=>{
    console.log("Kemi siguruar profesor per mesimdhenje:", pun);
    kursi[pun]=true;
        cours().
        then((data)=>{
            console.log(data);
         }).catch((err)=>{
            console.log("Profesorat ose nxenesit duhen te sigurohen !");
            shpalljePunes(err);
         })

    }
 

 cours().then((data)=>{
    console.log(data);
 }).catch((err)=>{
    console.log("Profesorat ose nxenesit duhen te sigurohen ");
    shpalljePunes(err);
 })

