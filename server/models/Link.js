const { default: mongoose } = require('mongoose')
const moongose = require('mongoose')

const LinkSchema = new moongose.Schema({
    userId:{
        type:moongose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    originalUrl:{
        type:String,
        required:true,
    },
    shortCode:{
        type:String,
        required:true,
        unique:true
    },
    customAlias:{
        type: String,
        unique: true,
        sparse: true
    },
    expirationDate: {
        type: Date
    },
    clicks: {
        type: Number,
        default: 0
    }
},{timestamps:true})

module.exports = mongoose.model('Link',LinkSchema);