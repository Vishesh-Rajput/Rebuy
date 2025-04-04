const express = require('express');
const dbconfig = require('./config/Dbconfig')

const usersRoute = require('./routes/usersRoute')

const app = express(); 
app.use(express.json());

const port = process.env.PORT || 5000;


app.use('/api/users', usersRoute);


app.listen(port, () => {
  console.log(`Server is now  running on port ${port}`);
});



