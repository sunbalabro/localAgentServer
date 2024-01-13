const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    email: {type: String, require: true},
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    location: {type: String},
    country: {type: [String]},
    password: {type: String, require: true},
    role: {type: String, require: true},
    isVerified: {type: Boolean},
    userId: {type: String},
    token: {type: String, require: true},
    prices: {type: [String]},
    taskOffered: {type: [String]},
    profilePic: {type: Object},
    resources: {type: [String]},
    howItWorks: {type: String},
    deliveryDays: {type: [String]}

})

const AuthModal = mongoose.model("User", UserSchema);
module.exports = AuthModal;