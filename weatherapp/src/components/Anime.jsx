import React from 'react'

const Anime = () => {
  

    fetch("https://animechan.xyz/api/quotes/anime?title=naruto")
    .then((response) => response.json())
    .then((quotes) => console.log(quotes));

  return (
    <div>
      <h1>Random Anime Quotes</h1>
      
    </div>
  )
}

export default Anime
