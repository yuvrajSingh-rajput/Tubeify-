const router = require('express').Router();
const videoInformation = require('../Controllers/getInformation'); 
const downloadVideo = require('../Controllers/download'); 

// POST and GET Route Handling
router.route('/')
    .post(async (req, res) => {
        const { action } = req.body;

        try {
            if (action === 'videoInfo') {
                return videoInformation(req, res);
            } else if (action === 'downloadVideo') {
                return downloadVideo(req, res);
            } else {
                return res.status(400).json({ success: false, message: 'Invalid action' });
            }
        } catch (error) {
            console.error("Route error:", error);
            return res.status(500).json({ success: false, message: 'Internal server error'});
        }
    })
    .get((req, res) => {
        return res.json({ msg: 'Hello World' });
    });

module.exports = router;
