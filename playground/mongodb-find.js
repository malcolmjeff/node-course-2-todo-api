// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //         _id: new ObjectID('5c753a19f3d74f39bcedc640')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

//     db.collection('Todos').find().count().then((count) => {
//         console.log(`Todos count : ${count}`);
// //        console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) => {
//         console.log('Unable to fetch todos', err);
//     });

    db.collection('Users').find({
            name: 'Mal'
        }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    //client.close();
});