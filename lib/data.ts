import React from "react";

import { LuBriefcase, LuFastForward, LuGamepad2, LuGraduationCap } from "react-icons/lu";
import { RiSeedlingLine } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { FiBookOpen } from "react-icons/fi";

import placeholderImg from "@/public/placeholder.png";
import pmoImg from "@/public/pmo.png";
import mlsImg from "@/public/mls.png";
import flightImg from "@/public/flight.png";
import hitmanImg from "@/public/hitman.png";

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    company: "Dalhousie University",
    location: "Halifax, Nova Scotia",
    description:
      "I started my computer science journey as a student at Dalhousie University! \
      Here, I learned the fundamentals of programming with Java through courses such as Data Structures and Algorithms, \
      Computer Networking, Distributed Systems, and Operating Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep. 2020 - May. 2024 (Expected)",
  },
  {
    title: "Coding Instructor",
    company: "Code Ninjas",
    location: "Halifax, Nova Scotia",
    description:
      "This was my first programming job, where I taught kids how to code through building games! I reinforced my own understanding of programming \
      fundmanetals by teaching children JavaScript, Roblox Studio, and Unity.",
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
      "Avanade was my second internship and allowed me to connect with a vast amount of diverse people. There wasn't a single day where I didn't meet someone new! \
      Here, I saw the power in numbers and developed my professional communication abilities. \
      I was able to collaborate with a client and lead my team of interns in an effective manner!",
    icon: React.createElement(GoPeople),
    date: "May. 2023 - Aug. 2023",
  },
  {
    title: "Marking Teaching Assistant",
    company: "Dalhousie University",
    location: "Halifax, Nova Scotia",
    description:
      "To continue gaining experience, I decided to take on a teaching assistant role. I enjoyed the teaching aspect of Code Ninjas so I figured I would \
      become a TA for a course I loved! This lead me to a teaching assistantship in Data Structures and Algorithms.",
    icon: React.createElement(FiBookOpen),
    date: "Sep. 2023 - Dec. 2023",
  },
  {
    title: "Backend Web3 Development Intern",
    company: "Koii Network",
    location: "Halifax, Nova Scotia",
    description:
      "Eager to get deeper in software development, I sought out a local startup, leading me to Koii Network. Here, I work with a tight knit group of dedicated individuals \
      who show me the power of passion in software development. I've been learning a lot about the MERN stack, Web3, and Crypto!",
    icon: React.createElement(LuBriefcase),
    date: "Feb. 2024 - Current",
  },
  {
    title: "Co-founder & CTO",
    company: "P1nkfly",
    location: "Halifax, Nova Scotia",
    description:
      "Lately, I've been working to develop a promising startup called P1nkfly! I'm learning what it takes to start a business, how to operate a software company, \
      and how to fully flesh out an idea. I'm always looking to make an impact with my work, so hopefully P1nkfly allows me to do that!",
    icon: React.createElement(LuFastForward),
    date: "Mar. 2024 - Current",
  },
] as const;

export const projectsData = [
  {
    title: "PutMeOn",
    description:
      "PutMeOn is a full stack mobile app that allows users to share music in an anonymous way. I developed it to share music with my friends!",
    tags: ["React Native", "JavaScript", "SpotifyAPI", "Firebase", "Expo"],
    imageUrl: pmoImg,
    codeUrl: "https://github.com/mabrar02/PutMeOn",
    demoUrl: "https://www.youtube.com/watch?v=XuTZPBHkBVc",
  },
  {
    title: "MalSalvo's Last Stand",
    description:
      "MLS is an FPS, tower-defense game where a mad scientist tries to take over the universe! \
      I led the development of MLS as a project for my game development course.",
    tags: ["Unity", "C#", "Blender", "Git"],
    imageUrl: mlsImg,
    codeUrl: "https://github.com/mabrar02/MalSalvosLastStand",
    demoUrl: "https://mabrar02.itch.io/malsalvos-last-stand",
  },
  {
    title: "Flight Visualization",
    description:
      "This was my final project for my Graphics course. It features a Cessna plane flying around a customizable, scenic environment!",
    tags: ["C", "OpenGL", "FreeGlut"],
    imageUrl: flightImg,
    codeUrl: "https://github.com/mabrar02/OpenGL-FlightViewer-Visualization",
    demoUrl: "https://github.com/mabrar02/OpenGL-FlightViewer-Visualization",
  },
  {
    title: "Hitmans Revenge",
    description:
      "This is a 2D platformer game about a hitman who is on a mission to avenge his dead cat. This taught me Unity and was developed by \
      me and a couple friends!",
    tags: ["Unity", "C#", "Git",],
    imageUrl: hitmanImg,
    codeUrl: "https://github.com/mabrar02/HitmansRevengeGame",
    demoUrl: "https://gego144.itch.io/a-hitmans-mission-to-avenge-his-cat",
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
    "Git",
    "JUnit",
    "SpaCy",
    "Espresso",
    "Android Studio",
    "Expo",
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
    "Docker",

] as const;