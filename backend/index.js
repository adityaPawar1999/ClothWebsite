const express = require('express');
const connectToDatabase = require('./Connection');
const router = require('./routers/route');
const app = express();
const cors = require('cors')
connectToDatabase();

app.use(cors())
app.use(express.json())
app.use(router);
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
