const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const passwordSchema = new Schema({
    website: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

// Pwd Model allows us to query the Pwd collection
const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;