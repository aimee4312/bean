const mongoose = require('mongoose');

const beanSchema = new mongoose.Schema({
    date_ordered: { type: String, required: true},
    bean_name: { type: String, required: true},
    roaster: { type: String, required: true},
    quantity: { type: Number, required: true},
    size: { type: String, required: true},
    unit_cost: { type: Number, required: true},
})

const Bean = mongoose.model('Bean', beanSchema);
module.exports = Bean;