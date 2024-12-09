const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const response = await axios.post(`${process.env.AUTH_URL}/auth/login`, { email, password });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
