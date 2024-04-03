import React from "react";
import Hero from "./Components/Hero/hero";
import Footer from "./Components/Footer/footer";
import About from "./Components/About/about";
import Navbar from "./Components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default App;
