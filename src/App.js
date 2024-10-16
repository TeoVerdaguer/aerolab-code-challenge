import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Walkthrough from "./sections/Walkthrough";
import Footer from "./sections/Footer";
import { useRef, useState } from "react";

function App() {
  const product = useRef(null);
  const [user, setUser] = useState({});

  const scrollToProduct = () => {
    window.scrollTo({
      top: product.current.offsetTop,
      behavior: "smooth"
    });
  }

  return (
    <main>
      <Nav user={user} setUser={setUser} />
      <Hero scrollToProduct={scrollToProduct} />
      <Walkthrough />
      <Product productRef={product} user={user} setUser={setUser} />
      <Footer />
    </main>
  );
}

export default App;