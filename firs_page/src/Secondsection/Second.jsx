import React from 'react'
import "./second.css"
import Card from './Card'
function Second() {
  return (
    <div className='secondContainer'>
      <Card icon={<i className="fa-regular fa-lightbulb"></i>}></Card>
      <Card icon={<i class="fa-solid fa-dollar-sign"></i>}></Card>
      <Card icon={<i class="fa-solid fa-hand-holding-dollar"></i>}></Card>

    </div>
  )
}

export default Second
