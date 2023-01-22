import Header from "../components/atomos/Header"
import PerfilPersonal from "../components/atomos/PerfilPersonal";
import Habilidades from "../components/atomos/Habilidades";
import Estudios from "../components/moleculas/Estudios";
import Contacto from "../components/moleculas/Contacto";

function App() {
    return (
        <>
        <Header></Header>
        <PerfilPersonal></PerfilPersonal>
        <Habilidades></Habilidades>
        <Estudios></Estudios>
        <Contacto></Contacto>
        </>
    );
}

export default App;