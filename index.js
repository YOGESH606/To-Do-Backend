const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts.js');
const port = process.env.port || 5000;
const app = express();
const url = 'mongodb://yogesh:021479@cluster0-shard-00-00.v9ss7.mongodb.net:27017,cluster0-shard-00-01.v9ss7.mongodb.net:27017,cluster0-shard-00-02.v9ss7.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-lmn4zd-shard-0&authSource=admin&retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/',(req,res)=>{
    res.send('req received suceesfylly')
})


app.use('/posts', postRoutes);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('sucessful'))
    .catch((err) => console.log(err));
