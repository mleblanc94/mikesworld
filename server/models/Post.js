const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        body: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: [
                "predators",
                "sports",
                "politics",
                "public-freakouts",
                "interesting",
                "video-games",
                "food"
            ],
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);