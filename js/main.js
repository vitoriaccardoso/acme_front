import { getFilmes, getFilme, postFilme } from "./filmes.js"
// console.log(getFilmes)
function criarCard(filme) {
    
    
    const card = document.createElement('div')
    const id = filme.id_filme
    console.log(filme)
    card.addEventListener("click", () => {abrirFilme(id)
    console.log(id)})
    const titulo = document.createElement('h2')
    const valor = document.createElement('button')
    const capa_filme = document.createElement('img')
    valor.textContent = filme.valor_unitario
    titulo.textContent = filme.nome
    capa_filme.src = filme.foto_capa
 
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
    
    async function abrirFilme(idFilme){
        const filme = await getFilme(idFilme)
        console.log(filme)
        focoFilme(filme)
        
    }
    
    async function preencherContainer(){
        
        const container = document.querySelector('body')
        const filmes = await getFilmes()
        
        filmes.forEach(filme => {
            const main = criarCard(filme)
            container.appendChild(main)
        })
        
        
        
    }
    preencherContainer()
    
    
    const divFundo = document.getElementById('fundo')
    async function focoFilme(filme){
        divFundo.classList.remove('hidden')
        
        const header = document.createElement('header')
        const cabecalho = document.createElement('div')
        const capa_filme = document.createElement('img')
        capa_filme.src = filme.capa_filme
        
        const titulo = document.createElement('h1')
        titulo.textContent = filme.nome
        
        const sinopse = document.createElement('h1')
        sinopse.textContent = document.sinopse
        
        const duracao = document.createElement('h1')
        duracao.textContent = document.duracao
        
        const dataLancamento = document.createElement('h1')
        dataLancamento.textContent = document.dataLancamento
        
        const dataRelancamento = document.createElement('h1')
        dataRelancamento.textContent = document.dataRelancamento
        
        const linkFotoCapa = document.createElement('h1')
        linkFotoCapa.textContent = document.linkFotoCapa
        
        const valor = document.createElement('h1')
        valor.textContent = document.valor
        
        const geral = document.createElement('div')
        geral.textContent = document.geral
        
        const espaco = document.createElement('br')
        
        const divTexto = document.createElement('div')

  divTexto.replaceChildren(titulo, sinopse, duracao, dataLancamento, dataRelancamento)
  cabecalho.replaceChildren(capa_filme)
  header.replaceChildren(cabecalho)
  
  console.log('teste')
  

}

