const mongoose = require('mongoose');

// Creating Schema
const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        lowercase : true,
        trim : true,
        required : true,
    },
    last_name : {
        type : String,
        lowercase : true,
        trim : true,
        required : true
    },
    email : {
        type : String,
        lowercase : true,
        trim : true,
        required : true,
        unique : true
    },
    gender : {
        type : String,
        lowercase : true,
        trim : true,
        required : true
    },
    Country : {
        type : String,
        lowercase : true,
        trim : true,
        required : true
    },
});
// Creating Model
const userModel =  mongoose.model('user', userSchema);

module.exports = userModel;