const {SUCCESS, FAILED} = require('../constants/global');

function authentication_required(req,res,next){
    console.log('session',req.session.userid, req.cookies)
    if (!req.session.userid){
        return res.send({
            status: FAILED,
            description: 'Need to login first!'
        })
    }
    next();
}

module.exports= {authentication_required}

