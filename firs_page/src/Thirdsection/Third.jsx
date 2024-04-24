import React from 'react'
import Thirdcard from './Thirdcard'
import "./third.css"
 


function Third() {
  return (
    <div className='thirdContainer'>
        <div className='thirdHero'>
<h2 className='thirdHeader'>OUR SERVICES</h2>
<p className='thirdContent'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      <Thirdcard icon={<i className="fa-solid fa-lightbulb"></i>} ></Thirdcard>
      <Thirdcard icon={<i className="fa-solid fa-cloud-moon"></i>} ></Thirdcard>
      <Thirdcard icon={<i className="fa-solid fa-mountain-sun"></i>}></Thirdcard>
      <Thirdcard icon={<i className="fa-solid fa-spaghetti-monster-flying"></i>}></Thirdcard>
      <Thirdcard icon={<i className="fa-solid fa-calendar-days"></i>}></Thirdcard>
      <Thirdcard icon={<i className="fa-solid fa-desktop"></i>}></Thirdcard>
    </div>
  )
}


export default Third
