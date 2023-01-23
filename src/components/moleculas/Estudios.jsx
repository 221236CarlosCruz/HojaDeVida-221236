import { data } from "../../data/data";
import IconoJardin from '../../assets/img/FotoJardin.png'
import IconoCebech from '../../assets/img/FotoCebech.png'
import IconoCbtis from '../../assets/img/FotoCbtis.png'
import '../../assets/styles/Estudios.css'

function Estudios() {
    return (
        <div>
            <h1 className="TextEstudios">ESTUDIOS</h1>
            <img src={IconoJardin} className="ImagenJardin"/>
            <h1 className="NameEscuela1">{data.estudios.escuela1}</h1>
            <h1 className="Periodo1">{data.estudios.periodo1}</h1>
            <img src={IconoCebech} className="ImagenCebech"/>
            <h1 className="NameEscuela2">{data.estudios.escuela2}</h1>
            <h1 className="Periodo2">{data.estudios.periodo2}</h1>
            <img src={IconoCbtis} className="ImagenCbtis"/>
            <h1 className="NameEscuela3">{data.estudios.escuela3}</h1>
            <h1 className="Periodo3">{data.estudios.periodo3}</h1>
        </div>
    );
}

export default Estudios;