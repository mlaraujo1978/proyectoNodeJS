//const { response } = require("express");
const express = require("express");
const userService = require("../services/user");
const router = express.Router();

router.get("/:userId", async(req,res)=>{
    const userId = req.params.userId;
    try{
        const user = await userService.getUser(userId);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
})

router.get("/",async(req,res)=>{
    const {firstName, email} = req.query;
    try{
        const users = await userService.getUsers(firstName, email);
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({ message: error.message});
    }
    res.send({firstName, email});    
})

router.post("/",async(req,res)=>{
    const { firstName, lastName, email, password } = req.body;
    try{
        const newUser = await userService.createUser({
            firstName,
            lastName,            
            email,
            password,
        }); 
        res.status(201).json(newUser);
    }  catch(error){
       res.status(500).json({ message: error.message});
    }   
   // res.send(response);              
}); 

router.put("/:userId",(req,res)=>{
    const userId = req.params.userId;
    const { name, email, password } = req.body; 
    const response = userService.updateUser(userId, { name, email, password });
    res.send(response);    
})

router.delete("/:userId",(req,res)=>{
    const userId = req.params.userId;
    const response = userService.deleteUser(userId);
    res.send(response);    
})

module.exports = router;

//minuto 33:15 video 5