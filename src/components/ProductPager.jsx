import { useEffect, useState } from "react";
import { chevronDefault, chevronActive, chevronDisabled } from "../assets/icons";

const ProductPager = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  useEffect(() => {
    setPrevDisabled(currentPage === 1);
    setNextDisabled(currentPage === numberOfPages);
  }, [currentPage, numberOfPages]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      className="hidden lg:flex mt-16 mx-auto py-3 lg:mt-0 lg:py-0 lg:mx-0 w-[240px] h-[58px] border border-neutral300
      rounded-2xl gap-6 justify-center items-center"
    >
      {prevDisabled ? (
        <div
          className="bg-neutral200 rounded-lg p-2"
          onMouseEnter={() => setPrevHovered(true)}
          onMouseLeave={() => setPrevHovered(false)}
        >
          <img
            src={chevronDisabled}
            alt="chevron pointing left"
            className="rotate-180 bg-neutral300 bg-clip-text"
          />
        </div>
      ) : (
        <div
          className="bg-brandLight rounded-lg p-2 hover:bg-brandLight2 cursor-pointer"
          onMouseEnter={() => setPrevHovered(true)}
          onMouseLeave={() => setPrevHovered(false)}
          onClick={prevPage}
        >
          <img
            src={prevHovered ? chevronActive : chevronDefault}
            alt="chevron pointing left"
            className="rotate-180"
          />
        </div>
      )}

      <p className="mobileTextL1Default text-neutral600">
        Page&nbsp;
        <span className="gradientText">{currentPage} of {numberOfPages}</span>
      </p>

      {nextDisabled ? (
        <div
        className="bg-neutral200 rounded-lg p-2"
        onMouseEnter={() => setPrevHovered(true)}
        onMouseLeave={() => setPrevHovered(false)}
      >
        <img
          src={chevronDisabled}
          alt="chevron pointing left"
          className="bg-neutral300 bg-clip-text"
        />
      </div>
      ) : (
      <div
        className="bg-brandLight rounded-lg p-2 hover:bg-brandLight2 cursor-pointer"
        onMouseEnter={() => setNextHovered(true)}
        onMouseLeave={() => setNextHovered(false)}
        onClick={nextPage}
      >
        <img
          src={nextHovered ? chevronActive : chevronDefault}
          alt="chevron pointing left"
        />
      </div>
      )}
    </div>
  );
};

export default ProductPager;
