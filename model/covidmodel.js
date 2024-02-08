const mongoose= require("mongoose")
const covidSchema=new mongoose.Schema(
    {
        Name:String,
        Address:String,
        sympton:String,
        Status:String,
        PhoneNo:String
    }
)
module.exports=mongoose.model("covid",covidSchema)