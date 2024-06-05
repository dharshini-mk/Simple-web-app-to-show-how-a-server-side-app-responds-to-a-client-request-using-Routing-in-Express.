const express = require('express');
const router = express.Router();
router.get('/about', function(req, res) {
    res.sendFile(__dirname + "/about.html");
});
router.get('/collection', function(req, res) {
    res.sendFile(__dirname + "/collection.html");
});
router.get('/contact', function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});
module.exports = router;