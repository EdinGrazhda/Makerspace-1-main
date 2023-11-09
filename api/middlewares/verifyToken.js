const jwt = require('jsonwebtoken');
const verifyToken=async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1];
        const verify=jwt.verify(token,procces.env.SECRET_TOKEN);
        if(verify){
            req.user=verify;
            next;
        }
    }catch(error){
        if(error instanceof JsonWebTokenError){
            res.status(401).send('invalid token');
        }else{
            console.log(error);
            res.status(500).send('internal server error!');
        }
    }
};
module.exports=verifyToken;