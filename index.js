/*const chalk = require('chalk');
const text = require('./data')


console.log(chalk.blue(text))
console.log(__dirname)
console.log(__filename)*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })

    res.end('<h1>Hello NodeJS!!!!</h1>')
})

server.listen(3000, () =>{
    console.log('Server has been started...')
})