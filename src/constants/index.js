import {
    nextjs,
    supabase,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    ecommerce,
    tiktak,
    landingPage,
    vercel,
    paolo_img,
    luca_img
  } from "../assets";
  
import cisl from "../assets/CISL.svg"
import fidia from "../assets/fidia.png"

  export const navLinks = [
  { id: "about", title: "about", type: "section" },
  { id: "experience", title: "experience", type: "section" },
  { id: "works", title: "works", type: "section" },
  { id: "testimonials", title: "testimonials", type: "section" },
  { id: "contact", title: "contact", type: "section" },
  { id: "motion-graphics", title: "motion-graphics", type: "route" }
];

  
const services = [
  {
    id: "posting",
    icon: "IoPeopleSharp",
  },
  {
    id: "ads",
    icon: "FaHeadset",
  },
  {
    id: "landing",
    icon: "FaMoneyCheck",
  },
  {
    id: "seo",
    icon: "FaMoneyBillTrendUp",
  },
];

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "adobe",
      icon: "https://cdn-icons-png.flaticon.com/512/5436/5436922.png",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Postgresql",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png",
    },
    {
      name: "Canva",
    icon: "https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "vercel",
      icon: vercel
    },
    {
      name: "nextjs",
      icon: nextjs
    }
  ];
  
  const experiences = [
    {
      title: "Motion Graphics Introductory Video",
      company_name: "Fidia",
      icon: fidia,
      iconBg: "#FFFFFF",
      date: "Mar 2025 - Apr 2025",
      points: [
        "Started by analyzing the project and its goals in Photoshop",
        "Worked on After Effects to develop the video",
        "Collaborating and communicating with the client to adjust and perfect the final result",
        "Finalized the project",
      ],
    },
    {
      title: "After Effects Intro Animation",
      company_name: "FIT-CISL",
      icon: cisl,
      iconBg: "#FFFFFF",
      date: "Mar 2025 - May 2025",
      points: [
        "Talked about the project with the client deeply on Fiverr",
        "Organized the material to start working on Photoshop",
        "Collaborated with another partner to ensure client satisfaction at its fullest",
        "Ended the project and ensured predetermined goals were all met",
      ],
    },
    /*{
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I remained impressed on how much the AFG Media Team delivered on their promises.",
      name: "Paolo",
      designation: "CFO",
      company: "Graphic Designer",
      image: paolo_img,
    },
    {
      testimonial:
        "Great talented team that delivered on everything they have promised. Fast, Beatiful and Goal-Oriented.",
      name: "Luca",
      designation: "COO",
      company: "Videos Editor",
      image: luca_img,
    }
  ];
  
  const projects = [
    {
      name: "E-commerce",
      description:
        "Web application where users can buy phones, tablets or laptops, using stripe to ensure safe payments, and graphql for the connection with the server.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "stripeapi",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/aNdrefLo2008/e-commerce",
    },
    {
      name: "TikTak",
      description:
        "Web application that enables users to share photos or videos, like and comment them.",
      tags: [
        {
          name: "zustand",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      ],
      image: tiktak,
      source_code_link: "https://github.com/aNdrefLo2008/tiktak",
    },
    {
      name: "Beatiful Design",
      description:
        "Landing page designed in figma and created in react, created to showcase the potential of tailwindcss.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "figma",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: landingPage,
      source_code_link: "https://github.com/aNdrefLo2008/beatiful-design",
    },
  ];
  
export { services, technologies, experiences, testimonials, projects };