import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import AboutDoctor from "./components/sections/AboutDoctor";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <AboutDoctor />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;
