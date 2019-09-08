const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hi")
});

router.get("/about",(req,res)=>{
    res.render("index");
});

router.get("/skills",(req,res)=>{
    res.render("skills");
});

module.exports = router;