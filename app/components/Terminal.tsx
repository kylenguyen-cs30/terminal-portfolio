"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  UsersRound,
  ChevronRight,
  Circle,
  ArrowRight,
  Github,
  Link as LinkIcon,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Speed, GranularSpeed } from "../types/animations";

interface TreeNodeProps {
  title: string;
  content: React.ReactNode;
}
const TreeNode: React.FC<TreeNodeProps> = ({ title, content }) => (
  <motion.div
    className="sm:text-sm text-base md:text-lg  font-mono text-gray-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center ">
      <ChevronRight className="sm:mr-1 sm:w-3 sm:h-3 mr-2 w-4 h-4" />
      <span className="font-semibold">{title}</span>
    </div>
    <div className="sm:ml-2 ml-4 flex">
      <div className="sm:mr-1 border-l-2 border-[#E5E1DA] mr-2" />
      <div className="sm:ml-1 ml-2 w-full space-y-2">{content}</div>
    </div>
  </motion.div>
);

interface ProjectCardProps {
  name: string;
  description: string;
  githubLink: string;
  technologies: string[];
}

//NOTE: Project Card
const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  githubLink,
  technologies,
}) => (
  <motion.div
    className=" mb-6 md:mb-8 font-mono "
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h3 className="text-base md:text-lg font-bold mb-2">{name}</h3>
    <div className="ml-2 md:ml-4 space-y-2">
      <div className="flex items-start">
        <span className="mr-2">*</span>
        <span className="text-sm md:text-base">Description</span>
      </div>
      <div className="flex items-start ml-4">
        <ArrowRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
        <TypedContent text={description} speed={90} />
      </div>

      <div className="flex items-center">
        <span className="mr-2">*</span>
        <Github className="w-4 h-4 mr-2" />
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:text-xs md:text-base text-blue-600 hover:underline"
        >
          {githubLink}
        </a>
      </div>

      <div className="flex items-start">
        <span className="mr-2">*</span>
        <span className="text-sm md:text-base">Tech Stacks</span>
      </div>
      <div className="ml-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-2">*</span>
            <span className="text-sm md:text-base">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

interface TypedContentProps {
  text: string;
  speed?: Speed | GranularSpeed;
  className?: string;
}

const TypedContent: React.FC<TypedContentProps> = ({
  text,
  speed = 50 as Speed,
  className = "",
}) => (
  <TypeAnimation
    sequence={[text]}
    wrapper="p"
    speed={speed}
    cursor={false}
    className={`text-sm md:text-base leading-relaxed ${className}`}
  />
);

// Add type for the active section
type SectionKey = "intro" | "projects";

const Terminal: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("intro");

  const handleResumeClick = () => {
    window.open("/resume/Resume2.pdf", "_blank");
  };
  const sections = {
    intro: {
      title: "Introduction",
      content: (
        <div className="space-y-6">
          {/* Introduction Part */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <Image
                  src="/images/kyle2.png"
                  alt="Kyle Nguyen"
                  width={48}
                  height={48}
                  className=" rounded-full object-cover"
                />
              </div>
              <h2 className="sm:text-lg text-lg md:text-xl font-bold">
                Hello, my name is Kyle Nguyen
              </h2>
            </div>
            <TypedContent
              text="I am a Software Engineer. I am studying Computer Science at Californiate State University, Fullerton
            . I love building web app  and mobile application. 
              Thank you for reading!❤️"
              speed={90}
              className="leading-relaxed"
            />
          </div>

          {/* Skills Part */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <Code2 className="sm:w-5 sm:h-5 w-6 h-6" />
              </div>
              <h3 className="sm:text-base md:text-lg font-semibold">
                Software Development
              </h3>
            </div>
            <TypedContent
              text="I have knowledge in common programming languages for web development, I am also familiar with tools like Docker, Git, 
              AWS EC2 and Cloud Computing technologies for fast shipping application."
              speed={85}
              className="leading-relaxed"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <UsersRound className="sm:w-5 sm:h-5 w-6 h-6" />
              </div>
              <h3 className="sm:text-base text-lg font-semibold">
                Communication
              </h3>
            </div>
            <TypedContent
              text="I have led a team of 5 to design a database schemas for a project that helps user to find the most
            ideal traveling spot. Effective communication is the foundation of my professional
            relationships."
              speed={85}
              className="leading-relaxed"
            />
          </div>

          {/* new links section */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <LinkIcon className="sm:w-5 sm:h-5 w-6 h-6" />
              </div>
              <h3 className="sm:text-base text-lg font-semibold">My Links</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Github className="w-4 h-4 mr-2" />
                <a
                  href="https://github.com/kylenguyen-cs30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-sm md:text-base text-blue-600 hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
              {/* Add more social links here as needed */}
              {/* Example for LinkedIn */}
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48A1.56,1.56,0,1,1,8.15,6.92,1.57,1.57,0,0,1,6.59,8.48ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/hoanggng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:text-sm md:text-base text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    projects: {
      title: "Projects",
      content: (
        <div className="space-y-4 overflow-y-auto md:max-h-[70vh] sm:max-h-[85vh] pr-2">
          {/* Parfummelier Project  */}
          <ProjectCard
            name="Parfummeler"
            description="Led a team of 3 members to develop a personalized e-commerce platform that connect users through perfumes. User's 
            recommendation is more accurate than since they are asked with a set of questions which are created by experts."
            githubLink="https://github.com/kylenguyen-cs30/Parfummelier"
            technologies={[
              "NextJS",
              "Flask",
              "PostgreSQL",
              "MongoDB",
              "FastAPI",
              "Docker",
              "Microservice",
              "Kong",
            ]}
          />

          {/* Tic tac toe Project  */}
          <ProjectCard
            name="Tic Tac Toe"
            description="Tic Tac Toe is a web application which is serving as a stepping stool for machine learning AI Development. The AI can learn 
            from user's pattern."
            githubLink="https://github.com/kylenguyen-cs30/tictactoe-ml"
            technologies={["Typescript", "NextJS", "Machine Learning"]}
          />

          {/* Enterty Project  */}
          <ProjectCard
            name="Enterty"
            description="I created an iOS application designed to inspire users to discover new or old entertainment titles and provide an
            enjoyable and captivating experience. The app has helped millions of users explore over 10,000 different titles, with an average 
            user spending over 30 minutes each day revisiting old favorites and discovering new recommendations based on good ratings."
            githubLink="https://github.com/kylenguyen-cs30/Enterty"
            technologies={[
              "SwiftUI",
              "Swift",
              "PostgresSQL",
              "FastAPI",
              "Docker",
            ]}
          />

          {/* Clippy Project */}
          <ProjectCard
            name="Clippy"
            description="I created a desktop application that works multiple OS. Clippy help user to synchronize their Clipboard manager up to 10 devices. 
            The application is created with Mutli-Threading processes so Application is working smoothly without downtime upto 90%."
            githubLink="https://github.com/kylenguyen-cs30/Clippy"
            technologies={["C#", "Avalonia", "UDP", "Multi-Thread"]}
          />

          <ProjectCard
            name="Water Tracker"
            description="I also design an iOS/Android app that helps users tracking their Water intake in 7 days. Users can also change the target amount and weight of the body in order to calculate the correct amount. The application is written in React Native therefore the application can run multiple platform and the app use Expo Sqlite to store users' data on device to maintain fast UI rendering and high performance application on any platform."
            githubLink="https://github.com/kylenguyen-cs30/Water-Tracker"
            technologies={["React Native", "Expo Sqlite"]}
          />
        </div>
      ),
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl flex-col flex items-center space-y-4 py-2">
        {/* Navigation Buttons */}
        <div className="sm:text-sm flex space-x-4 ">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`sm:px-3 sm:py-1.5 px-4 py-2 rounded-md ${
              activeSection === "intro"
                ? "bg-[#89A8B2] text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setActiveSection("intro")}
          >
            Intro
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`sm:px-3 sm:py-1.5 px-4 py-2 rounded-md ${
              activeSection === "projects"
                ? "bg-[#89A8B2] text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:px-3 sm:py-1.5 px-4 py-2 rounded-md bg-white text-gray-800 flex items-center space-x-2"
            onClick={handleResumeClick}
          >
            <span>Resume</span>
          </motion.button>

          <motion.a
            href="mailto:hnguyen1193@csu.fullerton.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:px-3 sm:py-1.5 px-4 py-2 rounded-md bg-white text-gray-800 flex items-center space-x-2 cursor-pointer"
          >
            <span>Contact</span>
          </motion.a>
        </div>
      </div>

      {/* Terminal Window */}
      <motion.div
        className="sm:p-3 md:p-6 p-2 bg-[#89A8B2] rounded-lg shadow-lg w-full mx-auto max-w-4xl overflow-auto"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
      >
        <motion.div
          className="flex space-x-2 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Circle className="w-3 h-3 text-red-500 fill-red-500" />
          <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <Circle className="w-3 h-3 text-green-500 fill-green-500" />
        </motion.div>

        <div className="space-y-4">
          <TreeNode
            title={sections[activeSection].title}
            content={sections[activeSection].content}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Terminal;
