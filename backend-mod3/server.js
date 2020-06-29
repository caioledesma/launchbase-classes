const express = require("express")
const nunjucks = require("nunjucks")

const server = express() // a variável EXPRESS se transformou numa função express()



//CONFIGURANDO O ESTILO
//configurar o servidor para usar arquivos estáticos, ele vai ficar observando essa pasta public pra servir os arquivos estáticos
server.use(express.static("public"))


//CONFIGURANDO TEMPLATE ENGINE, que é setar o motor de view, no começo foi HTML depois muda pra NJK
//server.set("view engine", "html")

//CONFIGURANDO O SERVER
//configurando o sever para ler arquivos .njk 
server.set("view engine", "njk")


//CONFIGURANDO NUNJUCKS, primeiro ele pede o caminho que ele tem que buscar os arquivos, 2o parametro ele pede opções que pelo Mayk é simples pq é a express, sem mta explicação
nunjucks.configure("views", {
    express: server
})

//CRIANDO ROTAS 

//PRIMEIRA AULA
//Parâmetro req é o servidor ouvindo alguma coisa e o parâmetro res é a resposta dele
//a ideia é: servidor, pegue essa rota no caso, essa barra e execute essa função
//o send dentro do res é uma função do objeto res
// server.get("/", function(req, res) {
//     return res.send("Hello!3")
// })

//AULA CRIANDO TEMPLATE ENGINE - Módulo template engine aula 2
//agora o return dele vai ser outra coisa, res.render() que é para conectar com o nunjucks, que é a renderização dos arquivos do nunjucks que chamaos por um método, que é a renderização de uma view, não precisa de HTML pq isso passamos na linha acima do server.set
server.get("/", function(req, res) {
    return res.render("about")
})

//FAZER A ROTA PRA PORTFOLIO

server.get("/portfolio", function(req, res) {
    return res.render("portfolio")
})

//RODAR O SERVER
//chamamos a const server e coloca ele pra ouvir a função listen    
// a função listen recebe dois parâmetros, a porta e outra função dentro
server.listen(5000, function() {   
    console.log('server tá rodando!')
})