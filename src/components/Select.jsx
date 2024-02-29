import { triangle } from "../assets/icons";

const Select = () => {

  return (
    <div
      className="w-full border border-neutral300 rounded-2xl py-4 pl-6
      pr-3 flex justify-between cursor-pointer"
    >
      <p className="mobileTextL1Default text-neutral600">All Products</p>
      <img src={triangle} alt="arrow down" height={10} width={10} />
    </div>
  )
}

export default Select;
