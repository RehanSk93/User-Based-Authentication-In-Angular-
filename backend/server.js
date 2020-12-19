const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoleAPI = require('./routes/userRole');
const dbCon = require('./dbCon/dbCon');

// Set your post no
const port = process.env.port | 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/userRoles', userRoleAPI);

app.listen(port, ()=>{
    console.log('Server is running port no ' + port);
})