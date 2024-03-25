import express, { json, text } from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//view all books
router.get("/all",async(req,res)=>{

    try {
       const books=await Book.find({}) 

       return res.status(200).json({
        total:books.length,
        data:books
       })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

//view particular book
router.get("/:id",async (req,res)=>{
    try {
        const {id}=req.params;
        const book =await Book.findById(id);
        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

//create book
router.post("/new", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({
          message: "Send all required fields: title,author, publishYear",
        });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//update a book
router.put("/update/:id",async (req,res)=>{
    try {
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(400).send({message:"required all the fields"})
        }

        const {id}=req.params;
        const result=await Book.findByIdAndUpdate(id,req.body)

        if (!result){
            return res.status(404).json({message:"Book not found"})
        }
        return res.status(200).send({message:"Book Details updated Successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

//delete a book
router.delete("/delete/:id",async (req,res)=>{
    try {
        const {id}=req.params;
        const result=await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(404).json({message:"Book Not found"})
        }
        return res.status(200).send({message:"Book Deleted Successfully"})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message:error.message})
    }
})

export const bookRouter=router;