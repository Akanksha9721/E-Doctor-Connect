const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'users' },
    slot: { type: Types.ObjectId, ref: 'slots', unique : true },
    description: { type: String },
    patientName: {type:String},
    patientAge:{type:String},
    patientGender:{type:String},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('appointments', mySchema);