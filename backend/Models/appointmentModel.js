const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    patient: { type: Types.ObjectId, ref: 'users' },
    doctor: { type: Types.ObjectId, ref: 'slots' },
    createdAt: { type: Date, default: Date.now }


});

module.exports = model('appointments', mySchema);