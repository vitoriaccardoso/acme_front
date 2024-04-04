'use strict'

import {getFilmes, getFilmesId,postFilme, putFilme} from "./filmes.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoFilme = await getFilmesId(indice)
console.log(infoFilme)

function preencherCampos(filme){
    const titulo = document.getElementById('titulo')
    titulo.textContent = filme.nome
    const poster = document.getElementById('poster')
    poster.src = filme.foto_capa
    const sinopse = document.getElementById('sinopse')
    const duracao = document.getElementById('duracao')
    const lancamento = document.getElementById('lancamento')
    lancamento.textContent = "DATA DE LANÇAMENTO: "+tratarData(filme.data_lancamento)
    const relancamento = document.getElementById('relancamento')
    if(filme.relancamento){
        relancamento.textContent = "DATA DE RELANÇAMENTO: "+tratarData(filme.data_relancamento)
    } else {
        relancamento.textContent = "DATA DE RELANÇAMENTO: Sem previsão"
    }
    const valor = document.getElementById('valor')
    valor.textContent='R$ '+filme.valor_unitario
    duracao.textContent="DURAÇÃO: "+tratarDuracao(filme.duracao) 
    sinopse.textContent=filme.sinopse
}


function tratarDuracao(string){
    const stringTratada = string.slice(11,19)
    return stringTratada
}
function tratarData(string){
    let dataTratada = string.slice(0,10)
    dataTratada = dataTratada.split('-')
    dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
    return dataTratada
}

preencherCampos(infoFilme)

