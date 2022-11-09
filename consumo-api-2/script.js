function createCardPerson(){
    const divPai = document.querySelector('.content-cards')

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
    imagem.setAttribute('src', './download.jpeg')
    divImagem.appendChild(imagem)

    const divDescricao = document.createElement('div')
    divDescricao.style.marginTop = '1rem'
    divDescricao.style.display = 'flex'
    divDescricao.style.flexDirection = 'column'
    divDescricao.style.alignItems = 'center'
    divDescricao.style.gap = '.25rem'
    divCard.appendChild(divDescricao)

    const Pnome = document.createElement('p')
    Pnome.innerText = 'Igor Marques'
    divDescricao.appendChild(Pnome)

    const Pnum = document.createElement('p')
    Pnum.innerText = '98653-1492'
    divDescricao.appendChild(Pnum)
}

createCardPerson()