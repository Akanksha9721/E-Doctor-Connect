const { model, Schema, Types } = require('../connection');


const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'users' },
    paymentDetail: { type: Object, default: {} },
    createdAt: { type: Date, default: Date.now }
});


module.exports = model('payments', mySchema);