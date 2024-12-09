
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/parse', async (req, res) => {
  try {
    const { documentPath } = req.body;

    const response = await axios.post(`${process.env.OCR_URL}/parse`, { path: documentPath });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
