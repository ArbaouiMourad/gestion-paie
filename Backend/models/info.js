const mongoose =require('mongoose')
const schema = mongoose.Schema ;


const DataSchema =new schema ({
namemployeur:{type: String},
adressemployeur:{type: String},
numemployeur:{type: String},
phonemployeur:{type:String},
namemployé:{type: String},
prenomemployé:{type: String},
categoryemployé:{type:String},
numcnssemployé:{type:String},
typecontrat:{type: String}

});

module.exports=Data=mongoose.model("data",DataSchema);
