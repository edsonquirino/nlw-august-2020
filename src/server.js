const proffys = [
    {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "11115096688",
        bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!",
        subject: "Educação Física",
        cost: "40",
        weekday: [0],
        time_from: [777],
        time_to: [1112]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]
//funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    // se tiver dados
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        // adicionar dados na lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }

    // se não, mostrar a página
    return res.render("give-classes.html", { subjects, weekdays })
}

// servidor
const express = require('express')
const server = express()
const nunjucks = require("nunjucks")
//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start do servidor
.listen(1911)