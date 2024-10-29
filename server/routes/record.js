import express from "express";

import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();


//GET list of all records
router.get("/", async (req, res) => {
    let collection = await db.collection("task");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//GET records by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("task");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);
    
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200); 
});

//create new records
router.post("/", async(req,res) => {
    try {
        let newDocument = {
            name: req.body.name,
            priority: req.body.priority,
            status: req.body.status,
        };
        let collection = await db.collection("task");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    }
    catch(err){
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

router.delete("/:id", async(req,res) => {
    try {
        const query = { _id: new ObjectId(req.params.id)
    };

    const collection = await db.collection("task");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
    }
    catch(err){
        console.error(err);
        res.status(500).send("error deleting task");
    }
});

export default router;