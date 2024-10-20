import { githubDefault, githubActive } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="mx-5 mt-20">
      <a 
        className="flex items-center justify-center h-[120px] gap-2 group"
        href="https://github.com/TeoVerdaguer/aerolab-code-challenge"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubDefault}
          alt="github logo"
          height={32}
          width={32}
          className="group-hover:hidden"
        />
        <img
          src={githubActive}
          alt="github logo"
          height={32}
          width={32}
          className="hidden group-hover:block"
        />
        <p className="text-neutral600 font-semibold leading-[150%]">View this repository</p>
      </a>
    </footer>
  )
}

export default Footer;
