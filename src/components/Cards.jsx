import React from 'react'
import Card from './Card'

const Cards = ({handleClick, isStarted, photosArray}) => {
  return (
    <div className='cards' >
      {isStarted 
          && photosArray.map(photo => 
          <Card 
            handleClick={handleClick}
            key={photo.id} 
            photo={photo} 
          />)}
    </div>
  )
}

export default Cards