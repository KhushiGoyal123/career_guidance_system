const {Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    url:{type:String,required:true},
    img_url:{type:String,required:true},
});

const Service = new model("Service",serviceSchema);

module.exports = Service;