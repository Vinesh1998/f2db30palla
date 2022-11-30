const mongoose = require("mongoose") 
const juiceSchema = mongoose.Schema({ 
    juice_flavour : {
        type:String,
        required:true},
    juice_name : {
        type:String,
        required:true},
    juice_quantity: {
        type:Number,
        required:true,
        min:1,
        max:2000
    }
}) 
 
module.exports = mongoose.model("juice",juiceSchema)