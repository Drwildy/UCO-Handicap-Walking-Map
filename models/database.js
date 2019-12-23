const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = 'mongodb+srv://Drwildy:HundreD1@cluster0-ymqzd.azure.mongodb.net/UCOmap'

const options = {useNewUrlParser: true, poolSize: 20};
mongoose.connect(uri, options);
console.log("connected")


// close connection when app terminates
process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose connection closed due to app termination');
        process.exit(0);
    })
});
