import { chevronDefault, chevronActive } from "../assets/icons";

const ProductPager = () => {
  return (
    <div className='mt-16 w-[240px] border border-neutral300 
      rounded-2xl flex gap-6 justify-center items-center
      py-3 mx-auto'>
      <div className="bg-neutral200 rounded-lg p-2">
        <img 
          src={chevronDefault}
          alt="chevron pointing left"
          className="rotate-180"
        />
      </div>
      <p className='mobileTextL1Default text-neutral600'>
        Page&nbsp;
        <span className="gradientText">1 of 3</span>
      </p>
      <div className="bg-neutral200 rounded-lg p-2">
        <img 
          src={chevronDefault}
          alt="chevron pointing left"
        />
      </div>
    </div>
  )
}

export default ProductPager;
