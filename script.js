async function getUsers() {
    const response = await fetch('https://api.randomuser.me/?results=15')
    const data = await response.json()

    const results = data.results
    createTableRow(results)
}
getUsers()

function createTableRow(results) {
    const tbody = document.getElementById('tbody')

    for (const item of results) {
        const imgUser = item.picture.thumbnail
        const nameUser = item.name.first +  ' ' + item.name.last
        const emailUser = item.email

        const tr = document.createElement('tr')
        tbody.appendChild(tr)
        
        const tdImage = document.createElement('td')
        tr.appendChild(tdImage)
        tdImage.style.padding = '1rem'

        const imageUser = document.createElement('img')
        imageUser.setAttribute('src', imgUser)
        tdImage.appendChild(imageUser)

        const tdName = document.createElement('td')
        tr.appendChild(tdName)
        tdName.innerText = `${nameUser}`
        tdName.style.fontWeight = '700'

        const tdEmail = document.createElement('td')
        tr.appendChild(tdEmail)
        tdEmail.innerText = `${emailUser}`
    }
}