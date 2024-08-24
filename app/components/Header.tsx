import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMicrosoftoutlook } from "react-icons/si";
import Section from "./Section";

const Header = () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-center">
        <h1 className="text-lg font-bold text-primary uppercase">ikoukou</h1>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-4">
          <Link href="https://github.com/koukouihssane">
            <FaGithub
              size={22}
              className="text-foreground hover:text-primary"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ihssane-koukou/">
            <FaLinkedin
              size={22}
              className="text-foreground hover:text-primary"
            />
          </Link>
          <Link href="mailto:ihssane_koukou@outlook.com">
            <SiMicrosoftoutlook
              size={22}
              className="text-foreground hover:text-primary"
            />
          </Link>
        </ul>
      </Section>
    </header>
  );
};

export default Header;
