import "./navBar.css";

function NavBar({ handleCambioTema }) {
  return (
    <div className="barra">
      <button onClick={handleCambioTema}>Cambio de tema</button>
    </div>
  );
}

export default NavBar;
