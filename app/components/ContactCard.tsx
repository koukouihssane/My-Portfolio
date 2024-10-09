import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

const ContactCard = () => {
  return (
    <Section className="flex flex-col flex-start items-start gap-4">
      <div className="p-4 flex-1 w-full">
        <p className="text-primary text-xl gap-2 pb-10 font-semibold">
          I&apos;d love to collaborate! Feel free to reach out anytime.
        </p>
        <div className="gap-2 flex-col  flex md:grid grid-cols-2 justify-evenly">
          <Link href="mailto:ihssane_koukou@outlook.com">
            <Contact
              name="Outlook"
              image="/avatar.png"
              mediumImage="/outlook.png"
              description="ihssane_koukou@outlook.com"
            />
          </Link>
          <Link href="https://wa.me/+212675456170">
            <Contact
              name="Whatsapp"
              image="/avatar.png"
              mediumImage="/whatsapp.webp"
              description="(+212) 675 456 170"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ihssane-koukou">
            <Contact
              name="Linkedin"
              image="/avatar.png"
              mediumImage="/linkedin.png"
              description="ihssane-koukou"
            />
          </Link>
          {/* <Link href="https://www.instagram.com/koukouihssane/">
            <Contact
              name="Instagram"
              image="/avatar.png"
              mediumImage="/Instagram.png"
              description="@koukouihssane"
            />
          </Link> */}
        </div>
      </div>
    </Section>
  );
};

const Contact = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3  flex items-center gap-4 hover:bg-accent transition-colors group">
      <div className="relative">
        <Image
          src={props.image}
          height={500}
          width={500}
          alt={props.name}
          className="w-10 h-10 rounded-full object-contain"
        />
        <Image
          src={props.mediumImage}
          height={500}
          width={500}
          alt={props.name}
          className="w-4 h-4 absolute -bottom-1 -right-0 rounded-full object-contain"
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-md font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};

export default ContactCard;
