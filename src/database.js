const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/notes-app'
mongoose.connect(MONGODB_URI,{
    
})
  .then(bd => console.log('Database is connected'))
  .catch(err => console.error(err));