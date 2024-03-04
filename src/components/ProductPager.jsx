import { useState } from "react";
import { chevronDefault, chevronActive, chevronDisabled } from "../assets/icons";

const ProductPager = () => {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  return (
    <div
      className="mt-16 w-[240px] border border-neutral300 
      rounded-2xl flex gap-6 justify-center items-center
      py-3 mx-auto"
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
        <span className="gradientText">1 of 3</span>
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
