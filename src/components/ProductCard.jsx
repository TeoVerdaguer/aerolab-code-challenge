import { aeroPay3, aeroPay4 } from '../assets/icons';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ProductCard = ({ user, setUser, _id, name, category, img, cost }) => {
  const USER_TOKEN = process.env.REACT_APP_API_KEY;
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const successToast = (productName) => toast.success(`${productName} redeemed successfully`);
  const failToast = () => toast.error('There was a problem with the transaction');
  const [loading, setLoading] = useState(false);

  const redeemProduct = async (productId) => {
    setLoading(true);
    const URL = `${API_BASE_URL}redeem`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${USER_TOKEN}`,
        },
        body: JSON.stringify({productId: productId})
      });
      if (response.ok) {
        successToast(name);
        getUser();
        setLoading(false);
      } else {
        failToast();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async () => {
    const URL = `${API_BASE_URL}user/me`;
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${USER_TOKEN}`,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-[506px] w-full mt-12" key={_id}>
      <div className='h-[354px] border border-neutral300 rounded-t-2xl flex items-center justify-center'>
        <img src={img.url} alt="" />
      </div>
      <div className='border border-neutral300 rounded-b-2xl
      px-6 py-4 mb-4'>
        <h3 className='mobileTextL1Default text-neutral900'>{name}</h3>
        <p className='mobileTextL2AllCaps text-neutral600'>{category}</p>
      </div>

      {loading ? (
        <button
          className='sectionBg rounded-2xl w-full py-4 text-neutral0 mobileTextL1Default
          flex gap-2 justify-center cursor-default'
        >
          <p>Processing...</p>
        </button>
      ) : user.points >= cost ? (
        <button
          className='brandDefault rounded-2xl w-full py-4 text-neutral0 mobileTextL1Default
          flex gap-2 justify-center hover:brandHover'
          onClick={() => redeemProduct(_id)}
        >
          <p>Redeem for</p>
          <img src={aeroPay3} alt="aeropay logo" />
          <p>{cost}</p>
        </button>
      ) : (
        <button
          className='bg-neutral200 rounded-2xl w-full py-4 text-neutral0 mobileTextL1Default
          flex gap-2 justify-center cursor-default'
        >
          <p className='text-neutral600'>You need</p>
          <img src={aeroPay4} height={24} width={24} alt="aeropay logo" />
          <p className='text-neutral600'>{cost - user.points}</p>
        </button>
      )}
    </div>
  )
}

export default ProductCard;
