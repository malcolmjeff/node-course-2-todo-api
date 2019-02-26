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

    // // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c755ee0075d6f46904cedb6")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c753ae8dc40c5385881b2c7")
    }, {
        $set: {
            name: 'Mal'
        },
       $inc: {
           age: 1
       }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    //client.close();
});