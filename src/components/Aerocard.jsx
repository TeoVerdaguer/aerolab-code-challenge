import { aeroPay2 } from "../assets/icons";

const Aerocard = ({ name, date }) => {
  return (
    <div className="h-[148px] w-[264px] bg-neutral900 rounded-2xl">
      <div className="absolute bg-aerocardWave h-48 w-[280px]">
      </div>
      <div className="p-4 flex justify-between">
        <h3 className="mobileTextL1Default text-neutral100">Aerocard</h3>
        <img src={aeroPay2} alt="aeropay logo" />
      </div>
      
      <div className="px-4 pb-4 pt-14 flex justify-between">
        <p className="mobileTextL2Default text-neutral100">{name}</p>
        <p className="mobileTextL2Default text-neutral100">{date}</p>
      </div>
    </div>
  )
}

export default Aerocard;
