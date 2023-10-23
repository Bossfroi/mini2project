const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    family_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // Ensure unique email addresses
    },
    picture: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },

}, {
    timestamps: true
});

const register = mongoose.model('authgoogles', registerSchema);

module.exports = register;
