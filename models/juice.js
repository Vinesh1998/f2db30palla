const mongoose = require("mongoose") 
const juiceSchema = mongoose.Schema({ 
    juice_flavour : String,
    juice_name : String,
    juice_quantity: Number
}) 
 
module.exports = mongoose.model("juice",juiceSchema)