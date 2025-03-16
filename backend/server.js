require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const beanRoutes = require('./routes/beanRoutes');
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());
console.log('hell0')
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.error('Failed to connect to Mongo', err));

console.log('Bean Routes: ', beanRoutes); // To check if the beanRoutes are being imported correctly

app.use('/api/beans', beanRoutes);

////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('Hello from the back');
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
//////////////////////////////////////////