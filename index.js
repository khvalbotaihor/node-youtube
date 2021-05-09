/*const chalk = require('chalk');
const text = require('./data')


console.log(chalk.blue(text))
console.log(__dirname)
console.log(__filename)*/

const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(data)
        })
    }else if (req.url === '/contact'){
        fs.readFile(path.join(__dirname, 'public', 'contsct.html'), (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
            })
            res.end(data)
        })
    }

})

server.listen(3000, () => {
    console.log('Server has been started...')
})