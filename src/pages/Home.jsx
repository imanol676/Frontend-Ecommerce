import Navbar from "../components/Navigation/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Navigation/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="pt-28">
        <Hero />
      </div>
      <div className="pt-28">
        <ProductGrid />
        <ProductGrid />
      </div>

      <div className="pt-28  ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
