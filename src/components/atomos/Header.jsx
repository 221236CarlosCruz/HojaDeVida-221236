import FotoPersonal from "../../assets/img/contactoCarlos.png"
import FondoHeader from "../../assets/img/FondoHeader.png"
import '../../assets/styles/Header.css'

function Header() {
    return (
        <header>
            <img src={FondoHeader} alt="Fondo Header" className="FondoHeader" />
            <img className="foto" src={FotoPersonal} alt="Foto Personal" />
            <h1 className="name">Carlos Cruz</h1>
            <h3 className="rol">Estudiante de Ingenieria en Desarrollo de Software</h3>
        </header>
    );
}

export default Header;