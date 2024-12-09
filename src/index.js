const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors('*'));


const authRoutes = require('../src/routes/auth');
const hrRoutes = require('../src/routes/hr');
const ocrRoutes = require('../src/routes/ocr');


app.use('/auth', authRoutes);
app.use('/employees', hrRoutes);
app.use('/ocr', ocrRoutes);


app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
