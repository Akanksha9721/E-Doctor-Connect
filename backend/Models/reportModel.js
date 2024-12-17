const { model,Schema, } =require('../connection');

const mySchema = new Schema ({
    patient: {type:String},  // 
    doctor: {type:String},// 
    reportTime: {type:Date,default:Date.now},  
    details: {},
    status: {},
    
});

module.exports=model('usres',mySchema);