const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // username (String, required, unique)
  // password (String, required)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
