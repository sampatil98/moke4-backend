const mongoose=require("mongoose");

const dataSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    destination:{
        type:String,
        require:true
    },
    travelers:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
});

const dataModel=mongoose.model("tripdata",dataSchema);

module.exports={dataModel}

