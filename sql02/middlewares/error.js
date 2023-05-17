module.exports = (err, req, res, next)=> {
    res.status(err.stausCode || 500).json({error: err.message})
}