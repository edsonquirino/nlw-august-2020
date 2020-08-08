// servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, safeClasses } = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// inicio e configuração do servidor
server

// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

// rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/safe-classes", safeClasses)

// start do servidor
.listen(1911)