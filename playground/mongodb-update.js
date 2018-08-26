// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');


  db.collection('Users').findOneAndUpdate({
    name: 'Jen'
  }, {
    $set: { name: "Ravi Tharisayi" },
    $inc: { age: 2}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // db.collection('Users').count({name: 'Ravi Tharisayi'}).then((count) => {
  //   console.log('Users Count: ', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // db.close();
})
