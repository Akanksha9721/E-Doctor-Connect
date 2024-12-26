const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    doctor: { type: Types.ObjectId, ref: 'doctors' },
    date: { type: Date },
    time: { type: String },
    available:{  type:Boolean,default:true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('slots', mySchema);