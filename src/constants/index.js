import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    PSKLogo,
    iDTechLogo,
    YMCA,
    cSharp,
    amiibo,
    audio,
    mapbox,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Javascript Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      name: "c#",
      icon: cSharp,
    }
  ];
  
  const experiences = [
    {
      title: "Unreal Engine Instructor",
      company_name: "iD Tech",
      icon: iDTechLogo,
      iconBg: "#383E56",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Instructed High School Students ages 14 - 17 how to design and develop games using Unreal Engine 5.",
        "Taught implementation of game mechanics through visual scripting, c++ and by using Unreal Engine's blueprint editor.",
        "Led a project-based class and helped debug mechanical errors and provided constructive criticism on the technical and aesthetic areas of the student’s projects.",
      ],
    },
    {
      title: "Graphic Design Chair",
      company_name: "Phi Sigma Kappa",
      icon: PSKLogo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Designed eye-catching rush posters, event flyers and social media posts while marketing the organization in accordance with our brand.",
        "Contributed to the marketing of the largest rush year in RIT history.",
      ],
    },
    {
      title: "Camp Counselor",
      company_name: "YMCA Camp Chingachgook",
      icon: YMCA,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Aug 2022",
      points: [
        "Ensured the safety and wellbeing of campers at all times.",
        "Inspired campers to create and explore through engaging and learning about their environment.",
        "Lead skill classes such as sailing, canoeing, swimming, water skiing and archery.",
        "Led three-day water and wilderness hikes through Lake George and the surrounding mountains.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NY Parks Mapbox",
      description:
        "A web application that allows you to research and favorite NY State parks.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "Mapbox",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: mapbox,
      source_code_link: "https://github.com/SawyerNic/Mapbox_Project",
    },
    {
      name: "Amiibo App",
      description:
        "An application that allows you to search for and favorite Amiibos. Built with React while utlizing the Amiibo API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
      ],
      image: amiibo,
      source_code_link: "https://github.com/SawyerNic/AmiiboApp",
    },
    {
      name: "Audio Visualizer",
      description:
        "An application that visualizes audio frequencies by using analyzer nodes.",
      tags: [
        {
          name: "WebAudioAPI",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "Webpack",
          color: "pink-text-gradient",
        },
      ],
      image: audio,
      source_code_link: "https://github.com/SawyerNic/IGME-330/tree/main/Homeworks/nicastro-s-hw2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  