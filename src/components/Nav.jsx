import { aerolabLogo2, aeroPay1, chevronDefault, chevronActive } from '../assets/icons';

const Nav = () => {
  return (
    <nav className='px-5 flex justify-between items-center py-10'>
      <img src={aerolabLogo2} height={48} width={48} alt="aerolab logo" />
      <button className='border rounded-2xl border-neutral300
       flex justify-between px-4 py-2'>
        <img src={aeroPay1} alt="aeropay icon" className='mr-2' />
        <p className='mobileTextL1Default gradientText'>1000</p>
        <img
          src={chevronDefault}
          alt="chevron down" 
          className='rotate-90 ml-4'
        />
        </button>
    </nav>
  )
}

export default Nav;
