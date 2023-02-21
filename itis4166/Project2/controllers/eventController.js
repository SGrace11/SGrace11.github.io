const model = require('../models/event');

exports.index = (req, res)=> {
    let events = model.find();
    res.render('events/index', {stories});
};

exports.new = (req, res)=> {
    res.render('events/newEvent');
}

exports.show = (req, res, next)=> {
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        res.render('events/event', {event});
    } else {
        let err = new Error('Cannot find event with id ' + id);
        err.status = 404;
        next(err);
    }
}