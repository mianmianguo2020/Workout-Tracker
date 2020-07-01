const db = require('../models');
const path = require('path');
const mongoose = require('mongoose');

module.exports = function(app) {

    mongoose.connect("mongodb://localhost/workout", {useNewUrlParser: true,useFindAndModify: false});

    app.get('/api/workouts', function (req, res) {
        console.log('get /api/workouts');
        db.Workout.find({})
            .then(workouts => { res.json(workouts) })
            .catch(error => { res.json(error) });
    })
    app.post('/api/workouts', function (req, res) {
        console.log('post /api/workouts');
        db.Workout.create({
            day: new Date().setDate(new Date().getDate()),
            exercise: []
        })
            .then(workout => { res.json(workout) })
            .catch(error => { res.json(error) });
    })

    app.get('/api/workouts/range',  function (req, res){
        console.log('/api/workouts/range');
         db.Workout.find({})
            .then(workouts => { res.json(workouts) })
            .catch(error => { res.json(error) });
    } )

    app.put('/api/workouts/:id', async function (req, res) {
        console.log('put /api/workouts');
        console.log(req.params.id);
        console.log(req.body);
        const workout = await db.Workout.findById(req.params.id);
        workout.exercises.push(req.body);
        workout.save();
        res.json(workout);
    })

    app.get('/exercise',function(req,res){
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    });

    app.get('/stats', async function(req,res) {
        res.sendFile(path.join(__dirname, '../public/stats.html'))

    })

    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });



}