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
    const sql = "SELECT * FROM users WHERE BINARY email = ? AND BINARY password = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
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

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;
  
    // Changed to check email instead of username
    const checkUserSql = "SELECT * FROM users WHERE email = ?"; // Changed from username to email
    db.query(checkUserSql, [sentEmail], (err, results) => { // Changed parameter to sentEmail
      if (err) {
        return res.status(500).json({ 
          success: false, 
          message: "Database error" 
        });
      }
      
      if (results.length > 0) {
        return res.status(409).json({ 
          success: false, 
          message: "Email already exists" 
        });
      }
  
      const insertSql = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
      const values = [sentEmail, sentUserName, sentPassword];
      
      db.query(insertSql, values, (err, results) => {
        if (err) {
            return res.status(500).json({ 
              success: false, 
              message: "Error creating an account" 
            });
          }
          return res.status(201).json({ 
            success: true, 
            message: "Account created successfully" 
        });
      });
    });
});