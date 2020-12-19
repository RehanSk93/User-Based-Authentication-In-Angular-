const mongoose = require('mongoose');

const userRole = new mongoose.Schema({
    roleName: { type: String },
    roleId: { type: String }
})

module.exports = mongoose.model('userAuth', userRole);		
