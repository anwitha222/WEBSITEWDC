const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
	host : 'localhost',
	database : 'compassionCrew',
	user : 'root',
	password : ''
});

db.connect(err => {
	if(err){
		console.error('Database connection failed: ' + err.stack);
        return;
	}
	else{
		console.log('connected to database!!!');
	}
});

app.listen(port, () => {
    console.log('server is runnung on port ${port}');
});

app.get('/api/users', (req, res) =>{
    db.query('SELECT email, password, role FROM users', (err,results) =>{
        if (err) throw err;
        res.json(results);
        console.log('API query working :)))))');
    });
});