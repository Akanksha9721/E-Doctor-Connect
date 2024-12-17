const { model, Schema, } = require('../connection');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, require: true },
    contact: { type: String },
    qualification: { type: String },
    specilization: { type: String },
    experience: { type: Number },
    fees: { type: Number },
    avalilablity: { type: Date, default: Date.now },
    avatar: { type: String },
    city: { type: String, default: 'Unknown' },
    createdAt:{type:Date, default:Date.now}

});

module.exports = model('doctors', mySchema);