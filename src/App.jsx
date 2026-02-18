import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FlowStax from "./pages/FlowStax";
import MyMedicine from "./pages/MyMedicine";
import DesignSystem from "./pages/DesignSystem";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowstax" element={<FlowStax />} />
        <Route path="/mymedicine" element={<MyMedicine />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;