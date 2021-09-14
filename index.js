const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts.js');
const dotenv = require('dotenv');



const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('req received suceesfylly')
})

app.use('/posts', postRoutes);
const PORT = process.env.PORT || 7000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port:${PORT} and db is connetced`)))
    .catch((err) => console.log(err));
