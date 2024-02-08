const express =require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const covidrouter=require("./controllers/covidrouter")


const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Chitrakradha2000:radha2000@cluster0.djtheuk.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/covid",covidrouter)

app.listen(3009,()=>{
    console.log("server running");
})