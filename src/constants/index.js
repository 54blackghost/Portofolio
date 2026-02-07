import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  shopify,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphic designer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "ULB TV",
    icon: '/ulbtv.png',
    iconBg: "#383E56",
    date: "March 2023 - present",
    points: [
      ' Développement et maintenance d\'applications web avec React.js et autres technologies connexes.',
      'Collaboration avec des équipes pluridisciplinaires (designers, chefs de produit et autres développeurs) pour créer des produits de haute qualité.',
      'Mise en œuvre d\'une conception adaptative et garantie de la compatibilité multi-navigateurs.',
      'Participation aux revues de code et formulation de retours constructifs aux autres développeurs.'
    ],
  },
  {
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
    name: "Donation Plateform",
    description:
      "Plateforme de dons pour les associations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Django",
        color: "yellow-text-gradient",
      },
    ],
    image: '/donation.png',
    source_code_link: "https://github.com/54blackghost/donor-crm",
  },
  {
    name: "Saveur d'Afrique ",
    description:
      "Page web de presentation des saveurs d'origine africaine.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: '/saveur-afrique.png',
    source_code_link: "https://saveur-afrique.netlify.app/",
  },
  {
    name: "Facebook Downloader",
    description:
      "Application de telechargement de video depuis Facebook.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
    ],
    image: '/fb_downloader.PNG',
    source_code_link: "https://github.com/54blackghost/FB_downloader",
  },
  {
    name: "Beauty Salon",
    description:
      "Site web pour un salon de beauté.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
    ],
    image: '/beauty.PNG',
    source_code_link: "https://github.com/54blackghost/Design",
  },
  {
    name: "Quick Show",
    description:
      "Une plateform web de cinema, qui permet la reservation des films ou series, places dansun cine precis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: '/quickshow.PNG',
    source_code_link: "https://github.com/54blackghost/QuickShow",
  },
  {
    name: "Social Page",
    description:
      "projet vitrine permettant de presenter une structure en ligne.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS ",
        color: "green-text-gradient",
      },
      {
        name: "WebForm3",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
    ],
    image: '/Capture2.PNG',
    source_code_link: "https://github.com/54blackghost/ulb-social",
  },
  
];


const designs = [
  {
    
    name: 'Fete du Travail 2025',
    description: "Affiche pour une entreprise, qui celebre la fete du travail",
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/first_mai1.png',
  },
   {
    
    name: 'Tabaski 2025',
    description: "A small visual for the ULB TV Enterprise to celebrate with Mulsuman community",
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/Tabaski.png', 
  },
  {
    name: 'Conference Flyer',
    description: 'A simple design conference flyer designed.',
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/Free_Poster_Mockup_4.gif',
    
  },
  {
    
    name: 'Cooking Flyer',
    description: "A simple design cooking flyer designed.",
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/Free_Poster_Mockup_5.gif',
    
   
  },
   {
   
    name: "Formation en Produits d'/entretien menager",
    description: "Une affiche qui presente les differents modules d'une formation de produits de menage.",
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/formation_lessivage.png',
    
   
  },
   {
  
    name: "Flyer pour ETS ROYAL ALU",
    description: "Une affiche qui presente les differents services de la structure Royal Alu.",
    tags: [
      {
        name: "'Adobe Adobe Illustrator'",
        color: "blue-text-gradient",
      }
    ],
    image: '/royal_alu2.png',
  },
  {
  
    name: "MockUp",
    description: "MockUp du Logo de la structure Royal Alu.",
    tags: [
      {
        name: "'Adobe Adobe Illustrator'",
        color: "blue-text-gradient",
      }
    ],
    image: '/mockup_royal_alu.png',
    
   
  },
  {
    
    name: "Flyer",
    description: "Affiche pour un post de publiciter des Delices de Daina",
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/Daina_poster.png',
  },
  {
    name: "Couverture",
    description: "Presentation d'une couverture pour un livre ou bord d'etude ",
    tags: [
      {
        name: "'Adobe PhotoShop'",
        color: "blue-text-gradient",
      }
    ],
    image: '/Couverture1.png',
   
  },
  
];

export { services, technologies, experiences, testimonials, projects, designs };
 
 