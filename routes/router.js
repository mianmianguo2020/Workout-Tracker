var path = require("path");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  
  res.json() //all workouts, order by id
  // res.sendFile(path.join(__dirname,"../public/exercise.html"))
});

module.exports = router;




















// const mongojs = require("mongojs");
// const databaseUrl = "workout";
// const collections = ["Workout"];
// const db = mongojs(databaseUrl, collections);


// router.put("/api/workouts/:id", (req, res) => {
//   res.json();
//   db.Workout.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         exercises: req.body.exercises,
//         modified: Date.now()
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// //need to write the mongoose, add the exeris to db
// });

// // router.post("/api/transaction/bulk", ({ body }, res) => {
// //   Transaction.insertMany(body)
// //     .then(dbTransaction => {
// //       res.json(dbTransaction);
// //     })
// //     .catch(err => {
// //       res.status(400).json(err);
// //     });
// // });

// router.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname,"../public/exercise.html"))
// });

// module.exports = router;
