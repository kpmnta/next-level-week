// servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})
// inicio e config do server
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estátivos 
.use(express.static("public"))

.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
// start do server
.listen(5000)