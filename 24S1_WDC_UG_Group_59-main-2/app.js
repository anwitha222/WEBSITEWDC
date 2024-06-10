const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

const db = mysql.createConnection({
    host: '127.0.0.1', // Ensure this is the correct host
    user: 'root', // Update with your MySQL username
    password: 'yourpassword', // Update with your MySQL password
    database: 'compassionCrew' // Ensure the database name is correct
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

app.post('/signup', (req, res) => {
    const { userType, firstName, lastName, email, password } = req.body;

    let table = userType === 'volunteer' ? 'volunteers' : 'organisers';

    let sql = `INSERT INTO ${table} (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
    db.query(sql, [firstName, lastName, email, password], (err, result) => {
        if (err) {
            res.json({ success: false, error: err });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
