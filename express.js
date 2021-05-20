const express = require('express');
const  app = express();

app.get("/",(req,res)=>{

    const s1 = Number(req.query.num1)
    const s2 = Number(req.query.num2)
    const add = s1 + s2;
    res.send("the value is "+ add);
           
})

app.listen(3000,(res)=>{
    console.log("server started at port 3000")
})