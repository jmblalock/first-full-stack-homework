const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const pwdSchema = new Schema({
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
const Pwd = mongoose.model('Pwd', pwdSchema);

module.exports = Pwd;