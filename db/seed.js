require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Show = require("../models/Show.model")

// Import data to seed

const Shows = [
{
  title: "The Simpsons",
  creator: "Matt Groening",
  launched: 1989,
  genre: "comedy",
  image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
  description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
},

{
  title: "The Last of Us",
  creator: "No sed",
  launched: 2023,
  genre: "drama",
  image: "https://ychef.files.bbci.co.uk/976x549/p02fc1jw.jpg",
  description: "The series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition."
}

]

mongoose
  .connect(process.env.MONGO_URL)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(() => {
    // Code to insert elements in DB
    return Show.create(Shows)
  })
  .then((created) => {
    // Confirmation
    console.log(`Created ${created.length} shows`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })