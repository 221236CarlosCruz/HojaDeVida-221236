import {data} from "../../data/data"
import IconoTelefono from "../../assets/IconoTelefono.png"
import IconoCorreo from "../../assets/IconoCorreo.png"
import IconoCasa from "../../assets/IconoCasa.png"
import IconoInstagram from "../../assets/IconoInstagram.png"
import '../../assets/styles/Contacto.css'

function Contacto() {
    return (
        <div>
            <img src={IconoTelefono} className="IconoTelefono"/>
            <h1 className="TextTelefono">{data.contacto.contacto1}</h1>
            <img src={IconoCorreo} className="IconoCorreo"/>
            <h1 className="TextCorreo">{data.contacto.contacto2}</h1>
            <img src={IconoCasa} className="IconoCasa"/>
            <h1 className="TextCasa">{data.contacto.contacto3}</h1>
            <img src={IconoInstagram} className="IconoInstagram"/>
            <h1 className="TextInstagram">{data.contacto.contacto4}</h1>
        </div>
    );
}

export default Contacto;