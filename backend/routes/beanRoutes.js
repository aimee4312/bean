const express = require('express');
const Bean = require('../models/Beans');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { date_ordered, bean_name, roaster, quantity, size, unit_cost } = req.body;

        const newBean = new Bean({
            date_ordered,
            bean_name,
            roaster,
            quantity,
            size,
            unit_cost
        });

        await newBean.save();
        res.status(201).json({ message: 'Bean entry created successfully', newBean });
    } catch (err) {
        res.status(500).json({ message: 'Error creating bean entry', error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const beans = await Bean.find();
        res.json(beans);
    } catch (err) {
        res.status(500).json({ message: 'Error getting bean', error: err.message });
    }
})

module.exports = router;
