"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  UsersRound,
  ChevronRight,
  Circle,
  ArrowRight,
  Github,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const TreeNode = ({ title, content }) => (
  <motion.div
    className="font-mono text-gray-800"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center">
      <ChevronRight className="mr-2 w-4 h-4" />
      <span className="font-semibold">{title}</span>
    </div>
    <div className="ml-4 flex">
      <div className="border-l-2 border-white mr-2" />
      <div className="ml-2 w-full">{content}</div>
    </div>
  </motion.div>
);

const ProjectCard = ({ name, description, githubLink, technologies }) => (
  <motion.div
    className="mb-8 font-mono"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <div className="ml-4 space-y-2">
      <div className="flex items-start">
        <span className="mr-2">*</span>
        <span>Description</span>
      </div>
      <div className="flex items-start ml-4">
        <ArrowRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
        <TypedContent text={description} speed={85} />
      </div>

      <div className="flex items-center">
        <span className="mr-2">*</span>
        <Github className="w-4 h-4 mr-2" />
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {githubLink}
        </a>
      </div>

      <div className="flex items-start">
        <span className="mr-2">*</span>
        <span>Technologies</span>
      </div>
      <div className="ml-4">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-2">*</span>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const TypedContent = ({ text, speed = 50 }) => (
  <TypeAnimation sequence={[text]} wrapper="p" speed={speed} cursor={false} />
);

const Terminal = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sections = {
    intro: {
      title: "Introduction",
      content: (
        <div className="space-y-6">
          {/* Introduction Part */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <User className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold">Hello</h2>
            </div>
            <TypedContent
              text="My name is Kyle Nguyen, I am Senior CS student at CSUF
            . I have been passionating in coding since I was in highschool. My specialization is developing Full
            Stack Web Application. Whether it's developing user-friendly interfaces application or
            implementing optimal solutions, I am dedicated to contribute my skills to make a meaningful
            impact in the tech world."
              speed={95}
            />
          </div>

          {/* Skills Part */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Software Development</h3>
            </div>
            <TypedContent
              text="I have knowledge in programming languages for embedded
            projects(Python and C++) and web application (JS, TS). I also have experience in web
            frameworks (svelte, nextjs and react)."
              speed={85}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-2 rounded-full">
                <UsersRound className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold">Communication</h3>
            </div>
            <TypedContent
              text="I have led a team of 5 to design a database schemas for a project that helps user to find the most
            ideal traveling spot. Effective communication is the foundation of my professional
            relationships."
              speed={85}
            />
          </div>
        </div>
      ),
    },

    projects: {
      title: "Projects",
      content: (
        <div className="space-y-6 overflow-y-auto max-h-[500px] pr-4">
          <ProjectCard
            name="Math Nest Dictionary"
            description="I developed a web application that help student quickly look up math formulas with friendly and simple UI."
            githubLink="https://github.com/kylenguyen-cs30/Math-Nest"
            technologies={["NextJS", "SQLite"]}
          />
          <ProjectCard
            name="Tic Tac Toe"
            description="Tic Tac Toe is a web application which is serving as a stepping stool for machine learning AI Development. Tic Tac Toe have two player, one is user and the other is AI. User can pick between two modes 'PVP' and 'AI'."
            githubLink="https://github.com/kylenguyen-cs30/tictactoe-ml"
            technologies={["Typescript", "NextJS", "Machine Learning"]}
          />
          <ProjectCard
            name="Cau Chu"
            description="A simple fast web application that deliver user experience and information about their pets and provide a safe place for pet owner can safely find their pet a new home."
            githubLink="https://github.com/kylenguyen-cs30/cau-chu"
            technologies={["NextJS", "Flask", "SQLite"]}
          />
          <ProjectCard
            name="Parfummeler"
            description="Led a team of 3 members to develop a personalized e-commerce platform that connect users through perfumes. User's recommendation is more accurate than since they are asked with a set of question which are created by experts"
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
    <div className="min-h-screen bg-[#F1F0E8] p-5 flex flex-col items-center justify-center space-y-4">
      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-md ${
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
          className={`px-4 py-2 rounded-md ${
            activeSection === "projects"
              ? "bg-[#89A8B2] text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </motion.button>
      </div>

      {/* Terminal Window */}
      <motion.div
        className="bg-[#89A8B2] p-6 rounded-lg shadow-lg w-full max-w-3xl"
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
          className="flex space-x-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Circle className="w-3 h-3 text-red-500 fill-red-500" />
          <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <Circle className="w-3 h-3 text-green-500 fill-green-500" />
        </motion.div>

        <div className="space-y-6">
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
