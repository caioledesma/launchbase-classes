const express = require("express")
const server = express() // a variável de cima, se transformou numa função express()


//criando rotas
//Parâmetro req é o servidor ouvindo alguma coisa e o parâmetro res é a resposta dele
//a ideia é: servidor, pegue essa rota no caso, essa barro e execute essa função
//o send dentro do res é uma função do objeto res

server.get("/", function(req, res) {
    return res.send("Hello!3")
})


//chamamos a const server e coloca ele pra ouvir a função listen    
// a função listen recebe dois parâmetros, a porta e outra função dentro

server.listen(5000, function() {   
    console.log('server tá rodando!')
})