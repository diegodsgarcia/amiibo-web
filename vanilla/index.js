const url = 'https://www.amiiboapi.com/api/amiibo'
const box = document.querySelector('.list')

init()

async function init() {
  const result = await fetch(url)
  const { amiibo } = await result.json()

  console.log(amiibo)

  amiibo.forEach(item => box.appendChild(createListItem(item)))
}

function createListItem({ name, image, amiiboSeries, release }) {
  const item = document.createElement('li')
  item.className = 'item'
  item.innerHTML = `
    <img src="${image}" />
    <div class="item-description">
      <h2 class="item-name">${name}</h2>
      <p>Game Serie: ${amiiboSeries}</p>
      <p>Release: ${release.eu ?? release.jp ?? release.na ?? release.au}</p>
    </div>
  `
  return item
}
