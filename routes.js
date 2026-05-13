const express = require('express');
const router = express.Router();
router.get('/registrarcita', (req, res) => {

    res.sendFile('reservarcita.html', {

        root: './views'

    });

});

module.exports = router;