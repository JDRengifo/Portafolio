import "./navBar.css";

function NavBar({ handleCambioTema }) {
  return (
    <div className="barra">
      <div>
        <h2 className="nombre">José Dario</h2>
      </div>
      <div>
        <button className="boton">Curriculum</button>
        <button className="boton">Contacto</button>
        <button className="boton" onClick={handleCambioTema}>
          Cambio de tema
        </button>
      </div>
    </div>
  );
}

export default NavBar;
