import { useState, useEffect } from "react";
import { productsFilters } from "../constants";
import Select from "../components/Select";
import FilterBtn from "../components/FilterBtn";
import ProductCard from "../components/ProductCard";
import ProductPager from "../components/ProductPager";
import ProductNumber from "../components/ProductNumber";

const Product = ({ productRef }) => {
  const USER_TOKEN = process.env.REACT_APP_API_KEY;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [activeFilter, setActiveFilter] = useState("Most Recent");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  useEffect(() => {
    getProducts();
  }, []);

  /**
   * @desc Gets the list of products
   * @returns void
   */
  const getProducts = async () => {
    setIsLoading(true);
    const URL = `${API_BASE_URL}products`;
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      });
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <section id="product" ref={productRef} className="mt-20 mx-5">
        <h2 className="mobileTitleL2Default text-neutral900 mb-10">
          <span className="gradientText">Tech</span> Products
        </h2>
        <p className="mobileTextL1Default text-neutral600 text-center mt-10">
          Loading...
        </p>
      </section>
    );
  } else {
    return (
      <section id="product" ref={productRef} className="mt-20 mx-5">
        <h2 className="mobileTitleL2Default text-neutral900 mb-10">
          <span className="gradientText">Tech</span> Products
        </h2>

        <Select />
        <div
          className="flex gap-1 mt-6 overflow-scroll whitespace-nowrap
      flex-grow no-scrollbar mx-[-1.3rem] px-5 mb-16"
        >
          {productsFilters.map((filter, id) => (
            <FilterBtn
              key={id}
              name={filter.name}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          ))}
        </div>
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
        <ProductPager />
        <ProductNumber totalProducts={products.length} />
      </section>
    );
  }
};

export default Product;
