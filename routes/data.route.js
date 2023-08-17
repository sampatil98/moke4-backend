const {Router}=require("express");
const {dataModel}=require("../model/tripdata");

const tripdataRouter=Router();

tripdataRouter.post("/add",async(req,res)=>{
    try {
        const data= new dataModel(req.body);
        await data.save();
        res.status(200).send({
            isError:false,
            message:"Trip added Successfully"
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            message:error
        })
    }
});

tripdataRouter.get("/",async(req,res)=>{
    try {
        const {filter,sort}=req.query;

        if(filter && sort ){
            let type=(sort=="asc")?1:-1;
            const data= await dataModel.find({"destination":filter}).sort({price:type});
           return res.status(200).send({
                isError:false,
                data:data
            })
        }
        if(filter){
           
            const data= await dataModel.find({"destination":filter});
          return  res.status(200).send({
                isError:false,
                data:data
            })
        }
        if(sort){
            let type=(sort=="asc")?1:-1;
            const data= await dataModel.find().sort({price:type});
            return res.status(200).send({
                isError:false,
                data:data
            })
        }
       
        const data= await dataModel.find();

        res.status(200).send({
            isError:false,
            data:data
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            message:error
        })
    }
});

tripdataRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const data= await dataModel.findByIdAndDelete(id);

        res.status(200).send({
            isError:false,
            message:"Trip deleted Successfully"
        })
        
    } catch (error) {
        res.status(400).send({
            isError:true,
            message:error
        })
    }
});




module.exports={tripdataRouter};