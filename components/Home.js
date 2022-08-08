import React, { useEffect, useState } from 'react'



const Home = ({ img }) => {
  const [sloka, setSloka] = useState({
    slok: '',
    gambir: {
      author: '',
      et: ''
    }
  }
  )
  const api_key = "9dbebbb5aff1f972b"

  useEffect(() => {
    getSlokas()
    console.log("use effect called")
  }, [])

  const getSlokas = async () => {
    const response = await fetch(`https://bhagavadgitaapi.in/slok?api_key=${api_key}`)
    const data = await response.json();
    console.log(data.slok)
    setSloka(data)

    console.log(et)
  }

  const { gambir: { author, et } } = sloka

  return (

    <div>
      <div class="card" style={{ width: 280 }}>
        <img class="card-img-top" src="https://astrokapoor.com/wp-content/uploads/2018/09/Bhagavad-Gita-Yagya.jpg" alt="gita"></img>
        <div class="card-body">
          <h5 class="card-title">Gitopadesha of the day</h5>
          <p class="card-text">Sloka: {sloka.slok}</p>
          <p class="card-text">Translation: {et}</p>
          <small class="card-text">Translator: {author}</small>
          <button class="btn btn-primary" onClick={getSlokas}>Next</button>
        </div>
      </div>
    </div>
  )



}

export default Home
