const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: { type: String, minlength: 2, required: true, trim: true },
  lastName: { type: String, minlength: 2, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  username: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true }
});


//Extra step of verification - add confirm password field into form, HOWEVER, we do not want it to be added to the database as it would be a duplicate value. This is done via creation of a virtual property. (accessible in pre-hooks but will not be stored)

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

//Create a pre-validate hook - if user has modified password and it doesnt match the passwordConfirmation suplied, we invalidate and throw back an error.

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password') && this._passwordConfirmation!== this.password) this.invalidate('passwordConfirmation', 'Does not match');
  next();
});


//Encrypting password before saving to database - pre-hook function
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
})

//In order to let a user login, we need to compare the inputted password in the field and compare it with the one that is in the database. We want to create another bit of Middleware

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};




module.exports = mongoose.model('User', userSchema);
