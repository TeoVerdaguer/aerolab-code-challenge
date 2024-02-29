const WalkthroughCard = ({ id, img, alt, icon, title, text }) => {
  return (
    <div className="border border-neutral300 bg-white/70 mx-6 mb-6 rounded-[32px] p-3">
      <div className="border border-neutral300 rounded-[24px]">
        <img src={img} alt={alt} className="illustrationBg rounded-t-[24px]" />
        <div className="bg-white rounded-b-[24px] border-t border-neutral300
        pt-4 pb-6 px-6">
          <div className="flex gap-2 items-center">
            <div className="bg-brandLight p-[7px] rounded-lg">
              <img src={icon} alt={title} width={26} height={26}/>
            </div>
            <h2 className="gradientText mobileTitleL3Default">{title}</h2>
          </div>
          <p className="mt-3 mobileTextL1Default text-neutral600">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default WalkthroughCard;
