import Select from "../components/Select";
import { productsFilters } from "../constants";
import FilterBtn from "../components/FilterBtn";
import ProductCard from "../components/ProductCard";
import ProductPager from "../components/ProductPager";
import ProductNumber from "../components/ProductNumber";

const Product = ({ productRef }) => {
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <section id="product" ref={productRef} className="mt-20 mx-5">
      <h2 className="mobileTitleL2Default text-neutral900 mb-10">
        <span className="gradientText">Tech</span> Products
      </h2>

      <Select />
      <div className="flex gap-1 mt-6 overflow-scroll whitespace-nowrap
      flex-grow no-scrollbar mx-[-1.3rem] px-5 mb-16">
        {productsFilters.map((filter, id) => (
          <FilterBtn key={id} name={filter.name} />
        ))}
      </div>
      <ProductCard />
      <ProductPager />
      <ProductNumber />
    </section>
  );
};

export default Product;
