import React from "react";

import { SobreNosotros, Encabezado, Menu, Cocinero, Laureles, Encuentranos, Footer} from './contenido';
import { Navbar } from "./components";
import './App.css';
import Galeria from './contenido/Galeria';




const App = () => (
  <div>
    <Navbar />
    <Encabezado />
    <SobreNosotros />
    <Menu />
    <Cocinero />
    <Laureles />
    <Galeria />
    <Encuentranos />
    <Footer />
  </div>
);

export default App;
