// dependencies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.listen(3002, ()=>{
    console.log("Server's running on port 3002")
})

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'revoiradb'
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE BINARY username = ? AND BINARY password = ?"
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Login Failed" });
        }
        if (data.length > 0) {
            return res.status(200).json({ success: true, message: "Login Successfully" });
        } else {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    });
})