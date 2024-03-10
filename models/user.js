const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    laststName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Contact_Number:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        enum:[male,female,other],
        required:true
    },
    DoB:{
        type:Date,
        required:true
    },
    Password:{
        type:String,
        required:true
        
    },
    Confirm_Password:{
        type:String,
        required:true

    }
})

module.exports=mongoose.model("User",userSchema);