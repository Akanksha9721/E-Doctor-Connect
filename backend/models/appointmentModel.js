const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'users' },
    slot: { type: Types.ObjectId, ref: 'slots', unique : true },
    description: { type: String },
    patientName: {type:String},
    patientAvatar:{type:String},
    patientAge:{type:String},
    patientGender:{type:String},
    slottiming:{type:String},
    slotdate:{type:Date, default:Date.now},
    status: {type:String, default:"booked"},
    prescription: {type:String},
    prescridedTests: {type:Array},
    report:{type:String},
    videocall:{type:String,default: "https://meet.google.com/iiu-mkka-pkn"},
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('appointments', mySchema);