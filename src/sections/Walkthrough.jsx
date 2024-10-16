import { heroResponsive } from "../assets/illustrations";
import WalkthroughCard from "../components/WalkthroughCard";
import { walkthroughCards } from "../constants";

const Walkthrough = () => {
  return (
    <section
      id="walkthrough"
      className="w-full flex flex-col items-center pb-2 sectionBg overflow-x-clip"
    >
      <img
        src={heroResponsive}
        alt="person with vr headset"
        width={580}
        className="max-w-[897px] mt-[-120px] lg:mt-[-320px] 2xl:hidden"
      />
      <div className="lg:flex 2xl:min-h-[528px]">
        {walkthroughCards.map((card, id) => (
          <WalkthroughCard key={id} {...card} />
        ))
        }
      </div>
    </section>
  );
};

export default Walkthrough;
