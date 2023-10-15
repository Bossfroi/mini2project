const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authgoogleschema = new Schema({
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
        trim: true
    },
    picture: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const authGoogle = mongoose.model('authGoogle', authgoogleschema);

module.exports = authGoogle;
