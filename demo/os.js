const os = require('os')

console.log("Operation system: ", os.platform())

console.log("Processor architecture: ", os.arch())

console.log("Processors information: ", os.cpus())

console.log("Free space: ", os.freemem())