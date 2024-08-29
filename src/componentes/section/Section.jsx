import "./Section.css"
import Whikseria from "../../assets/img/Whikseria.jpg";
import ListaCasas from "../bebidas/ListaBebidas";


function Section() {
  
const handlerClickBoton = () => {
  alert ('Hiciste click en el botón');
}

  return (
    <section className="section">
      <h2>Productos disponibles</h2>
    <p>Encontrá todo lo que buscás aquí</p>
    <img src={Whikseria} alt= "Nuestra tienda" />   
    <br></br>
    <p>Productos: </p> 
    <ListaCasas />
    
    </section> 
  )
}

export default Section;