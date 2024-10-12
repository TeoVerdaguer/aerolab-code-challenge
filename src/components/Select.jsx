import { useState } from "react";
import { triangle } from "../assets/icons";

const Select = () => {

  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Products');

  const filters = [
    "All Products",
    "Popular",
    "New",
    "Top Rated",
  ];

  return (
    <div>
      <div
        className="w-full border border-neutral300 rounded-2xl py-4 pl-6
        pr-3 flex justify-between cursor-pointer"
        onClick={() => setShowFilters(!showFilters)}
      >
        <p className="mobileTextL1Default text-neutral600">{activeFilter}</p>
        <img src={triangle} alt="arrow down" height={10} width={10} className={`${showFilters ? 'rotate-180' : ''} transition-all`} />
      </div>

      {showFilters && (
        <div
          className="absolute w-[calc(100%-40px)] border border-neutral300 rounded-2xl
          bg-white mt-2 shadow-lg"
        >
          {filters.map((filter, index) => (
            <p
              key={index}
              className="mobileTextL1Default text-neutral600
              px-6 py-3 hover:bg-neutral100 cursor-pointer"
              onClick={() => {
                setActiveFilter(filter);
                setShowFilters(false);
              }}
            >
              {filter}
            </p>
          ))}
        </div>
      )}

    </div>
  )
}

export default Select;
