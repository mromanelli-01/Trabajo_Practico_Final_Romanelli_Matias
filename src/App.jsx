import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/HEADER'
import Menu from './componentes/menu/Menu'
import Section from './componentes/section/Section'
import RegisterForm from './componentes/formulario/RegisterForm'
import LoginForm from './componentes/formulario/LoginForm'
import ListaBebidas from './componentes/bebidas/ListaBebidas'
import DetalleProducto from './componentes/bebidas/DetalleProducto'


function App() {
  

  return (
    <Router>
    <div> 

    </div>
    <Header />
    <Menu />
    <main>
    <Routes>
    <Route path="/" element={<Section />}/>
    <Route path="/bebidas" element={<ListaBebidas />}/>
    <Route path="/registro" element={<RegisterForm />}/>
    <Route path="/login" element={<LoginForm />}/>
    <Route path="/producto/:codigo" element={<DetalleProducto />} >


    </Route>
    </Routes>
    </main>
    <br></br>
    <Footer />
    </Router>
    //Los textos deben estar englobados es decir de la siguiente forma -> <> ... </> o <div> ... </div> no podes tener un h1,h2,etc. suelto
  )
}

export default App
