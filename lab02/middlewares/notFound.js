module.exports = (req,res) =>  {
    res.status(404).send({msg: 'Resource Path not found'})
}
