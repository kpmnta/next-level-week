// dados

const proffys = [
    { 
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "11 99512415", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720] ,
        time_to: [1220]
    },
    { 
        name: "Kai Pimenta",
        avatar: "https://avatars3.githubusercontent.com/u/65174706?s=460&u=f94c6045bfc9e6d3fcc68b315288585d3ac6cdf2&v=4",
        whatsapp: "11 99512415", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Artes",
        cost: "23",
        weekday: [3],
        time_from: [780] ,
        time_to: [1820]
    }
    
]

const subjects = [
    "Artes",
    "Biolgia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
]

// funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
    // adicionar dados a lista de proffys
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    } 
    return res.render("give-classes.html", { subjects, weekdays })
}
// servidor
const express = require('express')
const server = express()

// config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, 
})
// inicio e config do server
server.use(express.static("public"))

.get("/",pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do server
.listen(5000)