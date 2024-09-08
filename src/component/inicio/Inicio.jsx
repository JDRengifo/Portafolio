import "./inicio.css";
import josedario from "../../../src/component/Utils/josedario.png";
import Nuevafotoporta from "../../../src/component/Utils/Nuevafotoporta.png";
function Inicio() {
  return (
    <div className="contInicio">
      <h1 className="inicio">Portafolio</h1>
      <div className="contfoto">
        <img src={Nuevafotoporta} alt="banderas" className="foto" />
      </div>
      <div className="subtitulo">
        <h2 className="segnombre">JOSÉ DARIO RENGIFO FRANCO</h2>
        <h3 className="profesion">Profesor de Matemáticas - Full Stack</h3>
      </div>
    </div>
  );
}
export default Inicio;
