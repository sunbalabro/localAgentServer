const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/localAgent',{
}).then(()=>{
    console.log("Connected to DB")
});
module.exports = mongoose