import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Walkthrough from "./sections/Walkthrough";
import Footer from "./sections/Footer";
import { useRef } from "react";

function App() {
  const product = useRef(null);

  const scrollToProduct = () => {
    window.scrollTo({
      top: product.current.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <main>
      <Nav />
        <Hero scrollToProduct={scrollToProduct}/>
        <Walkthrough />
        <Product productRef={product}/>
        <Footer />
    </main>
  );
}

export default App;
