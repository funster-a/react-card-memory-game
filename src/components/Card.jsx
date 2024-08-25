import React from 'react'

const Card = ({ photo, handleClick }) => {
  return (
    <div 
        className='card' 
        key={photo.id}
    >
        <img 
            onClick={handleClick}
            src={photo.url} 
            alt={photo.alt} 
        />
        <p>{photo.alt}</p>
    </div>
  )
}

export default Card
