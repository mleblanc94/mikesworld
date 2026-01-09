const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamp: true }
);

module.exprots = mongoose.model('User', userSchema)