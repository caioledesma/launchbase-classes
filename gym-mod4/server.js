const express = require("express")
const nunjucks = require("nunjucks")
const routes = require("./routes")


const server = express() // a variável EXPRESS se transformou numa função express()

//CONFIGURANDO O ESTILO
//configurar o servidor para usar arquivos estáticos, ele vai ficar observando essa pasta public pra servir os arquivos estáticos
server.use(express.static("public"))

//Esse .use é um middleware que é o meio do caminho entre duas coisas, por exemplo o servidor e o routes
server.use(routes)

//CONFIGURANDO TEMPLATE ENGINE, que é setar o motor de view, no começo foi HTML depois muda pra NJK
//server.set("view engine", "html")

//CONFIGURANDO O SERVER
//configurando o sever para ler arquivos .njk 
server.set("view engine", "njk")


//CONFIGURANDO NUNJUCKS, primeiro ele pede o caminho que ele tem que buscar os arquivos, 2o parametro ele pede opções que pelo Mayk é simples pq é a express, sem mta explicação
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


//RODAR O SERVER
//chamamos a const server e coloca ele pra ouvir a função listen    
// a função listen recebe dois parâmetros, a porta e outra função dentro
server.listen(5000, function() {   
    console.log('Run! Its a marathon, not a sprint!')
})