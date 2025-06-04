const express=require('express');
const path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public'))); // giving the static pages the necessary things


app.get("/",function(req,res){
    res.render('index');
})

app.post("/login",function(req,res){
    console.log(req.body);
    res.redirect('/');
})


app.listen(3000);