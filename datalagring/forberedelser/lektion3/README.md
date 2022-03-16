# MongoDB

## RDBMS vs MongoDB

| RDBMS       | MongoDB                             |
|-------------|-------------------------------------|
| Database    | Database                            |
| Table       | Collection                          |
| Row         | Document                            |
| Column      | Field                               |
| Table Join  | Embedded Documents                  |
| Primary Key | Default key _id is given by MongoDB |

## Setup

### Install

- [MongoDB](https://www.mongodb.com/)
- [MongoDB cloud service](https://www.mongodb.com/cloud/atlas)

### Docker

`docker run -d -p 27017-27019:27017-27019 --name mongodblagring mongo:latest`

### Connect to MongoDB

No username/password

### Testing

Visa databaser:

```
show dbs
```

Use/Create db if not already existing

```
use test1
```

show current db

```
db
```

Add content to db

```
db.users.insertOne({firstname: 'Adam', lastname: 'Adamsson'})
db.users.insertOne({firstname: 'Bengt', lastname: 'Bengtsson'})
```

Find user by:

```
db.users.find({firstname: 'Adam'})
```

## Server.js

```javascript
let mongo = require('mongodb')
```

```javascript
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
```

