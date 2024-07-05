import React from "react";
import imagen1 from "../../images/imagenactividad.jpg";
import imagen2 from "../../images/nuestrosdesechos.jpg";
import imagen3 from "../../images/venticas.jpg";
import imagen4 from "../../images/loguito.jpg";
import imagen5 from "../../images/defensa.jpg"


function Informacion() {
    return (
        <>
   
    <section id="contenido-principal">
      <main className="contenido flex flex-wra max-w-full	">
        <section className="contenidoizquierdo flex w-2/4 max-w-full flex-col">
          <article className="foto h-1/4  mb-0 ml-5 mt-5	max-w-full 	pl-24	">
            <img className="publicidad h-full	 w-4/5 flex justify-center 	" src={imagen1} alt="imagen1" />
          </article>
          <article className="parrafo1 h-24	 mb-0 ml-5 mt-5 max-w-full m-0	">
            <p className="texto1 m-4  font-semibold	">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nam labore quo earum commodi qui illo aperiam, repellat id error in numquam tempora quae iusto! Delectus, laborum. Sint, earum consequuntur.
            </p>
          </article>

          <article className="parrafo2  h-1/4  mb-0 ml-5 mt-5	max-w-full pl-20">
            <img className="publicidad2 h-full	 w-4/5 flex justify-center	" src={imagen2} alt="imagen2" />
          </article>
          <article className="parrafo3 h-24	 mb-0 ml-5 mt-5 max-w-full m-0">
            <p className="texto2 m-4  font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis deleniti dolores magni quam dolorum, aspernatur nulla quisquam molestias laborum nam quo nostrum id exercitationem saepe nisi, blanditiis laudantium placeat?
            </p>
          </article>
          <article className="parrafo4 h-1/4  mb-0 ml-5 mt-5	max-w-full pl-20">
            <img className="publicidad3 h-full	 w-4/5 flex justify-center" src={imagen3} alt="imagen3" />
          </article>
        </section>

        <section className="contenidoderecho flex w-2/4 max-w-full flex-col">
          <article className="parrafo5 h-24	 mb-0 ml-5 mt-5 max-w-full m-0">
            <p className="texto3 m-4  font-semibold ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque temporibus, ab praesentium nobis quos sit, ut eius id omnis quisquam deleniti, unde tempora rerum? Alias quibusdam possimus nisi mollitia labore.
            </p>
          </article>

          <article className="parrafo6 h-1/5 mb-0 ml-5 mt-5 max-w-full  	">
            <img className="publicidad4 	w-5/6 flex justify-center pl-44" src={imagen4} alt="imagen4" />
          </article>

          <article className="parrafo7 h-20  ml-5 mt-44 max-w-full ">
            <p className="texto4 m-4 pl-4  font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse impedit architecto ipsa excepturi eveniet inventore ratione minus perferendis omnis ipsam fuga quas ea, consectetur, officiis veritatis cumque commodi cum.
            </p>
          </article>

          <article className="parrafo8  mb-0 ml-5 mt-5">
            <img className="publicidad5 w-5/6 flex   pl-44" src={imagen5} alt="imagen5" />
          </article>

          <article className="parrafo9 h-20  ml-5 mt-16 max-w-full ">
            <p className="texto5 m-4 pl-4  font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore iusto, praesentium voluptatum amet quidem eos, magnam, dolore est eius quos. Quod quia velit veniam modi tempora ad quaerat beatae.
            </p>
          </article>
        </section>
      </main>
    </section>

        </>
    );
}




export default Informacion;

