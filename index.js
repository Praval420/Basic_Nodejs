const express=require('express');
const fs = require('fs');
const path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public'))); // giving the static pages the necessary things


app.get("/",function(req,res){
    fs.readdir('./files',function(err,files){  // here files is the array that contains the names of the files
        res.render('index',{files:files}); 
    });
})

app.post("/login",function(req,res){
    fs.writeFile(`./files/${req.body.login.split(' ').join('')}.txt`,req.body.details,function(err){
        console.log("error found");
    });
    res.redirect('/');
})


app.listen(3000);