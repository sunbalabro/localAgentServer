const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testuser:sunbal147@cluster0.yafia.mongodb.net/localAgent',{
}).then(()=>{
    console.log("Connected to DB")
});
module.exports = mongoose