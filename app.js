const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {playschoolmodel} = require("./models/playschool")

mongoose.connect("mongodb+srv://gloria2001:gloria2001@cluster0.ipg35w1.mongodb.net/playschoolDB?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(cors())
app.use(express.json())


app.post("/add",(req,res)=>{

    let input = req.body

    const playschool = new playschoolmodel(input)
    playschool.save()
    console.log(playschool)

    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    //res.send("view")
    playschoolmodel.find().then(

        (data) => {
            
            res.json(data)
        }


    ).catch()


})

app.listen(8080,()=>{
    console.log("Server Started")
})