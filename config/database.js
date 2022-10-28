const mongoose = require ('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// REMEMBER THAT THIS HAS TO BE REQUIRED NOW IN THE SERVER. .ENV HAS TO BE REQUIRED IN THE SERVER

// shortcut var to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})