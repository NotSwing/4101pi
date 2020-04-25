const express = require("express");
const app = express();
const cors = require("cors");
const client = require("./db")
//middleware

app.use(cors());
app.use(express.json());

//routes
app.post("/post", async (req,res)=>
{
    try {
        const {name, text} = req.body

        const user = await client.query("INSERT INTO users(user_name,user_text) VALUES($1,$2)",[name,text])

        res.json(user)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("server error")
    }

})
//get data
app.get("/get", async (req,res)=>
{
    try {
        const allUsers = await client.query("SELECT * FROM users");
        res.json(allUsers.rows);

    } catch (error) {
        console.log(error.message)
        
    }

})
// app.use("/post", require("./routes/users"));

app.listen(process.env.PORT);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

// app.listen(5000, () => {
//   console.log(`Server is starting on port 5000`);
// });