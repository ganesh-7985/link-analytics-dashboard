const Analytics = require('../models/Analytics');
const Link = require('../models/Link');

const logAnalytics = async (req, res) => {
    try {
        const { linkId } = req.params;
        const { ipAddress, deviceType, browser, location } = req.body;

        await Analytics.create({
            linkId,
            ipAddress,
            deviceType,
            browser,
            location
        });

        res.status(201).json({ message: 'Analytics logged successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging analytics' });
    }
};

const getLinkAnalytics = async (req, res) => {
    try {
        const { linkId } = req.params;
        const analytics = await Analytics.find({ linkId });
        
        // Group analytics by date for timeline
        const timelineData = analytics.reduce((acc, record) => {
            const date = record.timestamp.toISOString().split('T')[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        // Group by device type
        const deviceData = analytics.reduce((acc, record) => {
            acc[record.deviceType] = (acc[record.deviceType] || 0) + 1;
            return acc;
        }, {});

        res.json({
            timeline: timelineData,
            devices: deviceData,
            total: analytics.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytics' });
    }
};

module.exports = {logAnalytics,getLinkAnalytics}