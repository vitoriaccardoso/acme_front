export async function getFilmes() {
    const url = 'http://localhost:8080/v2/acme/filmes'
    
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filmes
}

export async function getFilme (id){
    const url = `http://localhost:8080/v2/acme/filme/${id}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filme[0]
}

export async function postFilme (filme) {
    const url = 'http://localhost:8080/v2/acmefilme/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(filme),
    }

    const response = await fetch (url, options)

    return response.ok

}

export async function putFilme (filme) {
    const url = `http://localhost:8080/v2/acmefilme/filme${filme.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(filme),
    }

    const response = await fetch (url, options)

    return response.ok

}

export async function deleteFilme (id) {
    const url = `http://localhost:8080/v2/acmefilme/filme${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch (url, options)

    return response.ok

}