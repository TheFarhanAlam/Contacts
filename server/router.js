import express from "express";
import Contact from "./db/contactSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`Hello there`)
})

// add contacts 

router.post("/register", async (req, res)=>{
    const {name, email, phone} = req.body;

    if (!name || !email || !phone) {
        res.status(404).send(`Please enter data`)
    }

    try {
        const preuse = await Contact.findOne({email: email});
        if (preuse) {
            res.status(404).send(`User is already Present`)
        }else {
            const addContact = new Contact({
                name: name, 
                email: email,
                phone: phone
            })

            await addContact.save();
            res.status(201).json({message: "Contact added"}) 
        }
        res.send(preuse)
        
    } catch (error) {
        res.status(404).send(error)
    }
})

// get contacts 

router.get("/getcontact", async (req, res)=>{
    try {
        const getContact = await Contact.find();
        res.status(201).json(getContact);
    } catch (error) {
        console.log(error);
    }
})

router.get("/getuser/:id", async(req, res) => {
    try {
        console.log(req.params);
        const id = req.params.id;
        const userindividual = await Contact.findById({_id : id});
        console.log(userindividual);
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(404).json(error)
        console.log(error);
    }
})

// update user 
router.patch("/updatecontact/:id", async (req, res)=>{
    try {
        const id = req.params.id;

        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.send(updatedContact)
        res.status(201).json({success: "Done updated"})
    } catch (error) {
        console.log(error);
    }
})

// delete contact 
router.delete("/deletecontact/:id", async(req, res)=>{
    try {
        const id = req.params.id;

        const deletedcontact = await Contact.findByIdAndDelete({_id: id})
        console.log(deletedcontact);
        res.status(201).json("Deleted the contact")
    } catch (error) {
        console.log(error);
    }    
})

export default router