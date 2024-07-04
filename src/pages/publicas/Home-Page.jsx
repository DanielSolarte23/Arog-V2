import Header from "../../components//publicas/Header-logo"
import Bienvenida from "../../components/publicas/Bienvenida-img"
import Pagina from "../../components/publicas/Card-Recoleccioncomponent"
import Footer from "../../components/publicas/Footer-icons"
import SobreNosotros from "../../components/publicas/SobreNosotrosComponente"
import "../../styles/homePage.css"

export default function HomePagina (){
    return (
        <div className="h-screen w-full">   
        <Header />
        <Bienvenida />
        <Footer />
        <Pagina />
        <SobreNosotros />
        </div>
    )
}
