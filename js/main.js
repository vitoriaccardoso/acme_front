import { getFilmes, getFilme, postFilme } from "./filmes.js"

function criarCard(filme) {
    
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    const valor = document.createElement('button')
    const capa_filme = document.createElement('img')
    valor.textContent = filme.valor_unitario
    titulo.textContent = filme.nome
    capa_filme.src = filme.foto_capa
 
    // card.classList.add(
    //     'flex'
    // )
    capa_filme.classList.add(
        'h-56',
        'mx-px',
        'rounded-md',
        'border-blue-800',
        'flex',
        'flex-row'
    ) 
    card.append(capa_filme, titulo)

    return card
}
// console.log(card)

async function preencherContainer(){
    
    const container = document.querySelector('body')
    const filmes = await getFilmes()

    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
    })
    
}

function

preencherContainer()
