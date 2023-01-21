import FotoPersonal from "../../assets/contactoCarlos.png"
import FondoHeader from "../../assets/FondoHeader.png"
import '../../assets/styles/Header.css'

function Header() {
    return (
        <header>
            <img src={FondoHeader} alt="Fondo Header" />
            <img className="foto" src={FotoPersonal} alt="Foto Personal" />
            <h1>Carlos Cruz</h1>
            <h3>Estudiante de Ingenieria en Desarrollo de Software</h3>
        </header>
    );
}

export default Header;