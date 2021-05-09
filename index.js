/*const chalk = require('chalk');
const text = require('./data')


console.log(chalk.blue(text))
console.log(__dirname)
console.log(__filename)*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello NodeJS')
})

server.listen(3000, () =>{
    console.log('Server has been started')
})