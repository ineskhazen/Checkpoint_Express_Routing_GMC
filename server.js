const { response } = require("express");

const express = require("express");
const testTime = require("./middleware/isAuth");

const app = express();
app.use(express.json());

app.use(testTime);

app.use(express.static("views"));

//console.log(__dirname);


// app.get("/",testTime,(request,response)=>{
//   response.sendFile( __dirname+"/views/Homepage.html");
// });
// app.get("/Homepage",testTime,(request,response)=>{
//   response.sendFile( __dirname+"/views/Homepage.html");
// });
// app.get("/Home",testTime,(request,response)=>{
//   response.sendFile( __dirname+"/views/Homepage.html");
// });

// app.get("/OurServices",testTime,(request,response)=>{
//   response.sendFile( __dirname+"/views/OurServices.html");
// });
// app.get("/Contactus",testTime,(request,response)=>{
//   response.sendFile( __dirname+"/views/Contactus.html");
// });
// app.get("/images/course.jpg",(req,res)=>{
//   res.sendFile(__dirname+"/images/course.jpg")
// })

// app.get("/style.css",testTime,(request,response)=>{
//   response.sendFile( __dirname+"/views/style.css");
// });

const PORT=3000;


app.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`server is running on ${PORT}`);
  });