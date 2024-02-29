import { heroResponsive } from "../assets/illustrations";
import WalkthroughCard from "../components/WalkthroughCard";
import { walkthroughCards } from "../constants";

const Walkthrough = () => {
  return (
    <section
      id="walkthrough"
      className="w-full flex flex-col items-center pb-2 illustrationBg overflow-x-clip"
    >
      <img
        src={heroResponsive}
        alt="person with vr headset"
        width={580}
        className="max-w-[897px] mt-[-120px]"
      />
      {walkthroughCards.map((card, id) => (
        <WalkthroughCard key={id} {...card} />
      ))
      }
    </section>
  );
};

export default Walkthrough;
