const express=require('express');
const app=express();
require('dotenv').config();

app.set("view engine","ejs");

const connectToDB=require('./config/mongoose');

const authroutes=require('./routes/authroutes');
const cookieParser=require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
connectToDB();


app.get("/" ,function(req,res){
    res.render("index");
});

app.get("/login",function(req,res){
    res.render("login");
});



app.use('/auth',authroutes);

app.listen(3000);