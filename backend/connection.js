const mongoose=require ('mongoose');
const url="mongodb+srv://akanksha8467:akankshayadav@cluster0.bem80.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
    
}).catch((err) => {
    console.log(err);
    
});
module.exports =mongoose;