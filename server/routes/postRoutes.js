const express = require('express');
const router = express.Router();

const Post = require('../models/Post');
const authMiddleware = require("../middleware/authMiddleware");


// GET /api/posts
// Home: GET /api/posts
// Category Page: GET /api/posts?category=predators
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;

        const filter = {};
        if (category) filter.category = category;

        const posts = await Post.find(filter)
        .populate("author", "username email")
        .sort({ createdAt: -1 });

        return res.json(posts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error." });
    }
});

// POST /api/posts
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { title, body, category } = req.body;

        if (!title || !body || !category) {
            return res.status(400).json({ message: "title, body, and category are required.",

            })
        }

        const post = await Post.create({
            title: title.trim(),
            body: body.trim(),
            category,
            author: req.user.id,
        });

        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error." });
    }
});

module.exports = router;