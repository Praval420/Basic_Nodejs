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

app.get("/files/:filename",function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render('show',{filename:req.params.filename,filedata:filedata});
    })
})

app.get("/edit/:filename",function(req,res){
    res.render('edit',{filename:req.params.filename});
})

app.post("/dost",function(req,res){
    console.log(req.body);
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.current}`,function(err){
        res.redirect("/");
    });

})

app.post("/login",function(req,res){
    fs.writeFile(`./files/${req.body.login.split(' ').join('')}.txt`,req.body.details,function(err){
        console.log("error found");
    });
    res.redirect('/');
})

// app.get("/sourav", (req, res) => {
//   res.render("hello");
// });

app.post("/sourav", (req, res) => {
  const prev = req.body.previous;
  const curr = req.body.current;
  console.log(prev+curr);
  res.render("hello",{prev,curr});
});;

app.listen(3000);