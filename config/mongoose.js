const mongoose = require('mongoose');

//const uri = process.env.HABIT_URI;


//local db settingss
mongoose.connect('mongodb+srv://gautampandey076:JPZupzRvL3NBnOuq@cluster0.glizety.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
