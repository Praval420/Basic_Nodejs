const express=require('express');
const path=require('path');
const app=express();

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public'))); // giving the static pages the necessary things


app.get("/",function(req,res){
    res.render('index');
})

app.get("/sourav/:ik",function(req,res){
    res.send(req.params.ik);   //dynamic routing using colon
})


app.listen(3000);