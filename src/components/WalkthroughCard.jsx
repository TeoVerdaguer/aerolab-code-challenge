const WalkthroughCard = ({ id, img, alt, icon, title, text }) => {
  return (
    <div className={`border border-neutral300 bg-white mx-6 lg:mx-2 mb-6 p-3 
      rounded-[32px] flex flex-col max-w-80 2xl:max-w-[532px] 2xl:h-[676px]
      2xl:w-[532px] 2xl:mt-[-80px]
      ${id === 1 && '2xl:-relative-3 2xl:-rotate-3 2xl:-mr-20 2xl:left-12'}
      ${id === 2 && '2xl:relative 2xl:left-auto 2xl:right-auto 2xl:-top-10'}
      ${id === 3 && '2xl:relative 2xl:rotate-3 2xl:right-12'}
      `}>
      <div className="border border-neutral300 rounded-[24px] h-full flex
        flex-col justify-between">
        <img
          src={img}
          alt={alt}
          className="illustrationBg object-contain rounded-t-[24px] w-full h-full"
        />
        <div
          className="bg-white rounded-b-[24px] border-t border-neutral300
            pt-4 pb-6 px-6"
        >
          <div className="flex gap-2 items-center">
            <div className="bg-brandLight p-[7px] rounded-lg">
              <img src={icon} alt={title} width={26} height={26} />
            </div>
            <h2 className="gradientText mobileTitleL3Default">{title}</h2>
          </div>
          <p className="mt-3 mobileTextL1Default text-neutral600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default WalkthroughCard;