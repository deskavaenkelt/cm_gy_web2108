import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','PUT']
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

let currentId = 14;

function messageUserNotFound() {
    return {
        status: 404,
        text: 'User not found!'
    }
}

function messageSuccess(message) {
    return {
        status: 200,
        text: message
    }
}

function incrementCurrentIdByOne() {
    currentId += 1
}

function createNewUser(userData) {
    let user = {
        id: currentId,
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
    }
    incrementCurrentIdByOne()
    inMemoryDatabase.push(user)
}

function deleteUser(index) {
    inMemoryDatabase.splice(index, 1)
}

function updateUser(userData) {
    const index = getUserIndex(userData.id)

    if (index === -1) {
        return messageUserNotFound()
    } else {
        if (inMemoryDatabase[index].name !== userData.name) {
            inMemoryDatabase[index].name = userData.name;
        }
        if (inMemoryDatabase[index].age !== userData.age) {
            inMemoryDatabase[index].age = userData.age
        }
        if (inMemoryDatabase[index].gender !== userData.gender) {
            inMemoryDatabase[index].gender = userData.gender
        }

        return messageSuccess('User updated!')
    }
}

function getUserIndex(id) {
    for (let i = 0; i < inMemoryDatabase.length; i++) {
        if (inMemoryDatabase[i].id === id) {
            return i
        }
    }
    return -1
}

function getUserById(id) {
    let index = getUserIndex(id)

    if (index === -1) {
        return messageUserNotFound()
    } else {
        return messageSuccess(inMemoryDatabase[index])
    }
}

function deleteUserById(id) {
    let index = getUserIndex(id)

    if (index === -1) {
        return messageUserNotFound()
    } else {
        deleteUser(index)
        return messageSuccess('User deleted!')
    }
}

let inMemoryDatabase = [
    {
        id: 10,
        name: 'Adam',
        age: 12,
        gender: 'Male',
    },
    {
        id: 11,
        name: 'Bengtina',
        age: 24,
        gender: 'Female',
    },
    {
        id: 12,
        name: 'Cecilia',
        age: 36,
        gender: 'Female',
    },
    {
        id: 13,
        name: 'David',
        age: 48,
        gender: 'Male',
    },
]

app.get('/', function (req, res) {
    res.send('API is Alive!')
})

app.get('/users', function (req, res) {
    res.json(inMemoryDatabase)
})

app.get('/users/:id', function (req, res) {
    const id = Number(req.params.id)
    let response = getUserById(id)
    res.status(response.status).json(response.text)
})

app.post('/users', function (req, res) {
    createNewUser(req.body)
    res.json('Successfully created a new user')
})

app.put('/users', function (req, res,) {
    let response = updateUser(req.body)
    res.status(response.status).send(response.text)
})

app.delete('/users/:id', function (req, res) {
    let response = deleteUserById(Number(req.params.id))
    res.status(response.status).send(response.text)
});

app.listen(port, () => {
    console.log(`The server is running on port ${ port }`)
})
