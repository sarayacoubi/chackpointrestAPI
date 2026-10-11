const express = require("express");
const ContactUsers = require("../models/ContacUsers");


const contactUserRouter = express.Router();

contactUserRouter.post("/addcontactuser", async(req, res)=>{
    try{

     const found = await ContactUsers.findOne({email : req.body.email});
      if (found){
        return res.status(200).send('email is already existed');

      }
      const newContactUser = new ContactUsers(req.body);
      await newContactUser.save();
      res.status(200).send({msg: "contact added", newContactUser});
    }catch(error){
        res.status(500).send("could not add contact");
    }
});

contactUserRouter.get("/getallcontactuser", async(req, res)=>{
  try{
    const contacts = await ContactUsers.find();
    res.status(200).send({msg: "contact list", contacts});

  }catch(error){
    res.status(500).send("could not get contact");
  }
});

contactUserRouter.get("/getoncontactuser/:id", async(req, res)=>{
  try{

    const {id} = req.params;
    const found = await ContactUsers.findById(id);
  
    res.status(200).send({msg: "the contact", found});
    
    
  }catch(error){
    res.status(500).send("could not get contact")
  }
});

contactUserRouter.delete("/deletecontactuser/:id", async(req, res)=>{
  try{

    const {id} = req.params;
    const deletedcontactuser = await ContactUsers.findByIdAndDelete(id);
    if(!deletedcontactuser){
      return res.status(404).send({msg: "contact not found"});
    }
    res.status(200).send({
      msg:" contact deleted",
       deletedcontactuser
    });
    
  }catch(error){
console.log(error);
res.status(500).send("could not delete contact");
  }
});

contactUserRouter.put("/updatecontactuser/:id", async(req, res)=>{
  try{

    const {id} = req.params;
    const updatedContactUser = await ContactUsers.findByIdAndUpdate(id,req.body, {new: true,});

    if(!updatedContactUser){
      return res.status(404).send({msg: "contact not found"});
    }
    res.status(200).send({
      msg: "contact updated",
      updatedContactUser,
    });

  }catch(error){
    console.log(error)
    res.status(500).send("cound not updtate the contact")
  }
});



module.exports = contactUserRouter;