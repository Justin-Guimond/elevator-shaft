const Sessions = require('../models/session');

module.exports = {
    index,
    new: newDay,
    create,
    delete: deleteDay,
    edit,
    update
};

async function index(req, res) {
    try {
        const allSessions = await Sessions.find({});
        res.render('index', {
            sessions: allSessions,
            title: 'Home' });
    }catch (err) {
        console.log(err);
    }
};

function newDay(req, res) {
    res.render('new', {
        title: 'Add Day'
    })
};

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Sessions.create(req.body);
        res.redirect('/');
    }   catch (err) {
        console.log(err);
    }
};

async function deleteDay(req, res) {
    try {
        await Sessions.findByIdAndRemove(req.params.id);
        res.redirect('/');
    }   catch (err) {
        res.render('index', { errorMsg: err.message });
    }
};

function edit(req, res) {
    Sessions.findById(req.params.id).then((currentSession) => {
        res.render('edit', { session: currentSession, title: 'Edit' });
    })
};

async function update(req, res) {
    try {
        await Sessions.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/');
    }   catch (err) {
        res.render(`/${req.params.id}edit`, { errorMsg: err.message });
    }
};