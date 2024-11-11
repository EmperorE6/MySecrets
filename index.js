import express from "express";
import axios from "axios";
import BodyParser from "body-parser";

const app=express();
const port=3000;


app.use(BodyParser.urlencoded({extended:true}));//middleware for using a body-parser to parse the js objects
app.use(express.static("public"));

//With the help of async we got the hold of asynchronous functions better as it tells the program to wait with keyword await until the information from the Api is retrieved and stored in api_result constant
app.get("/",async(req,res)=>{
    try{
        const api_result=await axios.get("https://secrets-api.appbrewery.com/random");
const api_data=api_result.data;
res.render("index.ejs",{secret:api_data.secret,user:api_data.username});
    }catch(error){
        res.status(404).send(error.message);
    }

})

app.get("/")
app.listen(port,()=>{
    console.log("The server is listening on port:"+ port)
})
