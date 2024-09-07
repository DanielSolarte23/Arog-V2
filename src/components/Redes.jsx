import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'



const Redes = () => {
  return (
    <div className=' font-lexend text-white	h-18 flex '>
      <section className='m-4 '>
       <FontAwesomeIcon icon={faFacebook} className='text-4xl hover:text-green-700 cursor-pointer'/>
       </section>
       <section className='m-4'>
      <FontAwesomeIcon icon={faInstagram}  className='text-4xl hover:text-green-700 cursor-pointer'/>
      </section>
      <section className='m-4'>
      <FontAwesomeIcon icon={faTiktok}  className='text-4xl hover:text-green-700 cursor-pointer'/>
      </section>
      <section className='m-4'>
      <FontAwesomeIcon icon={faPhoneVolume} className='text-4xl hover:text-green-700 cursor-pointer' />
      </section>
    </div>
  )
}

export default Redes