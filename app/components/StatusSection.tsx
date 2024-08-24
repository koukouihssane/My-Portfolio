import { Card } from "@/components/ui/card";
import { Code, LucideIcon } from "lucide-react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiCplusplus,
  SiDocker,
  SiGit,
  SiLinux,
  SiNextdotjs,
  SiTailwindcss,
  SiVirtualbox,
} from "react-icons/si";
import Section from "./Section";

const StatusSection = () => {
  return (
    <Section className="flex max-md:flex-col items-center gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 ">
          <p className="text-muted-foreground text-lg  gap-2 pb-4">
            School Projects
          </p>
          <div className="flex flex-col gap-4">
            {PROJECTS.map((project, index) => (
              <Projects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
              ></Projects>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          {" "}
          <p className="text-muted-foreground text-lg pb-4">
            Education & Certificates
          </p>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((education, index) => (
              <Education
                key={index}
                institution={education.institution}
                title={education.title}
                duration={education.duration}
              ></Education>
            ))}
          </div>
        </Card>
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-muted-foreground text-lg gap-2">Skills</p>
          <div className="w-full p-2 gap-4 grid grid-cols-2 flex-1 ">
            {skills.map((skill, index) => {
              return (
                <ul
                  key={index}
                  className="flex items-center gap-2 text-2xl hover:text-primary transition-colors duration-300"
                >
                  <div>{skill.icon}</div>
                  <h3 className="text-xs font-semibold tracking-tight mb-2">
                    {skill.label}
                  </h3>
                </ul>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default StatusSection;

const Projects = (props: ProjectsProps) => {
  return (
    <div className="inline-flex items-start gap-4 hover:bg-accent/50 transition-colors rounded-sm p-1">
      <span className="bg-accent text-accent-foreground p-4 rounded-lg">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </div>
  );
};

const Education = (props: EducationProps) => {
  return (
    <div className="inline-flex justify-between items-center gap-4 hover:bg-accent/50 transition-colors rounded-sm p-1">
      <div>
        <p className="text-md font-semibold">{props.title}</p>
        <p className="text-sm text-secondary">{props.institution}</p>
      </div>
      <p className="text-sm text-muted-foreground">{props.duration}</p>
    </div>
  );
};

type ProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
};

type EducationProps = {
  institution: string;
  title: string;
  duration: string;
};

type AboutProps = {
  fieldName: string;
  fieldValue: string;
};

const PROJECTS: ProjectsProps[] = [
  {
    Logo: Code,
    title: "ft_transcendence",
    description:
      "This is an exciting project centered around creating a ping pong game. Within this game, players have the ability to chat, create profiles, and engage in online play. The front-end development is crafted using Next.js, providing a dynamic and user-friendly interface for seamless interactions. Meanwhile, the back-end is implemented with Nest.js, ensuring a robust and scalable foundation to manage server-side functionalities.",
  },
  {
    Logo: Code,
    title: "ft_irc",
    description:
      "I created my own IRC server in c++, fully compaitible with an official client.",
  },
  {
    Logo: Code,
    title: "Inception",
    description:
      "This project aims to broaden us knowledge of system administration by using Docker. I virtualized several Docker images, creating them in a new personal virtual machine.",
  },
  {
    Logo: Code,
    title: "Philosophers",
    description:
      "This project is about multithreading. It is a simulation of the dining philosophers problem. I learned a lot about threads and mutexes.",
  },
  {
    Logo: Code,
    title: "CPP Modules",
    description:
      "The C++ piscine provided an intensive introduction to the C++ programming language, covering object-oriented programming, data structures, and algorithmic problem-solving. it served as a solid foundation for my C++ development skills.",
  },
  {
    Logo: Code,
    title: "Cub3d",
    description:
      "This project is inspired by the world-famous Wolfenstein 3D game, which was the first FPS ever. The goal was to create a dynamic view inside a maze, using raycasting techniques. The project was implemented in C, using the MinilibX graphic library. The project was a great opportunity to learn about computer graphics and optimize rendering performance.",
  },
  {
    Logo: Code,
    title: "minishell",
    description:
      "This project is about creating a simple shell. This was my first real project in the Unix branch. I learned a lot about processes and file descriptors.",
  },
];

const EDUCATION: EducationProps[] = [
  {
    institution: "ibn batouta high school",
    title: "Baccalaureate degree in Mathematics",
    duration: "2020",
  },
  {
    institution: "1337 coding school (42 Network)",
    title: "Digital Technologies Architecture Student",
    duration: "2021 - Present",
  },
  {
    institution: "Meta",
    title: "Introduction to Front-end Development",
    duration: "2024",
  },
  {
    institution: "Meta",
    title: "Version control",
    duration: "2024",
  },
  {
    institution: "Meta",
    title: "Programming with Javascript",
    duration: "2024",
  },
  {
    institution: "Meta",
    title: "React Basics",
    duration: "2024",
  },
  {
    institution: "Meta",
    title: "HTML and CSS in depth",
    duration: "2024",
  },
  {
    institution: "Meta",
    title: "Advanced React",
    duration: "2024",
  },
];

const skills = [
  {
    icon: <FaHtml5 />,
    label: "HTML",
  },
  {
    icon: <FaCss3 />,
    label: "CSS",
  },
  {
    icon: <FaJs />,
    label: "JavaScript",
  },
  {
    icon: <SiCplusplus />,
    label: "C++",
  },
  {
    icon: <SiDocker />,
    label: "Docker",
  },
  {
    icon: <SiVirtualbox />,
    label: "VirtualBox",
  },
  {
    icon: <SiGit />,
    label: "Git",
  },
  {
    icon: <SiLinux />,
    label: "Linux",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
  },
  {
    icon: <SiNextdotjs />,
    label: "Next.js",
  },
  {
    icon: <FaReact />,
    label: "React",
  },
  {
    icon: <FaFigma />,
    label: "Figma",
  },
];
