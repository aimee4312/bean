const express = require('express');
const Bean = require('../models/Beans');
const router = express.Router();
router.post('/bean', async (req, res) => {
    try {
        const newEntry = new Bean(req.body);
        await newEntry.save();
        res.status(201).jsonp(newEntry)
    } catch (err) {
        res.status(400).json({ message: 'Error saving entry', error: err});
    }
});

module.exports = router;