const User = require('../models/User')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const login = async(req,res) => {
    try{
        const {email,password}=req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(401).json({message:"Invalid Credentials"})
    }

    const isMatched = await user.comparePassword(password);
    if(!isMatched){
        res.status(401).json({message:"Invalid Credentials"})
    }
    const token = jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET,{expiresIn:'24h'})

    return res.json({token})
    }catch(error){
        res.status(500).json({message:"Server error"})
    }
}

module.exports = login