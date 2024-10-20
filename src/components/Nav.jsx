import { useState, useEffect } from "react";
import {
  aerolabLogo1,
  aerolabLogo2,
  aeroPay1,
  aeroPay3,
  chevronDefault,
  chevronActive,
  crossDefault,
  crossActive,
} from "../assets/icons";
import Aerocard from "./Aerocard";
import { aerocardAmounts } from "../constants";
import { motion, AnimatePresence } from "framer-motion"
import toast from 'react-hot-toast';

const Nav = ({ user, setUser }) => {
  const USER_TOKEN = (process.env.REACT_APP_API_KEY);
  const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL);
  const [showAeropayModule, setShowAeropayModule] = useState(false);
  const [activeAmount, setActiveAmount] = useState(1000);
  const [width, setWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const successToast = (points) => toast.success(`${points} points added successfuly`);
  const errorToast = () => toast.error('There was a problem');

  useEffect(() => {
    getUser();

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

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

  const addPoints = async (amount) => {
    setLoading(true);
    const URL = `${API_BASE_URL}user/points`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${USER_TOKEN}`,
        },
        body: JSON.stringify({amount: amount})
      });
      getUser();
      if(response.ok) {
        successToast(amount);
      } else {
        errorToast();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function formatDate(dateStr) {
    // Parse the date string with Z timezone format
    const dateObj = new Date(dateStr);
  
    // Format the date as MM-YY
    const formattedDate = dateObj.toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' });
  
    return formattedDate;
  }

  return (
    <nav className="mx-5 flex justify-between items-center py-10 2xl:mb-[130px] xl:mx-60">
      {width >= 1536 ? (
        <img src={aerolabLogo1} height={48} width={120} alt="aerolab logo" />
      ) : (
        <img src={aerolabLogo2} height={48} width={48} alt="aerolab logo" />
      )}
      <button
        className="border rounded-2xl border-neutral300
       flex justify-between px-4 py-2"
        onClick={() => setShowAeropayModule(!showAeropayModule)}
      >
        <img src={aeroPay1} alt="aeropay icon" className="mr-2 " />
        <p className="mobileTextL1Default gradientText min-w-11">{user.points ? user.points : '0000'}</p>
        <motion.img
          src={chevronDefault}
          alt="chevron down"
          className={`${showAeropayModule ? '-rotate-90 ml-4' : 'rotate-90 ml-4'} transition-all`}
          onMouseOver={(e) => (e.currentTarget.src = chevronActive)}
          onMouseOut={(e) => (e.currentTarget.src = chevronDefault)}
        />
      </button>

      <AnimatePresence>
      {showAeropayModule && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-24 right-5 xl:right-20 2xl:right-60 z-50 w-[312px] h-[404px] border border-neutral300
          rounded-2xl bg-white shadow-lg"
        >
          <div className="flex w-full justify-between py-4 px-6 border-b border-neutral300">
            <p className="mobileTextL1Default text-neutral900">Add Balance</p>
            <img
              src={crossDefault}
              alt="cross icon"
              className="cursor-pointer"
              onClick={() => setShowAeropayModule(!showAeropayModule)}
              onMouseOver={(e) => (e.currentTarget.src = crossActive)}
              onMouseOut={(e) => (e.currentTarget.src = crossDefault)}
            />
          </div>

          <div className="flex flex-col items-center p-6">
            <Aerocard name={user.name} date={formatDate(user.createDate)} />
            {/* Amounts buttons */}
            <div className="mt-10 flex gap-2.5 w-full">
              {aerocardAmounts.map((amount, id) => (
                <button
                  key={id}
                  className={
                    activeAmount === amount.amount
                      ? "brandDefault rounded-xl px-4 py-2 group mobileTextL1Default w-full hover:brandHover"
                      : "bg-brandLight rounded-xl px-4 py-2 group mobileTextL1Default w-full hover:brandHover"
                  }
                  onClick={() => setActiveAmount(amount.amount)}
                >
                  <p
                    className={
                      activeAmount === amount.amount
                        ? "text-neutral100"
                        : "gradientText group-hover:text-neutral100"
                    }
                  >
                    {amount.amount}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Add points button */}
          <button
            className={`${loading ? 'disabled illustrationBg cursor-default' : 'brandDefault hover:shadow-lg'}
              py-4 px-6 rounded-2xl mobileTextL1Default flex justify-center gap-2 w-[calc(100%-40px)] mx-auto`}
            onClick={() => !!!loading && addPoints(activeAmount)}
          >
            <img src={aeroPay3} alt="aeropay logo" />
            <p className="text-neutral0">Add Points</p>
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
