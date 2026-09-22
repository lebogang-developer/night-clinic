import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="home" className="pt-20">
        <section className="flex min-h-[70vh] items-center justify-center">
          <h1 className="text-4xl font-bold text-[#0B1F33]">
            Night Clinic
          </h1>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;