const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose"); 
 
const AccountSchema = new Schema({ 
    username: String, 
    password: String 
}); 
 
AccountSchema.plugin(passportLocalMongoose); 
 
// We export the Schema to avoid attaching the model to the 
// default mongoose connection. 
module.exports = mongoose.model("Account", AccountSchema); 