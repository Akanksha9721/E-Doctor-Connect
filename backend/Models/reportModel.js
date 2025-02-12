const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    appointment: { type: Types.ObjectId, ref: 'appointments' },
    prescription: { type: String, default: '' },
    description: { type: String, default: '' },
    suggestedTest: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('reports', mySchema);