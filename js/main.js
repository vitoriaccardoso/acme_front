import { getFilmes, getFilme, postFilme } from "./filmes.js"

function criarCard(filme) {
    
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    

    const valor = document.createElement('button')
    valor.textContent = filme.valor_unitario
        
    card.append(titulo, valor)

    return card
}

async function preencherContainer(){
    
    const container = document.querySelector('body')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
    })
    
}

preencherContainer()
TESTES

const filme = {
    "id": 1,
            "nome": "Aladdin",
            "sinopse": "Após o sultão ordenar que sua filha, a princesa Jasmine, ache um marido rapidamente, ela foge do palácio.\n Jasmine encontra um tipo meio malandro, Aladdin, que conquista seu coração. Porém ambos são achados pelos guardas de Jafar, o vizir do sultão.\n Jafar criou um feitiço para dominar o sultão, se casar com Jasmine e se tornar ele mesmo o sultão.\n Além disto finge que cometeu um engano e mandou decapitar Aladdin, que na verdade está vivo, pois Jafar precisa dele para conseguir uma lâmpada mágica, que é a morada de um\n poderoso gênio. Mas o plano de Jafar falha, pois Aladdin fica com a lâmpada graças a intervenção de um\n pequeno macaco, Abu, seu fiel mascote. Quando descobre que há na lâmpada um gênio poderoso, que pode se transformar em qualquer\n pessoa ou coisa e que lhe concederá três desejos, Aladdin planeja usá-los para conquistar Jasmine, sem imaginar que Jafar é um diabólico inimigo, que precisa ser detido.",
            "duracao": "1970-01-01",
            "data_lancamento": "1993-07-03",
            "data_relancamento": null,
            "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/210/506/21050616_20131017211827208.jpg",
            "valor_unitario": 24.00
}


postFilme(filme)




console.log(postFilme(filme))

//TESTES

// const filme = {
//     "id": 1,
//             "nome": "Aladdin",
//             "sinopse": "Após o sultão ordenar que sua filha, a princesa Jasmine, ache um marido rapidamente, ela foge do palácio.\n Jasmine encontra um tipo meio malandro, Aladdin, que conquista seu coração. Porém ambos são achados pelos guardas de Jafar, o vizir do sultão.\n Jafar criou um feitiço para dominar o sultão, se casar com Jasmine e se tornar ele mesmo o sultão.\n Além disto finge que cometeu um engano e mandou decapitar Aladdin, que na verdade está vivo, pois Jafar precisa dele para conseguir uma lâmpada mágica, que é a morada de um\n poderoso gênio. Mas o plano de Jafar falha, pois Aladdin fica com a lâmpada graças a intervenção de um\n pequeno macaco, Abu, seu fiel mascote. Quando descobre que há na lâmpada um gênio poderoso, que pode se transformar em qualquer\n pessoa ou coisa e que lhe concederá três desejos, Aladdin planeja usá-los para conquistar Jasmine, sem imaginar que Jafar é um diabólico inimigo, que precisa ser detido.",
//             "duracao": "1970-01-01",
//             "data_lancamento": "1993-07-03",
//             "data_relancamento": null,
//             "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/210/506/21050616_20131017211827208.jpg",
//             "valor_unitario": 24.00
// }

