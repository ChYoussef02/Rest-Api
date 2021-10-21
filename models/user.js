const mongoose = require('mongoose');
const  Schema  = mongoose;

const UserSchema = new Schema({
    firstname :{type: String,required: true},
    lastname: {type: String,required: true},
    age: {type: Number,required: true},
});

const User = mongoose.model('User', UserSchema);

module.exports = Person;