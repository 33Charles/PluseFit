import Hero from "./components/Hero";
import BodySection from "./components/BodySection";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <Hero />
      <BodySection />
      <ScrollToTop />
    </div>
  );
}

export default App;
