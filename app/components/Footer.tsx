import Section from "./Section";

const Footer = () => {
  return (
    <Section>
      <div className="h-10 mx-auto text-xs font-mono flex text-muted-foreground items-center justify-center ">
        © {new Date().getFullYear()}
        {" Ihssane's Portfolio"}
      </div>
    </Section>
  );
};

export default Footer;
