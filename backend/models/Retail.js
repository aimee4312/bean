const mongoose = require('mongoose');

const retailSchema = new mongoose.Schema({
    date_ordered: { type: String, required: true},
    bean_name: { type: String, required: true},
    roaster: { type: String, required: true},
    quantity: { type: Number, required: true},
    unit_cost: { type: Number, required: true},
    total_cost: { type: Number, required: true},
})

const Retail = mongoose.model('Retail', retailSchema);
module.exports = Retail;