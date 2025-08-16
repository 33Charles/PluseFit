import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUsPage from "./pages/ContactUsPage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
