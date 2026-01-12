import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tanques from "./pages/Tanques";
import Aviones from "./pages/Aviones";
import Historia from "./pages/Historia";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/tanques" element={<Tanques />} />
        <Route path="/aviones" element={<Aviones />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

