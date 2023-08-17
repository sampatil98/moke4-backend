const express=require("express");
const cors=require("cors");
require("dotenv").config();

const {connection}=require("./config/db");
const {tripdataRouter}=require("./routes/data.route");

const app=express();

app.use(express.json());
app.use(cors());

app.use("/data",tripdataRouter);

app.listen(process.env.port, async ()=>{
    try {
        await connection;
        console.log("connected to DB")
        console.log(`server is running on port 8080`)
    } catch (error) {
        console.log(error)
    }
});