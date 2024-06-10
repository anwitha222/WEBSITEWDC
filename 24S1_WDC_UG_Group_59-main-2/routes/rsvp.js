const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabase'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Handle RSVP post request
router.post('/', (req, res) => {
    const { event_id, response, user_id } = req.body;

    const sql = 'INSERT INTO rsvp (status, date, eventID, userID) VALUES (?, NOW(), ?, ?)';
    db.query(sql, [response, event_id, user_id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.send('RSVP recorded successfully');
    });
});

module.exports = router;
