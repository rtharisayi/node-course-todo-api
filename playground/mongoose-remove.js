const {ObjectID} = require('mongodb')

const {mognoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// })
//
// Todo.findOneAndRemove()

Todo.findByIdAndRemove("5b9f2bffa0d05c59b959edee").then((todo) => {
  console.log(todo);
})

Todo.findOneAndRemove({_id: "5b9f2bffa0d05c59b959edee"}).then(() => {
  console.log(todo);
})
