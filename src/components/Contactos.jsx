import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Contactos = () => {
  return (
    
    <div className=' font-lexend text-white   h-50 w-1/2		m-7		'>
     
     <article className="p-4">
      <section className="flex items-center  ">
        <FontAwesomeIcon icon={faLocationDot} className="text-4xl hover:text-green-700 cursor-pointer" />
        <div className="flex flex-col ml-2">
          <h2 className="">Calle 55 #025-26</h2>
          <h2 className="">Popayán (Cauca)</h2>
        </div>
      </section>
    </article>
    <article className="p-4">
      <section className="flex items-center  ">
        <FontAwesomeIcon icon={faPhone} className="text-4xl hover:text-green-700 cursor-pointer" />
        <div className="flex flex-col ml-2">
          <h2 className="">+57 3145688996</h2>
          <h2 className="">0180005966336</h2>
        </div>
      </section>
    </article>
      <div className='flex p-4'>
        <FontAwesomeIcon icon={faEnvelope} className=' text-4xl hover:text-green-700 mr-2 cursor-pointer'/>
        <h2>Asociaciongolero@gmail.com</h2>
      </div>
    </div>
  )
}

export default Contactos
