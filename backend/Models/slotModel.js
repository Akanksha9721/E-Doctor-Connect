const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    doctor: { type: Types.ObjectId, ref: 'doctors' },
    date: { type: Date },
    startTime: { type: String, default: Date.now },
    available: true
});

module.exports = model('slots', mySchema);