import "./curriculum.css";
import { Link } from "react-router-dom";

function Curriculum() {
  return (
    <div className="princcurri">
      <h1 className="curriculum">CURRICULUM</h1>
      <div className="contcurriculum">
        <div className="cvizquierda">
          <h2 className="educa1">.- Educación</h2>

          <br />
          <p>.- Full Stack Web Developer. Academia HENRY, 2023 - 2024.</p>
          <p>Diseño y producción de página Web</p>
          <br />
          <p>
            .- Licenciatura en Educación Matemáticas Mención Informática.
            Universidad Pedagógica Experimental Libertador. Nucleo Pedagógico de
            Caracas. Venezuela, 1986 - 1996.
          </p>
        </div>
        <div className="cvderecha">
          <h2 className="educa2">.- Laboral</h2>

          <br />
          <p>
            .- Teacher Asistent. (TA): Acompañamiento de nuevos alumnos.
            Seguimiento de codigo, control de quejas.
          </p>
          <br />

          <br />
          <p>.- Full Stack Web Developer. Lachoco-Latera, Bogotá Colombía.</p>
          <p>Diseño y producción de página Web, (Trabajo Independiente)</p>
          <br />
          <p>.- Proyecto Final HENRY, 2023.</p>
          <p>
            Trabajo sobre proyecto que permita la agilización y la mejora del
            manejo de las rutinas diarias de un bufete de abogados y la
            interacción de los clientes en la misma.
          </p>
          <br />
          <p>
            .- C.A. Metro de Caracas, Operador de equipos de sistema de tracción
            de trenes, estaciones y sub-estaciones eléctricas, 1988 -2017.
          </p>
          <br />
          <p>
            .- Profesor de Matemáticas. Liceo "Miguel Antonio Caro", Caracas,
            Venezuela, 1995 - 1996
          </p>
          <br />
          <p>Visita mi CV:</p>
          <a
            href="file:///C:/Users/CONECTIA%20BA/Documents/Jose%20Personal/CV%20Jose.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mi CV
          </a>
        </div>
      </div>
      <div>
        <h2 className="educa2">Tecnologias</h2>
      </div>
    </div>
  );
}

export default Curriculum;
