const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/CrudDB";
mongoose.connect(db, (err)=>{
    if(err){
        console.log('Error! '+err)
    }else{
        console.log('Connection Successful');
    }
})