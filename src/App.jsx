import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/portfolio" element={<Portfolio />} />
        <Route path="/src/about" element={<About />} />
      </Routes>
      <footer class="footer">
        <p>&copy; ArusugiNz 2025 Mbak Tsumiki</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
