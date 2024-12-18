const { model,Schema, } =require('../connection');

const mySchema = new Schema ({
    patient: {type:String},  // 
    doctor: {type:String},// 
    reportTime: {type:Date,default:Date.now},  
    
    createdAt:{type:Date, default:Date.now}
    
});

module.exports=model('reports',mySchema);