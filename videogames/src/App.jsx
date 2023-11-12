import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {

  return (
      <>
        <h1>Aplicacion Videogames</h1>
        <h2>ESTE ES UN EJEMPLO</h2>
        <button>"add"</button>
        <div>
          <Card
            image="C:\Users\Antonio\Desktop\Proyecto-individual-videogames\videogames\src\assets\components\videogame.png"
            description="Una descripción"
            name="Nombre del elemento"
            rating={3}
            platform="Plataforma"
            releaseDate="01/01/2023"
         />  
        </div>
    </>
  )
}

export default App
