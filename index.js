
const express=require('express');
const app=express();
const Port=3000;
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/SocialMedia')
.then(()=>{
    console.log('mongodb connected');
})
.catch(()=>{
    console.log('failed to connect to mongodb');
})


const Routes=require('./routes/userRuotes');
app.use('/',Routes);


app.listen(Port,()=>{
    console.log(`Server started at http://localhost:${Port}`);
})