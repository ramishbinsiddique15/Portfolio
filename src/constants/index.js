import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    express,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    bootstrap,
    firebase,
    spotify,
    chai,
    bag,
    nextjs,
    dodo,
    passbank,
    text
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
    },
  ];
  
  const services = [
    {
      title: "Custom Web Development",
      icon: web,
    },
    {
      title: "Responsive Web Design",
      icon: mobile,
    },
    {
      title: "E-Commerce Solutions",
      icon: backend,
    },
    {
      title: "Consulting & Support",
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
      name: "Express",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    
  ];
  
  const experiences = [
    {
      title: "Frontend Intern",
      company_name: "Dodo Softec",
      icon: dodo,
      iconBg: "#fff",
      date: "June 2024 - August 2024",
      points: [
        "Assisted in the development and maintenance of web applications using React.js, gaining hands-on experience with frontend technologies.",
        "Worked closely with senior developers and designers to ensure projects met design and functional specifications.",
        "Contributed to implementing responsive web design, improving mobile-friendliness and performance.",
        "Enhanced coding skills by participating in code reviews, learning best practices, and incorporating feedback.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Dodo Softec",
      icon: dodo,
      iconBg: "#fff",
      date: "September 2024 - Present",
      points: [
        "Leading the development and optimization of web applications using React.js, Tailwind CSS, and other modern technologies.",
        "Collaborating with cross-functional teams, including designers, developers, and product managers, to deliver seamless user experiences.",
        "Ensuring cross-browser compatibility and adhering to responsive design standards to enhance user accessibility.",
        "Conducting code reviews, mentoring junior developers, and driving improvements in code quality and performance.",
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
        name: "Spotify Clone",
        description:
            "Web-based platform that mimics the functionality of Spotify, allowing users to browse and listen to music, manage playlists, and explore new songs through a sleek UI.",
        tags: [
            {
                name: "express",
                color: "black-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
        ],
        image: spotify,
        source_code_link: "https://github.com/ramishbinsiddique15/Spotify-Clone",
    },
    {
        name: "Get Me a Chai",
        description:
            "Web application that enables users to search for and order chai, exploring a variety of options based on their preferences with seamless location-based features.",
        tags: [
            {
                name: "nextjs",
                color: "black-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: chai,
        source_code_link: "https://github.com/ramishbinsiddique15/Get-Me-a-Chai",
    },
    {
        name: "Bag Elegance",
        description:
            "An e-commerce platform focused on luxury bags, offering users an elegant and easy-to-navigate shopping experience with options for exclusive items.",
        tags: [
            {
                name: "express",
                color: "black-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: bag,
        source_code_link: "https://github.com/ramishbinsiddique15/BagElegance",
    },
    {
        name: "Pass Bank",
        description:
            "A secure and efficient password management system that allows users to store, manage, and generate complex passwords with a simple and intuitive UI.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
        ],
        image: passbank,
        source_code_link: "https://github.com/ramishbinsiddique15/PassBank",
    },
    {
        name: "Text Utils",
        description:
            "A web-based tool for manipulating text, offering features like word counting, text transformation, and more, built with a simple interface for productivity.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "purple-text-gradient",
            },
        ],
        image: text,
        source_code_link: "https://github.com/ramishbinsiddique15/Text-Utils",
    },
];

  
  export { services, technologies, experiences, testimonials, projects };