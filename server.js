const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const Workout = require('./models/workout.js')
const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
   { 
    // Tool used to parse connection string
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology:true,
 });





app.use(require('./routes/routes.js'));
app.use(require('./routes/htmlroutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });