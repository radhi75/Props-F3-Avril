import React from 'react'

const TourCard = ({element}) => {
    
  return (
    <div className='card'>
     <img width="167px" height="291px" src={element.image} alt='404'/>
     <div>
     <h4>{element.name}</h4>
     <p style={{marginRight:"20px"}}>{element.info}</p>
     <p>{element.price} <span>$</span></p>
     
     </div>
    </div>
  )
}

export default TourCard