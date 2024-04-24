import React from 'react'

function Card(props) {
  return (
    <div className='secondCards'>
        <div className='icon'>{props.icon}</div>
      <div className='secondCard'> <h4 className='secondHeader'>On Time Service</h4>
      <p className='secondText'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
    </div>
  )
}

export default Card
