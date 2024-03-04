import nikon from '../assets/nikon.png';
import { aeroPay3 } from '../assets/icons';

const ProductCard = ({ _id, name, category, img, cost }) => {

  return (
    <div className="h-[506px] w-[335px] mt-12" key={_id}>
      <div className='h-[354px] border border-neutral300 rounded-t-2xl flex items-center justify-center'>
        <img src={img.url} alt="" />
      </div>
      <div className='border border-neutral300 rounded-b-2xl
      px-6 py-4 mb-4'>
        <h3 className='mobileTextL1Default text-neutral900'>{name}</h3>
        <p className='mobileTextL2AllCaps text-neutral600'>{category}</p>
      </div>
      <button
        className='brandDefault rounded-2xl w-full py-4 text-neutral0 mobileTextL1Default
        flex gap-2 justify-center hover:brandHover'
      >
        <p className=''>Redeem for</p>
        <img src={aeroPay3} alt="aeropay logo" />
        <p>{cost}</p>
      </button>
    </div>
  )
}

export default ProductCard;
