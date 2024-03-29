const express = require('express');
const connectToDatabase = require('./Connection');
const router = require('./routers/route');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const path = require('path'); // Add this line to import the path module

const PORT =process.env.PORT || 5006

const app = express();
const cors = require('cors')
app.use('/images', express.static(path.join(__dirname, 'images')));
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(router);
app.listen(PORT, () => {
    console.log('Server is listening on port ',PORT );
});
