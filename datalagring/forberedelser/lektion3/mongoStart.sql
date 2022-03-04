show dbs

// ska/visa databas
use test1

// vilken databas är jag i
db
db.version()

//db.users.save()
//db.users.insert()
db.users.insertOne({firstname: 'Adam', lastname: 'Adamsson', age: 20})
db.users.insertOne({firstname: 'Bengt', lastname: 'Bengtsson', age: 25})

// printa ut innehåll i users
db.users.find()

// printa ut data för Adam
db.users.find({firstname: 'Adam'})
db.users.find({lastname: 'Bengtsson'})
db.users.find({age: 20})

db.dropDatabase()

// --------------------

show dbs
db.movie.insertOne({name: 'Die Hard'})
db.movie.find()
db.dropDatabase()