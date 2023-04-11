import "./App.css";
import AgregarNota from "./components/AgregarNota";
import EditarNota from "./components/EditarNota";
import ListarNotas from "./components/ListarNotas";
import Navegacion from "./components/Navegacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navegacion />
        <Routes>
          <Route path="/" element={<ListarNotas />} exact></Route>
          <Route path="/agregarnota" element={<AgregarNota />} exact></Route>
          <Route path="/editarnota" element={<EditarNota />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
