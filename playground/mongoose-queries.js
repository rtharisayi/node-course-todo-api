const {ObjectID} = require('mongodb')

const {mognoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = "5b9d3a860f57989a84da908";
//
// if(!ObjectID.isValid(id)) {
//   return console.log("ID is not valid")
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos: ", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo: ", todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found')
//   }
//   console.log("Todo by Id: ", todo);
// }).catch((e) => console.log(e));

var userId = "5b82f58f359e020adddcf63f";

User.findById(userId).then((user) => {
  if(!user) {
    return console.log("User not found");
  }
  console.log("User is: ", user);
}).catch((e) => console.log(e));
