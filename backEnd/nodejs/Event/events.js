const {EventEmitter} = require('events')
const ev = new EventEmitter()

ev.on('saySomething', (message) => {
    console.log('estou ouvindo:', message)
})

ev.emit('saySomething', "Samuel Cristian")

