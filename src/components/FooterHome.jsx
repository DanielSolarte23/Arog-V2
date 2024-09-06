
import Contactos from './Contactos'
import Redes from './Redes'
import Acerca from './Acerca'

const FooterHome = () => {
  return (
    <div className='bg-Cafe-footer h-72	fixed bottom-0'>
      <article className='display flex justify-between text-center '>
        <Contactos/>
        <section className='flex-col w-6/12 m-7  '>
        <Acerca/>
        <Redes/>
        </section>
        
      </article>
      
    </div>
    
  )
}

export default FooterHome