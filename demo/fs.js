// file system
const fs = require('fs')
const path = require('path')

/*
fs.mkdir(path.join(__dirname, 'test'),(err) => {
    if (err) {
        throw err
    }
    console.log('The directory is created')
})*/

const filePath = path.join(__dirname, 'test', 'text.txt')
fs.writeFile(filePath, 'Hello NodeJS', err => {
    if (err) {
        throw err
    }
    console.log('File was created')
    fs.writeFile(filePath, '\nHello one more time', err => {
        if (err) {
            throw err
        }
        console.log('File was created')
    })
})