const functions = require('firebase-functions');
const db = require('firebase-admin');

const express = require('express');
const app = express();

db.initializeApp();

app.get('/tasks', (req, res) => {
  db.firestore()
    .collection('tasks')
    .orderBy('name')
    .get()
    .then((data) => {
      let tasks = [];
      data.forEach((doc) => {
        console.log(data);
        console.log('element');
        tasks.push(doc.data());
      });
      return res.json(tasks);
    })
    .catch((err) => console.log(err));
});

app.delete('/delete', (req, res) => {
  const id = req.body.id;
  db.firestore()
    .collection('tasks')
    .doc(id)
    .delete()
    .then(() => {
      console.log(`Document ${id} deleted!`);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.post('/createUser', (req, res) => {
  const newUser = {
    name: req.body.name,
    surname: req.body.surname,
    initial: req.body.name[0] + req.body.surname,
    email: req.body.email,
    password: req.body.email,
  };

  db.auth().createUser(newUser.email, newUser.password).then{
    ((doc) => res.json({message: 'create'}))
  }

});

exports.createTask = functions.https.onRequest((req, res) => {
  const newTask = {
    name: req.body.name,
    content: req.body.content,
    done: req.body.done,
    whodoing: req.body.whodoing,
  };

  db.firestore()
    .collection('tasks')
    .add(newTask)
    .then((doc) => res.json({ message: `documentet ${doc.id}` }))
    .catch((err) => {
      res.status(500).json({ error: 'something went wrong' });
      console.log(err);
    });
});

exports.api = functions.https.onRequest(app);
