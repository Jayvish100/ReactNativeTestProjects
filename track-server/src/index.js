require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb://admin:pass123456@cluster0-shard-00-00.dcnvm.mongodb.net:27017,cluster0-shard-00-01.dcnvm.mongodb.net:27017,cluster0-shard-00-02.dcnvm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-bghxgr-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo Instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error Connecting to mongo', err)
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});