const fs = require('fs')
const path = require('path')

function compile(file) {
    const fw = fs.readFileSync(path.resolve(__dirname, '..', `${file}.fws`), 'utf-8')
    return JSON.parse(fw
        .replaceAll(/\@(.*)\:[ ]+/gi, '')
        .replaceAll(/[\$+]/g, '"'))
} 
