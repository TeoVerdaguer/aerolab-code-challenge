import { arrowIcon } from "../assets/icons";

const Hero = ({ scrollToProduct }) => {
  return (
    <section id="Hero" className="px-9 text-center bg-singleWavePattern pb-28">
      <h1
        className="mobileTextL1AllCaps24 text-neutral600 mb-2"
      >
        Explore the
      </h1>
      <h1
        className="mobileTitleL1Default text-neutral900"
      >
        <span className="gradientText">
          Tech
        </span>
        Zone
      </h1>
      <p className="mt-6 text-neutral600 mobileTextL1Default">
        Here you’ll be able to redeem all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </p>
      <button onClick={scrollToProduct} className="mt-10 brandDefault rounded-3xl py-5 w-full flex justify-center">
        <p
          className="mobileTextL1Default uppercase text-neutral0
        mr-1"
        >
          View all products
        </p>
        <img src={arrowIcon} alt="arrow down" />
      </button>
    </section>
  );
};

export default Hero;
