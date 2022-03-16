let mysql = require('mysql2')
let dotenv = require('dotenv')
let SQL = require('sql-template-strings')

dotenv.config()
const key = process.env.PASSWORD

let db_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: key,
    database: 'bookface'
})

function getAllUsers() {
    return 'SELECT * FROM users'
}

function getAllMessages() {
    return 'SELECT * FROM messages'
}

function getAllCombined() {
    return 'SELECT * FROM messages INNER JOIN users on messages.userId = users.id;'
}

function getAllCombinedFiltered() {
    return 'SELECT users.name, messages.subject, messages.text FROM messages INNER JOIN users on messages.userId = users.id;'
}

function newUser() {
    let setName = 'Carl'
    let setAge = 25
    return `INSERT INTO users(name, age) VALUES ('${setName}' , ${setAge})`
}

function query_db(sql_string) {
    db_con.connect(function (err) {
        if (err) throw err
        console.log("Connected to database")
        db_con.query(sql_string,
            function (error, result, fields) {
                if (error) throw err
                console.log(result)
            })
    })
}

// query_db(getAllUsers())
// query_db(getAllMessages())
// query_db(getAllCombined())
// query_db(getAllCombinedFiltered())
query_db(newUser())
query_db(getAllUsers())
