module.exports.isAuth =(req,res,next) =>{
    if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;  
    req.flash('error', 'Login to make changes');
    return res.redirect('/login');
}
next();
}

module.exports.redirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}