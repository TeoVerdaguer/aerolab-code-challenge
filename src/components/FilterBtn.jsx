import { useState } from "react";

const FilterBtn = ({ name }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={ active ? "brandDefault rounded-xl px-4 py-2 group hover:brandHover" : 
      "bg-brandLight rounded-xl px-4 py-2 group hover:brandHover" }
      onClick={() => !active ? setActive(true) : null}
    >
      <p className={ active ? "mobileTextL1Default text-neutral100" : 
      "gradientText mobileTextL1Default group-hover:text-neutral100" }>
        {name}
      </p>
    </button>
  )
}

export default FilterBtn;
