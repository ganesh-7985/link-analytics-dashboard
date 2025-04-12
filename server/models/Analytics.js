const mongoose = require('mongoose')

const AnalyticsSchema = new mongoose.Schema({
    linkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Link',
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    ipAddress: String,
    deviceType: String,
    browser: String,
    location: String
})

module.exports = mongoose.model('Analytics', AnalyticsSchema);