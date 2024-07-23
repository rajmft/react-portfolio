import project1 from "../assets/projects/project-1-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project6.jpg";
import project7 from "../assets/projects/project7.png";


export const INTRO = `I am a dedicated software developer with a strong passion for creating comprehensive and innovative applications.
 As a recent graduate, I am enthusiastic about embarking on my professional journey and contributing meaningfully to the industry. 
 My educational background and internship experiences have equipped me with proficiency in front-end technologies such as React, Tailwind, 
 HTML, and CSS, as well as back-end technologies including MySQL, Java, and various other programming languages.`;

export const ABOUT_TEXT = `I am a passionate and driven software developer with a strong 
foundation in both front-end and back-end technologies. Recently graduated, I am excited to apply my skills and 
knowledge to real-world projects and make a meaningful impact in the tech industry. I particularly enjoy exploring and utilizing 
emerging technologies that are not yet widespread. I believe that new tech offers significant opportunities for growth and 
innovation. My enthusiasm for staying at the frontlines of technological advancements drives me to continuously learn and apply new 
tools and methodologies in my work. I also have a keen 
 interest in game development, which fuels my creativity and problem-solving skills. My objective is to leverage my skills across different 
 areas of computer science, enabling me to approach problems from unique angles and find creative solutions `;

export const EXPERIENCES = [
  {
    year: "August 2023 - May 2024",
    role: "Lab Assistant",
    company: " University of North Carolina at Greenbsoro",
    description: `Demonstrated exceptional organizational and teaching skills as a Lab Assistant for Introduction to Computer Science, responsible 
                    for grading lab work and aiding 40 students.`,
    technologies: ["Java", "Apache NetBeans"],
  },
  {
    year: "January 2023 - December 2023",
    role: " Computer Science Tutor",
    company: "University of North Carolina at Greensboro",
    description: `Taught and assisted fellow peers in learning difficult material within Computer Organization and Assembly Language, Computer 
Science Theory One, Intro to Computer Science and Elementary Data Structures and Algorithms.`,
    technologies: ["Java", "C", "C#", "x86 Assembly", "VirtualBox", "Git"],
  },
  {
    year: "May 2023 - August 2023",
    role: " Intern",
    company: "The Thread Exchange",
    description: `Executed precise coding in Visual Basic for Application to enhance inventory management efficiency for over 10,000 products in 
Excel spreadsheets.`,
    technologies: ["Visual Basic", "Excel","Microsoft Access"],
  },
];

export const PROJECTS = [
  {
    title: "IndieDev : Social Media Site",
    image: project1,
    description:
      "A fully functional social media site with features like posting, liking and commenting, adding projects to a personal portfolio, and messaging other users.",
    technologies: ["HTML", "CSS", "Java", "MySQL", "SpringBoot", "thymeleaf"],
  },
  {
    title: "Entities of The Void : Multiplayer Video Game",
    image: project2,
    description:
      "A 3D multiplayer horror game set in space. It showcases lobbies, character selection, wave based combat, and stressful environmental stimuli. ",
    technologies: ["C#", "Unity3D", "UnityVersionControl", "GitLab"],
  },
  {
    title: "Virtual Reality Shooting Range",
    image: project3,
    description:
      "A virtual reality shooting range in which the player can fire from two weapons, an assault rifle and a pistol, each featuring its own unique reloading mechanics",
    technologies: ["C#", "MetaQuest", "Unity3D"],
  },
  {
    title: "Web Application for Vaccine and Patient Management",
    image: project6,
    description:
      "A web application in which the user can manage the large datasets for patient and vaccine entries. ",
    technologies: ["HTML", "CSS", "PHP", "Javascript", "mySQL"],
  },
  {
    title: "Digital Image Processing : Filtering and Denoising",
    image: project7,
    description:
      "A series of programs that can alter and highlight different aspects of a RAW image. ",
    technologies: ["python", "PyCharm"],
  },
  {
    title: "Website for a Retro Arcade",
    image: project4,
    description:
    "A web application developed for a fictional arcade company, featuring multiple tabs and a sleek design.",
    technologies: ["CSS", "HTML"],
  },
];

export const CONTACT = {
  email: "mftidball@gmail.com",
};
