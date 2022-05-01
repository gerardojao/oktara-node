//import the model
import BlogModel from "../models/BlogModel.js";

//CRUD
//SHOW RECORDS
export const getAllCats= async (req,res)=>{
    try {
        const cats =await BlogModel.findAll()
        res.json(cats)
    } catch (error) {
        res.json({message: error.message})
    }
}
//SHOW RECORDS
export const getCatsById= async (req,res)=>{
    try {
        const cats = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(cats[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//create record
export const createCats= async (req,res)=>{
    try {
       await BlogModel.create(req.body)
       res.json({
           'message': 'New Cat registered successfully!'
       })
        } catch (error) {
        res.json({message: error.message})
    }
}
//update record
export const updateCats= async (req,res)=>{
    try {
       await BlogModel.update(req.body, {
           where:{
               id:req.params.id
           }
       })
       res.json({
           'message': 'Cat updated successfully!'
       })
        } catch (error) {
        res.json({message: error.message})
    }
}
//delete recod
export const deleteCats= async (req,res)=>{
    try {
       await BlogModel.destroy({ 
           where:{
               id:req.params.id
           }
       })
       res.json({
           'message': 'Cat deleted successfully!'
       })
        } catch (error) {
        res.json({message: error.message})
    }
}
