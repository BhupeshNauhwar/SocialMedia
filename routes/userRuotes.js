const express=require('express');
const userRoutes=express()
const controller=require('../controller/controller')

const ejs=require('ejs');
const session=require('express-session');

userRoutes.use(express.urlencoded({extended:false}));
userRoutes.use(express.static('public'));
userRoutes.set('view engine','ejs');
userRoutes.use(express.json());

userRoutes.get('/',controller.loadLogin);
userRoutes.get('/login',controller.verifyLogin);
userRoutes.post('/login',controller.verifyLogin);



module.exports=userRoutes
