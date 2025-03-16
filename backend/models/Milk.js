const mongoose = require('mongoose');

const milkSchema = new mongoose.Schema({
    date_ordered: { type: String, required: true},
    milk_type: { type: String, required: true},
    quantity: { type: Number, required: true},
    unit_cost: { type: Number, required: true},
    total_cost: { type: Number, required: true},
})

const Milk = mongoose.model('Milk', milkSchema);
module.exports = Milk;