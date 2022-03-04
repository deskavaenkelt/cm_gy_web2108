show dbs

// Create Collection
use test
db.createCollection('my_collection')
show collections

db.createCollection('my_col', {capped: true, size: 3, max: 3})
show collections

db.magical_collection.insertOne({'Name': 'Magical collection created'})
show collections

// Delete database
use my_db
db.createCollection('delete')
show collections
db.dropDatabase()
show collections

// Insert into collection
use test
show collections
db.my_collection.insertOne({Username: 'Adam', Password: '123'})
db.my_collection.insertMany([
    {Username: 'Bengt', Password: '123'},
    {Username: 'Cecilia', Password: '123'},
    {Username: 'David', Password: '123'}
])
db.my_collection.find()

// Query documents
db.my_collection.find()
db.my_collection.find().pretty()  // För console användning

db.my_collection.find({Username: 'Bengt'})
db.my_collection.find({Password: '123'})

// update
db.my_collection.updateOne({Username: 'Bengt'}, {$set: {Password: '234'}})
db.my_collection.updateOne({Username: 'Cecilia'}, {$set: {Password: '345'}})
db.my_collection.updateOne({Username: 'David'}, {$set: {Password: '456'}})
db.my_collection.find()

// Filter
// Equality
db.my_collection.find({Password: '234'})
// Less Than
db.my_collection.find({Password: {$lt: '345'}})
// Less Than Equals
db.my_collection.find({Password: {$lte: '345'}})
// Greater Than
db.my_collection.find({Password: {$gt: '234'}})
// Greater Than Equals
db.my_collection.find({Password: {$gte: '234'}})
// Not Equals
db.my_collection.find({Password: {$ne: '234'}})

// AND
db.my_collection.find({$and: [{Username: {$ne: 'Adam'}}, {Password: {$ne: '345'}}]})

// OR
db.my_collection.find({$or: [{Username: 'Adam'}, {Password: '345'}]})

// Update
db.my_collection.find().count()
db.my_collection.insertOne({Username: 'Emilie', Password: '567'})
db.my_collection.find().count()

// Vanlig
db.my_collection.updateOne({Username: 'Cecilia'}, {$set: {Password: '345'}})

// funktioner och variabler
selection_criteria = {Username: 'Cecilia'}
updated_data = {Username: 'Carl'}

db.my_collection.find(selection_criteria)
db.my_collection.updateOne(selection_criteria, {$set: updated_data})
db.my_collection.find(selection_criteria)
db.my_collection.find()
db.my_collection.find(updated_data)
db.my_collection.find()

                                       // Delete
db.my_collection.find().count()
db.my_collection.insertOne({Username: 'Family Guy', Password: '678'})
db.my_collection.find().count()
selection_criteria = {Username: 'Family Guy'}
db.my_collection.find(selection_criteria)
db.my_collection.find().count()
//db.my_collection.deleteOne({Username: 'Family Guy'})
db.my_collection.deleteOne(selection_criteria)
db.my_collection.find().count()
db.my_collection.find()

// SAVE
db.my_collection.find().count()
db.my_collection.insertOne({Username: 'Family Guy', Password: '678'})
db.my_collection.find().count()

selection_criteria = {Username: 'Family Guy'}
updated_data = {Username: 'Stewie'}
db.my_collection.find()
db.my_collection.replaceOne(selection_criteria, updated_data)
db.my_collection.find()

selection_criteria = {Username: 'Stewie'}
updated_data = {Username: 'Stewie', Password: '678'}
db.my_collection.replaceOne(selection_criteria, updated_data)
db.my_collection.find()

// Projection
// Show All
db.my_collection.find()
db.my_collection.find({})
db.my_collection.find({}, {Username: 1, Password: 1})

// Show specifik column
db.my_collection.find({}, {Username: 1})
db.my_collection.find({}, {Password: 1})
db.my_collection.find({}, {_id: 1})

// Show specifik column exkl _id
db.my_collection.find({}, {Username: 1, _id: 0})
db.my_collection.find({}, {Password: 1, _id: 0})

// Limit
db.my_collection.find({}, {Username: 1, _id: 0}).count()
db.my_collection.find({}, {Username: 1, _id: 0}).limit(2)

// Sort
db.my_collection.find({}, {Username: 1, _id: 0}).sort({Username: 1})
db.my_collection.find({}, {Username: 1, _id: 0}).sort({Username: -1})
db.my_collection.find({}, {Username: 1, _id: 0}).limit(2).sort({Username: -1})
