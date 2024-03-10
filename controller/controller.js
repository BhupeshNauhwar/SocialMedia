const User=require('../models/user');


const loadRegister=async(req,res)=>{
    try {
        res.render('register');
    } catch (error) {
        console.log(error.message);
    }
}

const insertUser=async(req,res)=>{
    try {
        const newUser= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            Contact_Number:req.body.number,
            gender:req.body.gender,
            DoB:req.body.dob,
            password:req.body.password,
            confirm_password:req.body.cpassowrd
        })
        const userData=await newUser.save();
        if(userData){
       
            res.render('register',{message:Done});
        }
        else{
            res.render('register',{message:error in registration})
        }
        
    } catch (error) {
        console.log(error.message);        
    }
}

const loadLogin=async(req,res)=>{
    try {
        res.render('login');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
    loadLogin
}