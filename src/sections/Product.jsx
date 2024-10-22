import { useState, useEffect } from "react";
import { productsFilters } from "../constants";
import Select from "../components/Select";
import FilterBtn from "../components/FilterBtn";
import ProductCard from "../components/ProductCard";
import ProductPager from "../components/ProductPager";
import ProductNumber from "../components/ProductNumber";
import { Toaster } from 'react-hot-toast';

const Product = ({ productRef, user, setUser }) => {
  const USER_TOKEN = process.env.REACT_APP_API_KEY;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [activeFilter, setActiveFilter] = useState("Most Recent");
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [productsInPage, setProductsInPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(totalProducts / productsPerPage);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    sessionStorage.removeItem('products');
    getProducts();

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // Get items for the current page
  const getPaginatedItems = () => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return products.slice(start, end);
  };

  useEffect(() => {
    if (width >= 1024) {
      setProductsPerPage(12)
      setProductsInPage(getPaginatedItems)
    } else if (width >= 1920) {
      setProductsPerPage(16)
      setProductsInPage(getPaginatedItems)
     } else {
      setProductsPerPage(8)
      setProductsInPage(getPaginatedItems)
     }
  }, [width]);

  useEffect(() => {
    setProductsInPage(getPaginatedItems);
  }, [currentPage, activeFilter, products]);

  useEffect(() => {
    // Most recent
    if (activeFilter === productsFilters[0].name && sessionStorage.getItem('products')) {
      setProducts(JSON.parse(sessionStorage.getItem('products')));
      setCurrentPage(1);
    // Lowest price
    } else if (activeFilter === productsFilters[1].name) {
      const sorted = products.sort((a, b) => a.cost - b.cost);
      setProducts(sorted);
      setCurrentPage(1);
    // Highest price
    } else if (activeFilter === productsFilters[2].name) {
      const sorted = (products.sort((a, b) => b.cost - a.cost));
      setProducts(sorted);
      setCurrentPage(1);
    }
  }, [activeFilter]);

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
      sessionStorage.setItem('products', JSON.stringify(data));
      setTotalProducts(data.length);
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
      <section id="product" ref={productRef} className="mt-20 mx-4 2xl:mx-[80px] max-w-[1464px] 2xl:mx-auto">
        <h2 className="mobileTitleL2Default text-neutral900 mb-10">
          <span className="gradientText">Tech</span> Products
        </h2>

        <div className="lg:flex lg:justify-between">
          <Select />
          <ProductPager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div
          className="flex gap-1 mt-6 overflow-scroll whitespace-nowrap
          flex-grow no-scrollbar mx-[-1.3rem] px-5 mb-4"
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productsInPage.map((product) => (
            <ProductCard user={user} setUser={setUser} key={product._id} {...product} />
          ))}
        </div>
        <div className="w-full mt-10 mx-auto flex flex-col items-center align-middle 2xl:flex-row-reverse">
          <ProductPager numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <ProductNumber totalProducts={totalProducts} productsPerPage={productsPerPage} />
          <div className="hidden 2xl:flex 2xl:w-[240px]"></div>
        </div>
        {/* <ProductNumber totalProducts={totalProducts} productsPerPage={productsPerPage} /> */}
        <Toaster
          position="bottom-left"
          toastOptions={{
            success: {
              style: {
                border: '2px solid #29CC74',
                padding: '16px',
                color: '#7C899C',
              },
            },
            error: {
              style: {
                border: '2px solid #E07F4F',
                padding: '16px',
                color: '#7C899C',
              },
            }
          }}
        />
      </section>
    );
  }
};

export default Product;