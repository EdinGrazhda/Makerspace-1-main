const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany(
            {
               where:{
                name:{contains:'U'},//endsWith:'t'
               },
               orderBy:{
                id:'desc',
               },
               select:{
                email:true,
               }
                
            });
            res.json(users);
    }catch(error){
        res.status(500).send('interval server error!');
    }
    // db.query('SELECT * FROM users', (err, result) => {
    // if (err) {
    //     console.log(err);
    //     return res.status(500).send('Internal Server Error');
    // }
    //     res.json(result);
    // });
};


const createUser = async (req, res) => {
    try {
        const { name, email, password,city } = req.body;//destructuring
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password,
            city,
            Post: {
              create: {
                title: "test title",
                body: "this is a test",
              },
            },
          },
        });
        res.json(user);
      } catch (error) {
        
        res.status(500).send("Internal server error!");
      }    
    // db.query('INSERT INTO users(full_name,email,role)values(?,?,?',[full_name,email,role],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         return res.status(500).send('internal server error');
    //     }
    //     res.status(201).send('User created succesfully !');
    // })
};

const updateUser = (req, res) => {
    const userId=params.id;
    const{full_name,email}=req.body
    db.query('UPDATE users SET full_name=?,email=? where id=?',[full_name,email,userId],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Internal server error!');
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('User not found.');
        }
        res.send('User updated successfully!');
    })
};

const deleteUser = (req, res) => {
    res.send('This is a Delete method!!!!!!!');
};

const getUser = (req, res) => {
  db.query('SELECT * FROM users WHERE id=?',
  [req.params.id],
  (err,result)=>{
    if(err){
        console.log(err);
        return res.status(500).send('Internal server code');
    }
    if(result.length == 0){
        return res.status(500).send(`User with id: ${req.params.id} is not found`);
    }
    res.json(result);
  })
};
const login= async(req,res)=>{
  try{
    const {email,password}=req.body;
    const user = await prisma.user.findFirst({
      where:{
        email,
        password,
      },
    });
    if(user){
      const token= await jwt.sign(user,process.env.SECRET_TOKEN,{
        expiresIn:'5m',
      });
      res.json(token);
    }else{
      res.status(404).send('Please chek youur credentials');
    }
  }catch(error){
    console.log(error);
    res.status(500).send("Internal server error!");
  }
}

module.exports = { getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  login 
};