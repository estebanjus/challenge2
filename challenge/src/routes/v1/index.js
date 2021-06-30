/* eslint-disable no-console */

const { v4: uuidv4 } = require('uuid');

const { MongoClient } = require('mongodb');
const express = require('express');
const Project = require('../../entities/Project');
const Task = require('../../entities/Tasks');

console.log('PROJECT:', Project);
const router = express.Router();

const uri = 'mongodb+srv://pepe:pepe123@cluster0.ax3l3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;
let coll;

MongoClient.connect(uri, function (err, client) {
  if (err) console.log(err);

  db = client.db('test');
  coll = db.collection('Proyectos');
});

router.post('/createNewProject', async (req, res) => {
  let proyecto = new Project(uuidv4(), req.body.name);
  proyecto = await coll.insertOne(proyecto);
  res.json(proyecto);
});

router.post('/deleteProject', async (req, res) => {
  await coll.findOneAndDelete({ id: req.body.project_id });
  const result = await coll.find({}).toArray();
  res.json(result);
});

router.post('/deleteTask', async (req, res) => {
  await coll.findOneAndUpdate({ id: req.body.project_id }, { $pull: { tasks: { id: req.body.task_id } } });
  const result = await coll.find({}).toArray();
  res.json(result);
});

router.post('/addTask', async (req, res) => {
  const Tarea = new Task(uuidv4(), req.body.descripcion, false);
  await coll.findOneAndUpdate({ id: req.body.project_id }, { $addToSet: { tasks: Tarea } });
  const result = await coll.find({}).toArray();
  res.json(result);
});

router.get('/obtenerProyectos', async (req, res) => {
  const result = await coll.find({}).toArray();

  res.json(result);
});

router.post('/createNewTask', async (req, res) => {
  const proyecto = new Project(uuidv4(), req.body.name, req.body.task);

  await coll.findOneAndUpdate({ id: req.body.id }, { $addToSet: { Tasks: req.body.task } });

  res.json(proyecto);
});

module.exports = router;
