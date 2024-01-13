let express = require("express")
let app = express()
let bodyparser  = require("body-parser");
const mongoose = require("./db/models/connection");
let cors = require("cors");
const authrouter = require("./routes/auth");
app.use(cors())
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());
app.use("/auth", authrouter);

app.listen(2000)