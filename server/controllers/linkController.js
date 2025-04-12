const Link = require('../models/Link');
const crypto = require('node:crypto')

const createLink = async(req,res) => {
    try{
        const {originalUrl,customAlias,expirationDate} = req.body
        const userId = req.user.id

        const shortCode = customAlias || crypto.randomBytes(4).toString('hex')
        const link = await Link.create({
            userId,
            originalUrl,
            shortCode,
            customAlias,
            expirationDate
        })
        res.status(201).json(link)
    }catch(error){
        res.status(500).json({ message: 'Error creating link' });
    }
}

const getLinks = async (req, res) => {
    try {
        const links = await Link.find({ userId: req.user.id });
        res.json(links);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching links' });
    }
};

const redirectLink = async (req, res) => {
    try {
        const { shortCode } = req.params;
        const link = await Link.findOne({ shortCode });

        if (!link) {
            return res.status(404).json({ message: 'Link not found' });
        }

        if (link.expirationDate && new Date() > link.expirationDate) {
            return res.status(410).json({ message: 'Link has expired' });
        }

        link.clicks += 1;
        await link.save();

        res.redirect(link.originalUrl);
    } catch (error) {
        res.status(500).json({ message: 'Error redirecting' });
    }
};


module.exports = {createLink,getLinks,redirectLink}