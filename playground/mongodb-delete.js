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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Mal'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c753c0d0d01982750a406df')}).then((result) => {
        console.log(result);
    });

    //client.close();
});