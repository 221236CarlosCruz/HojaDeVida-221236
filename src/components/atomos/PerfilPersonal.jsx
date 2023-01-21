import IconoPersonal from '../../assets/fotoPersonal.png';
import '../../assets/styles/PerfilPersonal.css'

function PerfilPersonal() {
    return (
        <div>
            <h1 className='PerfilPersonal'>PERFIL PERSONAL</h1>
            <h3 className='Descripcion1'>Como persona organizada y con una gran motivación, soy capaz de adaptarme
            a cualquier circunstancia y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo
            por trabajar en equipo y fomentar valores como los del compañerismo.</h3>
            <img src={IconoPersonal} className="FotoPersonal" />
        </div>
    );
}

export default PerfilPersonal;