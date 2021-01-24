const express = require('express');
const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');

const date=require(__dirname + "/date.js");     //requiring the user defined module.date object bound to exports of date.js module

console.log(date);
var items=[];            //global scope & array to store a list of items
var workItems=[];
const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));          // to get data from ejs form
app.use(express.static("public"));               //telling express to load static files(like css,js & images)

app.get("/",function(req,res){
  let day=date.getDate();            //calling the function that we exported from date.js module
 
res.render("list",{kindOfDay:day,listItems:items});
})

app.get("/work",function(req,res){
  res.render("list",{kindOfDay:"Work List",listItems:workItems});
})

app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.post("/",function(req,res){
  let item=req.body.newItem;      //tapping into request body(JS object) & picking up the value of newItem
  if(req.body.list==='Work List')
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    let item_text=item.trim();
    if(item_text!==''){
    items.push(item);
    res.redirect("/");             //redirecting to the home route to render all the tags 
  }
  else
  {
    
    res.redirect("/");
  }
}
})

app.listen(process.env.PORT || 3000,function(){
  console.log("Server is up & running");
})
