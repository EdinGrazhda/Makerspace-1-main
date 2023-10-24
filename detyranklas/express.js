const express = require('express')
const app = express()
const port = 3000
const userRouters=
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/',(req,res)=>{
    res.send("This is a post method!");
})
app.put('/',(req,res)=>{
    res.send("This is a put method !!");
})
app.delete('/',(req,res)=>{
    res.send("This is a delete method !!!!");
})

app.use('api/users',userRouters)

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})