const EventEmmiter = require('events')

/*const emitter = new EventEmmiter()

emitter.on('anything', data => {
    console.log('On: anything', data)
})

emitter.emit('anything', {a: 1})
emitter.emit('anything', {b: 2})

setTimeout(() => {
    emitter.emit('anything', {c: 3})
},500)*/

class Dispatcher extends EventEmmiter{
    subscribe(eventName, cb){
        console.log('[Subscribe]')
    }
}