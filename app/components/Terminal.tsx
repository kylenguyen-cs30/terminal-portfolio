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
  FileDown,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const TreeNode = ({ title, content }) => (
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

//NOTE: Project Card
const ProjectCard = ({ name, description, githubLink, technologies }) => (
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

const TypedContent = ({ text, speed = 50, className = "" }) => (
  <TypeAnimation
    sequence={[text]}
    wrapper="p"
    speed={speed}
    cursor={false}
    className={`text-sm md:text-base leading-relaxed ${className}`}
  />
);

const Terminal = () => {
  const [activeSection, setActiveSection] = useState("intro");

  const handleResumeClick = () => {
    window.open("/resume/Resume.pdf", "_blank");
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
              text="I am a Software Engineer.I am studying Computer Science at Californiate State University, Fullerton
            . I have been coding since I was in highschool especially web development and mobile application. 
              Thank you for reading!❤️"
              speed={95}
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
              AWS EC2 and Cloud Computing technologies for fast shipping applicaiton ."
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
        </div>
      ),
    },

    projects: {
      title: "Projects",
      content: (
        <div className="space-y-4 overflow-y-auto md:max-h-[70vh] sm:max-h-[85vh] pr-2">
          <ProjectCard
            name="Math Nest Dictionary"
            description="I developed a web application that help student quickly look up math formulas with friendly and simple UI."
            githubLink="https://github.com/kylenguyen-cs30/Math-Nest"
            technologies={["NextJS", "SQLite"]}
          />
          <ProjectCard
            name="Tic Tac Toe"
            description="Tic Tac Toe is a web application which is serving as a stepping stool for machine learning AI Development. Tic
            Tac Toe have two player, one is user and the other is AI. User can pick between two modes 'PVP' and 'AI'."
            githubLink="https://github.com/kylenguyen-cs30/tictactoe-ml"
            technologies={["Typescript", "NextJS", "Machine Learning"]}
          />
          <ProjectCard
            name="Cau Chu"
            description="A simple fast web application that deliver user experience and information about their pets and provide a safe place
            for pet owner can safely find their pet a new home."
            githubLink="https://github.com/kylenguyen-cs30/cau-chu"
            technologies={["NextJS", "Flask", "SQLite"]}
          />
          <ProjectCard
            name="Parfummeler"
            description="Led a team of 3 members to develop a personalized e-commerce platform that connect users through perfumes. User's 
            recommendation is more accurate than since they are asked with a set of question which are created by experts"
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
            Introduction
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
