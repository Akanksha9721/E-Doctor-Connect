const { model, Schema,Types } = require('../connection');

const mySchema = new Schema({
    appointment: { type: Types.ObjectId, ref: 'appointments' },
    prescription: { type: String },
    description: { type: String },
    suggestedTest: { type: String },
    createdAt: { type: Date, default: Date.now }

});

module.exports = model('reports', mySchema);