import React from "react";

import { LuBriefcase, LuFastForward, LuGamepad2, LuGraduationCap } from "react-icons/lu";
import { RiSeedlingLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";

import placeholderImg from "@/public/placeholder.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student at Dalhousie",
    company: "Dalhousie University",
    location: "Halifax, Nova Scotia",
    description:
      "I started my computer science journey as a student at Dalhousie University! \
      Here, I learned the fundamentals of programming with Java through courses such as Data Structures and Algorithms, \
      Computer Networking, Distributed Systems, and Operating Systems. My personal favourite course was Game Development 🎮",
    icon: React.createElement(LuGraduationCap),
    date: "Sep. 2020 - May. 2024 (Expected)",
  },
  {
    title: "Coding Instructor",
    company: "Code Ninjas",
    location: "Halifax, Nova Scotia",
    description:
      "This was my first programming job, where I taught kids how to code through building games! I reinforced my own understanding of programming \
      fundmanetals by teaching bright, young kids concepts like variables, control flow, and OOP. Games were made with JavaScript, Roblox Studio, and Unity.",
    icon: React.createElement(LuGamepad2),
    date: "Aug. 2021 - Aug. 2022",
  },
  {
    title: "Software Development Intern",
    company: "Quest Software",
    location: "Halifax, Nova Scotia",
    description:
      "I had my first software internship at Quest Software, where I got a taste of what the industry truly looked like. I learned how to apply the software development \
      lifecycle, following AGILE and SCRUM principles. I primarily worked on internal software, giving me freedom to learn and explore a plethora of code bases!",
    icon: React.createElement(RiSeedlingLine),
    date: "Sep. 2022 - Dec. 2022",
  },
  {
    title: "Associate Software Developer",
    company: "Avanade",
    location: "Halifax, Nova Scotia",
    description:
      "Avanade was my second internship and allowed me to connect with a vast amount of diverse individuals. There wasn't a single day where I didn't meet someone new! \
      Here, I saw the power in numbers and developed my professional communication abilities. \
      I was able to collaborate a client and lead my team of interns in an effective manner!",
    icon: React.createElement(GoPeople),
    date: "May. 2023 - Aug. 2023",
  },
  {
    title: "Marking Teaching Assistant",
    company: "Dalhousie University",
    location: "Halifax, Nova Scotia",
    description:
      "Now that I had the ball rolling, I didn't want to stop. I decided to take on a teaching assistant role. I enjoyed the teaching aspect of Code Ninjas so I figured I would \
      become a TA for a course I loved! This lead me to a teaching assistantship in Data Structures and Algorithms with my favourite prof, Dr. Sampalli, or as we know him, Srini!",
    icon: React.createElement(FiBookOpen),
    date: "Sep. 2023 - Dec. 2023",
  },
  {
    title: "Backend Web3 Development Intern",
    company: "Koii Network",
    location: "Halifax, Nova Scotia",
    description:
      "Eager to get deeper in software development, I sought out a local startup, leading me to Koii Network. Here, I work with a tight knit group of dedicated individuals \
      who show me the power of passion in software development. I've been learning a lot about the MERN stack, Web3, and Crypto and I'm excited to continue my journey!",
    icon: React.createElement(LuBriefcase),
    date: "Feb. 2024 - Current",
  },
  {
    title: "Chief Technology Officer",
    company: "DataSwap",
    location: "Halifax, Nova Scotia",
    description:
      "On the side, I've been working to develop another promising startup called DataSwap! I'm learning what it takes to start a business, how to operate a software company, \
      and how to fully flesh out an idea. I'm always looking to learn and this is yet another great learning oppurtunity for me!",
    icon: React.createElement(LuFastForward),
    date: "Mar. 2024 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "PutMeOn",
    description:
      "PutMeOn is a full stack mobile application that allows friends to share music in an anonymous way. I created it for me and my friends \
      because we love to disocver and share new music!",
    tags: ["React Native", "JavaScript", "SpotifyAPI", "Firebase", "Expo"],
    imageUrl: placeholderImg,
  },
  {
    title: "Flight Visualization",
    description:
      "This was my final project for my Graphics course. It features a Cessna plane flying around a customizable, scenic environment with programatically generated mountains \
      and custom texture mapping for the surroundings!",
    tags: ["C", "OpenGL", "FreeGlut"],
    imageUrl: placeholderImg,
  },
  {
    title: "MalSalvo's Last Stand",
    description:
      "MalSalvo's Last Stand is an FPS, tower-defense game where you play as a mad scientist whose only goal is to take over the univerise and all alien planets! \
      I lead the development of MLS and had the help of 4 other developers as part of a project for my Game Development course.",
    tags: ["Unity", "C#", "Blender", "Git"],
    imageUrl: placeholderImg,
  },
  {
    title: "Hitmans Revenge",
    description:
      "This is a 2D platformer game about a hitman who is on a mission to avenge his dead cat. This game served as an introductory to learning Unity and was developed by \
      me and a couple friends!",
    tags: ["Unity", "C#", "Git",],
    imageUrl: placeholderImg,
  },
] as const;

export const skillsData = [
    "Java",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C#",
    "Kotlin",
    "HTML",
    "CSS",
    "Python",
    "Ruby",
    "C",
    "SQL",
    "TypeScript",
    "Spring Boot",
    "Rails",
    "Terraform",
    "OpenGL",
    "Unity Engine",
    "Firebase",
    "Docker"
] as const;