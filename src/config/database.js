// database.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://vgnutzmann:<LSUWTqszcuSjB2PW>@cluster.zpxy7nl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Error connecting to MongoDB', err));

module.exports = mongoose;
