const express = require('express');
const router = express.Router();

const userRoleModule = require('../models/roles');

// Add new user role
router.post('/', (req, res)=>{
    let userData = req.body;

    let user = new userRoleModule(userData);
    user.save((error, docs)=>{		
        if(error){
            console.log('Error! '+error)
        }else{
            res.status(200).json({
                message: "New role inserted Successfully",
                data: docs
            })
        }
    })
})


// fetch all user roles 
router.get('/', (req, res)=>{
    userRoleModule.find((err, docs) => {
        if(!err) { 
            res.status(200).json({ 
                'Message': 'User role fetched successfully', 
                'Data': docs 
            });  
        } else { console.log('Error in retrieving Employees :' + JSON.stringify(err, undefined, 2)); }
    })
})

module.exports = router;