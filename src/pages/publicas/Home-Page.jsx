
import Header from "../../components//publicas/Header-logo"
import Bienvenida from "../../components/publicas/Bienvenida-img"
import Footer from "../../components/publicas/Footer-icons"
import SobreNosotros from "../../components/publicas/SobreNosotrosComponente"
import "../../styles/homePage.css"
import Pagina from "../../components/publicas/Card-Recoleccioncomponent"

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
