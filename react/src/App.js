import React, { useState, useEffect } from 'react'
import './style.css'

const url = 'https://www.amiiboapi.com/api/amiibo'

function App() {
  const [amiibos, setAmiibos] = useState([])

  useEffect(() => {
    fetch(url).then(result => result.json()).then(({ amiibo }) => setAmiibos(amiibo))
  }, [])

  return (
    <main>
      <h1 class="title">Amiibos</h1>
      <ul class="list">
        {amiibos.map(({ name, image, amiiboSeries, release }) => (
          <li key={name} className="item">
            <img src={image} alt={name} title={name} />
            <div class="item-description">
              <h2 class="item-name">{name}</h2>
              <p>Game Serie: {amiiboSeries}</p>
              <p>Release: {release.eu ?? release.jp ?? release.na ?? release.au}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App
