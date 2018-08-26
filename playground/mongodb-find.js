// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndReplace({
  //     completed: true
  //   }, {
  //       task: "findOneAndReplace Again",
  //       completed: false
  //   }).then((result) => {
  //   console.log('It was replaced:', result);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').find({
  //     _id: new ObjectID('5b79900660783875f43075c7')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').count({name: 'Ravi Tharisayi'}).then((count) => {
    console.log('Users Count: ', count);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  })

  // db.close();
})
