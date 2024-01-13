let express = require("express")
let app = express()
let bodyparser  = require("body-parser");
const PORT = process.env.PORT || 2000
const mongoose = require("./db/models/connection");
let cors = require("cors");
const authrouter = require("./routes/auth");
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());
app.use("/auth", authrouter);
app.get("/",(req, res)=>{
    return res.json({success: true, message: "Server Running At PORT", PORT})
})

app.listen(PORT)