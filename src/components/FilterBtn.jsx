
const FilterBtn = ({ name, activeFilter, setActiveFilter }) => {

  return (
    <button
      className={ activeFilter === name ? "brandDefault rounded-xl px-4 py-2 group hover:brandHover" : 
      "bg-brandLight rounded-xl px-4 py-2 group hover:brandHover" }
      onClick={() => activeFilter !== name ? setActiveFilter(name) : null}
    >
      <p className={ activeFilter === name ? "mobileTextL1Default text-neutral100" : 
      "gradientText mobileTextL1Default group-hover:text-neutral100" }>
        {name}
      </p>
    </button>
  )
}

export default FilterBtn;
