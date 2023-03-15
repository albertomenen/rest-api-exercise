const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const showSchema = new Schema({
  title: String,
  creator: String,
  launched: Number,
  genre: String,
  image: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
  // owner will be added later on
});
 
module.exports = model('Show', showSchema);

