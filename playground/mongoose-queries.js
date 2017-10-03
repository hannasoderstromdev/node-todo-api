const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')

const id = '59d0f70d823da51daa19e500'

if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

// Todo.find({ 
//   _id: id 
// }).then((todos) => {
//   if (todos.length === 0) return console.log('Id not found')
//   console.log('Todos:', todos)
// })

// Todo.findOne({ 
//   _id: id 
// }).then((todo) => {
//   if (!todo) return console.log('Id not found')
//   console.log('Todo:', todo)
// })

// Todo.findById(id).then((todoById) => {
//   if (!todoById) return console.log('Id not found')
//   console.log('TodoById:', todoById)
// }).catch((e) => console.log(e))
