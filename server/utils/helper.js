const crypto = require('node:crypto'); 

exports.generateShortCode = () => {
    return crypto.randomBytes(4).toString('hex');
};

exports.isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};