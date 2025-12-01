import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Noticies } from "./pages/Noticies";
import { Noticia } from "./pages/Noticia";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticies" element={<Noticies />} />
        <Route path="/noticia/:id" element={<Noticia />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
