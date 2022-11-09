async function getUsers() {
    const divPai = document.querySelector('.content-cards')
    divPai.innerHTML = ''

    const btnAtt = document.getElementById('att')
    btnAtt.setAttribute('disabled', false)
    const response = await fetch('https://api.randomuser.me/?results=11')
    const data = await response.json()
    btnAtt.removeAttribute('disabled', true)

    const results = data.results
    createCardPerson(results)
}
getUsers()

function createCardPerson(results) {
    const divPai = document.querySelector('.content-cards')

    for (const item of results) {
        const imgUser = item.picture.large
        const nameUser = item.name.first
        const lastUser = item.name.last
        const emailUser = item.email
        const telefone = item.cell

        const divCard = document.createElement('div')
        divCard.style.backgroundColor = '#f8f8f8'
        divCard.style.padding = '1rem'
        divCard.style.width = '15rem'
        divCard.style.minHeight = '10rem'
        divCard.style.borderRadius = '1rem'
        divPai.appendChild(divCard)

        const divImagem = document.createElement('div')
        divCard.appendChild(divImagem)

        const imagem = document.createElement('img')
        imagem.style.width = '100%'
        imagem.style.borderRadius = '1rem'
        imagem.setAttribute('src', imgUser)
        divImagem.appendChild(imagem)

        const divDescricao = document.createElement('div')
        divDescricao.style.marginTop = '1rem'
        divDescricao.style.display = 'flex'
        divDescricao.style.flexDirection = 'column'
        divDescricao.style.alignItems = 'center'
        divDescricao.style.gap = '.25rem'
        divCard.appendChild(divDescricao)

        const Pnome = document.createElement('p')
        divDescricao.appendChild(Pnome)
        Pnome.innerText = `${nameUser} ${lastUser}`

        const Pnum = document.createElement('p')
        divDescricao.appendChild(Pnum)
        Pnum.innerText = `${telefone}`

        const email = document.createElement('p')
        divDescricao.appendChild(email)
    }
}

createCardPerson()