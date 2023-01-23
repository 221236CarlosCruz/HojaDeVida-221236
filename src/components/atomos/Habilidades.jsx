import IconoHabilidades from '../../assets/img/FotoHabilidades.png'
import '../../assets/styles/Habilidades.css'

function Habilidades() {
    return (
        <div>
            <img src={IconoHabilidades} className="FotoHabilidades" />
            <h1 className='TextHabilidades'>HABILIDADES</h1>
            <h3 className='Descripcion2'>HTML <br />
            CSS <br />
            JAVA <br />
            C++ <br />
            JAVASCRIPT</h3>
        </div>
    );
}

export default Habilidades;