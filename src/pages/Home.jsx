import Navbar from "../components/Navigation/Navbar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="pt-28">
        <Hero />
      </div>

      <div className="pt-28  "></div>
    </div>
  );
}

export default Home;
