/* console.log("server.js is running");
function add(a,b){
return a+b;
}

var add = function (a,b){
    return a + b;
}

var add =(a,b) => {return a+b;}  arrow function

var add = (a,b) => a+b; ecama script 

var result =add(2,10);
console.log(result);

(function(){
    console.log("saurabh kumar");
}())

callback function: means a function in which the another function will be access the function.this is called the called the callback function.

function callback(){
    console.log('saurah callback function will be called');
}
const add = function(a,b,callback){
    var result = a+b;
    console.log('result:',result);
    callback()
}
add(2,3,callback)


const add = function(a,b,saurabh){
    var result = a+b;
    console.log(result);
    saurabh();
}

add(2,3,function(){
    console.log("call the cllbackfunction");
})

add (2,9, () => console.log("callback will be callback function"));


const { log } = require('console');
var fs = require('fs')
var os = require('os')

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('Greeting.txt', 'Hi '+ user.username + '!\n ' ,()=>{

    console.log('file is created');

})

console.log(os);

const notes = require('./notes');
var _ = require('lodash');

var data = ['person','person', 1,2,1,2,1,2,3,4,5,6, 'saurabh']

var filter = _.uniq(data);
console.log(filter);

console.log(_.isString(1));
console.log(notes.age);
var age = notes.age    
var result= notes.addnumber(age+18,10)
console.log(result);
console.log("notes server is avalible");

*/

/*
 console.log("Hello from nodejs");

const jsonString = '{"name": "john", "age":30 ,"city":  "New York"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name,jsonObject.age, jsonObject.city);

 const objecttoConvert ={
     name:"saurabh",
     age:54,
    city:"Delhi/Noida"

 };

 const json = JSON.stringify(objecttoConvert);
 console.log(json);

console.log(typeof json);

*/


/* create server with express */

/*

 const express = require('express')
 const app = express()

 app.get('/', function (req, res) {
   res.send('welcome to my how can i help you! ')           // menu of hotel 
 })

 app.get('/saurabh', function (req,res){

     var details ={
         name:"Saurabh Kumar",
         email:"saurabhkumarsingh@gmail.com",
         age:24,
         address:"A-79 sec-33 Noida ",
         hobbies:"Reading novels,books,coding"
     }
     res.send(details)

 })

 app.post('/details', function (req,res){

      res.send("details data has been saved")
  })

  app.listen(3000, ()=>{
      console.log("server is listing into the hotel");
  })   address of waiter


const express = require('express')
const app = express()
const db = require('./db')

*/


app.get('/',function(req,res){
    console.log("Get request will be connected succesfully !");
})


app.get('/chicken', function (req,res)  {
    var samosa ={
        name: "samosa",
        size: 10,
        price : 20,
        hotelname:"sahusahebhotelandcompany"
    }
    res.send(samosa)
})


app.listen(3000,function() {
    console.log("server is listning in this port number");
})








