require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5001;

const beanRoutes = require('./routes/beanRoutes');

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.error('Failed to connect to Mongo', err));

////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('Hello from the back');
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
//////////////////////////////////////////

app.use('/api/beans', beanRoutes);