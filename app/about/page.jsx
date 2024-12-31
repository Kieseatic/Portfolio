"use client";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
// Use these imports instead of importing from "@/node_modules/react-icons/fa"
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineRobot } from "react-icons/ai";

import { FaReact, FaNodeJs, FaJava, FaPython,FaAws, FaFlask} from "react-icons/fa"; 
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiOpenai,
} from "react-icons/si";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


// about data (unchanged)
const about = {
  title: "About me",
  description:
    "Driven by curiosity and perseverance, I am passionate about developing intuitive software that brings value to the world. I believe in the power of technology to bridge gaps, spark positive change, and empower users to achieve their goals.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Harsh Dugar",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 226 883 2296",
    },
    {
      fieldName: "Email",
      fieldValue: "harshdugar1234@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Toronto, Ontario, Canada",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Driven by curiosity and perseverance, I'm a dedicated software developer who thrives on turning innovative ideas into real-world solutions. From crafting intuitive interfaces to architecting robust systems, I believe in the power of technology to empower users and spark positive change. Let’s innovate together—shaping the future, one line of code at a time.",
    skillList: [
      { icon: <FaJava />, name: "Java", proficiency: 80 },
      { icon: <FaPython />, name: "Python", proficiency: 70 },
      { icon: <SiOpenai />, name: "OpenAI", proficiency: 65 },
      { icon: <GiArtificialIntelligence />, name: "AI", proficiency: 75 },
      { icon: <FaAws />, name: "AWS", proficiency: 60 },
      { icon: <FaFlask />, name: "Flask", proficiency: 50 },
      { icon: <FaReact />, name: "React.js", proficiency: 90 },
      { icon: <SiNextdotjs />, name: "Next.js", proficiency: 85 },
      { icon: <SiTailwindcss />, name: "TailwindCSS", proficiency: 80 },
      { icon: <FaNodeJs />, name: "Node.js", proficiency: 75 },
      { icon: <SiExpress />, name: "Express.js", proficiency: 70 },
      { icon: <SiPostgresql />, name: "PostgreSQL", proficiency: 60 },
    ]
    ,
};
// experience data (unchanged)
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description:
    "Proficient in frontend and backend technologies, working effectively with cross-functional teams and stakeholders.",
  items: [
    {
      position: "Full Stack Development Intern at Koralbyte Technologies",
      duration: "Dec 2024 - April 2025",
      description: "Toronto, Ontario, Canada",
    },
    {
      position: "IBM Z Student Ambassador",
      duration: "Oct 2024 - April 2025",
      description: "Toronto, Ontario, Canada",
    },
  ],
};

// education data (unchanged)
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Solid academic foundation in computer science, enhanced by specialized certifications.",
  items: [
    {
      institution: "Seneca Polytechnic",
      degree: "Advanced Diploma in Computer Programming and Analysis",
      duration: "Jan 2023 - Dec 2025",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px] xl:px-[30px] xl:h-[582px]"
        >
      <TabsList className="flex flex-col items-start w-full max-w-[200px] xl:mr-[40px] gap-6">
  <TabsTrigger
    value="about"
    className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-white bg-secondary rounded-xl hover:bg-accent hover:text-black transition-all flex-none"
  >
    About
  </TabsTrigger>
  <TabsTrigger
    value="skills"
    className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-white bg-secondary rounded-xl hover:bg-accent hover:text-black transition-all flex-none"
  >
    Skills
  </TabsTrigger>
  <TabsTrigger
    value="experience"
    className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-white bg-secondary rounded-xl hover:bg-accent hover:text-black transition-all flex-none"
  >
    Experience
  </TabsTrigger>
  <TabsTrigger
    value="education"
    className="w-full min-h-[60px] flex items-center justify-center text-left text-lg font-medium text-white bg-secondary rounded-xl hover:bg-accent hover:text-black transition-all flex-none"
  >
    Education
  </TabsTrigger>
</TabsList>





          {/* content */}
          <div className="w-full min-h-[25vh]">
  {/* About Tab */}
  <TabsContent value="about" className="w-full">
    <div className="pt-8">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex flex-col gap-2">
          <h3 className="h3">{about.title}</h3>
          <p className="p">{about.description}</p>
        </div>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {about.info.map((item, index) => (
              <li
                key={index}
                className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
              >
                <span className="text-accent uppercase">{item.fieldName}</span>
                <h3 className="text-base uppercase text-white/80">
                  {item.fieldValue}
                </h3>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </div>
  </TabsContent>

  {/* Experience Tab */}
  <TabsContent value="experience" className="w-full">
    <div className="pt-8">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex flex-col gap-2">
          <h4 className="h3">{experience.title}</h4>
          <p className="p">{experience.description}</p>
        </div>
        <ul className="flex flex-col gap-6">
          {experience.items.map((item, index) => (
            <li
              key={index}
              className="relative bg-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-[800px]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {item.position}
                  </h4>
                  <span className="text-sm text-white/60">{item.duration}</span>
                </div>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </TabsContent>

  {/* Skills Tab */}
  <TabsContent value="skills" className="w-full">
    <div className="pt-8">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex flex-col gap-2">
          <h3 className="h3">{skills.title}</h3>
          <p className="p">{skills.description}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
          {skills.skillList.map((skill, index) => (
            <li
              key={index}
              className="relative group w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative z-10 text-5xl group-hover:text-accent transition-all duration-300">
                {skill.icon}
              </div>
              <p className="text-sm mt-2 text-white/80 group-hover:text-white transition-all duration-300">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </TabsContent>

  {/* Education Tab */}
  <TabsContent value="education" className="w-full">
    <div className="pt-8">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <div className="flex flex-col gap-2">
          <h3 className="h3">{education.title}</h3>
          <p className="p">{education.description}</p>
        </div>
        <ul className="flex flex-col gap-6">
          {education.items.map((item, index) => (
            <li
              key={index}
              className="relative bg-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold text-white">
                  {item.institution}
                </h4>
                <span className="text-sm text-white/60">{item.duration}</span>
                <p className="text-sm text-white/80">{item.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </TabsContent>
</div>

        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
