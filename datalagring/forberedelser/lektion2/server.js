let mysql = require('mysql2')
let dotenv = require('dotenv')

dotenv.config()
const key = process.env.PASSWORD

let db_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: key,
    database: 'api'
})

// db_con.connect(function (err) {
//     if (err) throw err
//     console.log("Connected to database")
// })

db_con.connect(function (err){
    if (err) throw err
    console.log("Connected to database")
    db_con.query('SELECT * FROM users', function(error, result, fielsd){
        if (error) throw err
        console.log(result)
    })
})




