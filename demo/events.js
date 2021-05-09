const EventEmmiter = require('events')

const emitter = new EventEmmiter()

emitter.on('anything', data => {
    console.log('On: anything', data)
})

emitter.emit('anything', {a: 1})
emitter.emit('anything', {b: 2})

