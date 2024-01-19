const express = require('express');
const connectToDatabase = require('./Connection');
const router = require('./routers/route');
require('dotenv').config();
const PORT =process.env.PORT || 5006

const app = express();
const cors = require('cors')

connectToDatabase();

app.use(cors())
app.use(express.json())
app.use(router);
app.listen(PORT, () => {
    console.log('Server is listening on port ',PORT );
});
