import express from "express";
import axios from "axios";
import detonv from "dotenv";

detonv.config();

const app = express();
const port = process.env.PORT||3000;

app.use(express.static('public'));
app.set("view engine", "ejs");

const apiUrl = process.env.API_KEY;



app.get('/',async(req,res)=>{

    try{
        const response = await axios.get(apiUrl);
        const resp = response.data.data;
        res.render('index.ejs',{anime:resp});
    }
    catch(error){
        res.status(404).send(error.message);
    }
   
    

});


app.listen(port,()=>{
    console.log(`Server running on Port ${port}`);
});