import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Noticies } from "./pages/Noticies";
import { Noticia } from "./pages/Noticia";
import { Contacte } from "./pages/Contacte";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticies" element={<Noticies />} />
            <Route path="/noticia/:id" element={<Noticia />} />
            <Route path="/contacte" element={<Contacte />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
