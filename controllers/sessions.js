const Sessions = require('../models/session');

module.exports = {
    index,
};

async function index(req, res) {
    try {
        const allSessions = await Sessions.find({});
        res.render('index', {
            sessions: allSessions });
    }catch (err) {
        console.log(err);
    }
};