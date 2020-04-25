const express = require("express");
const router = express.Router();
const pool = require("../db");


router.post("/post", async (req,res)=>
{
    try {
        const {name, text} = req.body

        const user = await pool.query("INSERT INTO users(user_name,user_text) VALUES($1,$2)",[name,text])

        res.json(user)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("server error")
    }

})
module.exports = router;