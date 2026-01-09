const express = require('express');
const router = express.Router();

// GET /api/posts
router.get('/', (req, res) => {
    res.json({ message: 'Get posts works' });
});

// POST /api/posts
router.post('/', (req, res) => {
    res.json({ message: 'Create post works' })
});

// DELETE /api/posts
router.delete('/:id', (req, res) => {
    res.json({ message: 'Delete post works' });
});

module.exports = router;