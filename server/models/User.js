const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    }
},{timestamps:true})

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password = bcrypt.hash(this.password,10);
    next();
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword,this.password);
}

module.exports = mongoose.model('User',UserSchema)