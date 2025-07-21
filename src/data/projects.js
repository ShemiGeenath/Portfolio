// data/projects.js
import HigherSCl from '../assets/2.jpg'
import ToDo from '../assets/3.jpg'
import GoOut from '../assets/4.png'
import Car from '../assets/5.png'
import Gold from '../assets/6.png'
import Cool from '../assets/7.jpg'

export const projects = [
  {
    id: 1,
    title: "Higher-Education",
    description: "A full-featured web application for managing operations in Higher Educational Institute and colleges. Built with the MERN stack (MongoDB, Express.js, React, Node.js), this system helps streamline academic administration, including student data, faculty management, payments, attendance tracking, reporting, and more. Genarate a QR forr each student for easily identify",
    technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind CSS","qrcode.react","html5-qrcode"],
    github: "https://github.com/ShemiGeenath/Higher-Education",
    demo: null,
    image: HigherSCl
  },
  {
    id: 2,
    title: "To-Do List",
    description: "A full-featured task management application with user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind CSS"],
    github: "https://github.com/ShemiGeenath/To_Do_List",
    demo: null,
    image: ToDo
  },
  {
    id: 3,
    title: "GoOut",
    description: "Independently developed a Online Travel Marketplace using the MERN stack and Tailwind CSS. An Online Travel Marketplace for Renting Travel Gear, Booking Vehicles, Packagers and Adventure Services in Sri Lanka.",
    technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind CSS", "Google Maps API"],
    github: "https://github.com/ShemiGeenath/GoOut",
    demo: null,
    image: GoOut
  },
  {
    id: 4,
    title: "LUXE-AUTO",
    description: "Automobile showcase website with vehicle catalog and inquiry system.",
    technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind CSS"],
    github: "https://github.com/ShemiGeenath/LUXE-AUTO",
    demo: null,
    image: Car
  },
  {
    id: 5,
    title: "New-Sun-Gold-House",
    description: "E-commerce platform for gold jewelry with shopping cart functionality and booking for consultation, calculate gold rate, Order Tracking System ",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ShemiGeenath/New-Sun-Gold-House",
    demo: null,
    image: Gold
  },
   {
    id: 6,
    title: "COOLSPOT POS System",
    description: "A simple Point of Sale system for COOLSPOT with JAVA using NetBeans (Print a Bill also).",
    technologies: ["JAVA"],
    github: "https://github.com/ShemiGeenath/COOLSPOT_POS",
    demo: null,
    image: Cool
  }
];