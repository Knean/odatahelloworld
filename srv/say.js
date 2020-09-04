module.exports = (say) =>{
    say.on('hello', req =>`hello ${req.data.to}!`)
    
}

