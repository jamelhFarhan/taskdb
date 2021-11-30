const Mongoose = require("mongoose");

const coursesModel = new Mongoose.Schema({
    name:{type:String},
    description:{type:String},
    img:{type : String}
})

module.exports = Mongoose.model("coursesModel", coursesModel)