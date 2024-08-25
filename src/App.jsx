import { useState, useEffect } from 'react'
import fetch from './components/fetch'
import './App.css'
import GamePanel from './components/GamePanel'
import Cards from './components/Cards'

function App() {
  const [isStarted, setStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [record, setRecord] = useState(0)
  const [photosArray, setPhotos] = useState([])
  const [clickedCardsArray, setClickedCardsArray] = useState([])

  useEffect(() => {
    if (score > record) {
      setRecord(score);
    }
  }, [score, record]);

  const startGame = () => {
    setStarted(true); 
    setScore(0); 
    setRecord(0)
    setClickedCardsArray([])
    setPhotos([])
    loadPhotos()
  }

  const loadPhotos = async () => {
    const photos = await fetch()
    setPhotos(photos)
  };

  const handleClick = (event) => {
    setClickedCardsArray([...clickedCardsArray, event.target.alt])
    if(clickedCardsArray.some(card => card === event.target.alt)) {
      alert('Данная карточка уже была выбрана, вы проиграли')
      setScore(0)
      loadPhotos()
    } else {
      setScore(prev => prev + 1)
    }
  }

  return (
    <>
      <GamePanel 
        startGame={startGame} 
        score={score} 
        record={record} 
      />
      <Cards 
        handleClick={handleClick}
        isStarted={isStarted} 
        photosArray={photosArray} 
      />
    
    </>
  )
}

export default App
