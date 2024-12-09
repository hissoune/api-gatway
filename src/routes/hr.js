
const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(`${process.env.HR_URL}/employees/${id}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
