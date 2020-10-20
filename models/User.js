const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please enter the firstName']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter the lastName']
    },
    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter the password'],
        select: false
    }

}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

//Show the virtual Property of display name
UserSchema.virtual('full_name').get(function () {
    return this.first_name + ' ' + this.last_name;
});



//Mongoose Middleware To Encrypt Password
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')){
         next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


module.exports = mongoose.model('user', UserSchema);
