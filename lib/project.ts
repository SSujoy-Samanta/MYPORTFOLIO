interface Project {
    title: string;
    description: string;
    technologies: string[];
    link: string|null;
    image: string; // URL to project image
    githubLink: string; // URL to project GitHub repository
}
  
  
export const projects: Project[] = [
  {
    title: 'Decentralized FundRaiser',
    description: 'Decentralized FundRaise is a blockchain-based crowdfunding platform that enables users to raise funds securely and transparently without intermediaries. Donors can contribute using cryptocurrencies, and smart contracts ensure automatic fund distribution based on pre-defined conditions. The platform promotes trust, immutability, and efficiency in fundraising, empowering both creators and supporters in a decentralized manner.',
    technologies: ['Solidity', 'Rust', 'Ethereum', 'Next.js', 'TypeScript','Wagmi.js', 'Ethers.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    link: 'https://fundraiser.mydevsverse.in',
    image: 'fundraiser.jpg',
    githubLink: 'https://github.com/SSujoy-Samanta/Crowd_Funding',
  },
  {
    title: 'DevsMeet',
    description: 'DevsMeet is a multi-user video conferencing platform designed for developers to collaborate in real-time. Built using MediaSoup, it enables seamless low-latency video calls, screen sharing, and interactive coding sessions. With features like dynamic room creation, role-based permissions, and secure peer-to-peer communication, DevsMeet facilitates productive discussions among developers worldwide.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MediaSoup', 'WebRTC',  'Socket.io','PostgreSQL', 'Prisma', 'Docker', 'Tailwind CSS'],
    link: 'https://devsmeet.mydevsverse.in',
    image: 'devsmeet.webp',
    githubLink: 'https://github.com/SSujoy-Samanta/DEVSMEET',
  },
  {
    title: 'EduBridge',
    description: 'EduBridge is a platform where freshers and alumni connect for career guidance. Freshers can chat with alumni, attend live video guidance sessions, and receive valuable insights into their career paths. The platform fosters a supportive community, enabling mentorship and professional growth through direct interaction and expert advice.',
    technologies: ['Turbo Repo', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Postgres', 'Prisma', 'Tailwind CSS', 'Recoil', 'Docker'],
    link: 'https://edubridge.mydevsverse.in',
    image: 'edubridge.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/EduBridge',
  },
  {
    title: 'DevsPay',
    description: 'DevsPay is a secure and efficient payment platform that facilitates real-world money transfers between users. Leveraging blockchain and traditional banking integrations, it ensures fast, low-cost, and borderless transactions. With support for fiat and crypto payments, DevsPay provides a seamless and scalable financial ecosystem for individuals and businesses.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express',"RazorPay", 'PostgreSQL', 'Prisma', 'Docker', 'Tailwind CSS'],
    link: null,
    image: 'devspay.jpg',
    githubLink: 'https://github.com/SSujoy-Samanta/PAYMENT',
  },
  
  {
    title: 'Zapier Clone',
    description: 'A Zapier clone automates workflows by connecting different apps, allowing users to create sequences where events in one app trigger actions in another. This platform simplifies repetitive tasks across tools like Slack and Google Sheets, boosting productivity with customizable, easy-to-manage automated workflows.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Postgres', 'Prisma', 'Tailwind CSS'],
    link: null,
    image: 'zapier.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/ZAPIER',
  },
  {
    title: 'FlipKart Clone',
    description: 'A Flipkart clone is an e-commerce platform that replicates the features and functionality of Flipkart. It allows users to browse and purchase products, manage orders, and make secure payments. The clone offers product categorization, a shopping cart, and a checkout process, simulating the Flipkart shopping experience.',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'CSS', 'MongoDb', 'MUI'],
    link: null,
    image: 'flipkart.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/FLIPKART',
  },
  {
    title: 'Airbnb Clone',
    description: 'An Airbnb clone is a platform that replicates the core features of Airbnb, allowing users to list, discover, and book accommodations. It includes functionalities like user profiles, search filters, booking management, reviews, and payment integration. This clone enables both hosts and guests to connect in a seamless, user-friendly environment.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'EJS', 'CSS', 'MongoDb', 'Bootstrap'],
    link: null,
    image: 'airbnb.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/AIRBNB',
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix clone is a streaming platform that mimics the features of Netflix, allowing users to browse, stream, and manage movies and TV shows. It includes user profiles, subscription plans, content recommendations, and a responsive interface for seamless viewing. This clone provides a similar entertainment experience as Netflix.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    link: null,
    image: 'netflix.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/NETFLIX',
  },
  {
    title: 'Jarvis AI',
    description: 'A Jarvis AI clone is a powerful AI-driven tool designed to assist with content creation, writing, and task automation. It leverages natural language processing to generate text, answer questions, and streamline workflows. This clone mimics Jarvis AI capabilities, helping users improve productivity through smart, personalized assistance.',
    technologies: ['Python'],
    link: null,
    image: 'jarvis.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/PY_PROJECT/tree/main/JARVIS%20AI',
  },
  {
    title: 'DRS',
    description: 'The DRS (Decision Review System) in cricket allows teams to challenge on-field umpire decisions. Using technology like Hawk-Eye, ball-tracking, and audio detection, DRS helps umpires make accurate decisions. Teams are allowed a limited number of reviews per innings, with unsuccessful challenges resulting in a loss of review.',
    technologies: ['Python'],
    link: null,
    image: 'drs.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/PY_PROJECT/tree/main/DRS',
  },
  {
    title: 'Movement Detector',
    description: 'A movement detector is a device designed to sense motion in an area, typically using infrared or ultrasonic sensors. It detects changes in the environment, triggering actions such as turning on lights, activating alarms, or alerting security systems. It enhances security and automation by detecting movement in real-time.',
    technologies: ['Python'],
    link: null,
    image: 'md.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/PY_PROJECT/tree/main/MOVEMENT_DETECTOR',
  },
  {
    title: 'Currency Converter',
    description: 'A currency converter is a tool that allows users to convert one currency into another based on real-time exchange rates. It supports multiple currencies, providing accurate conversions for travel, business, and personal finance. Users can quickly compare values and make informed decisions in various international transactions.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    link: null,
    image: 'currency.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/CURRENCY-CONVERTER',
  },
  {
    title: 'Stone-Paper-Scissor',
    description: 'Stone, Paper, Scissors is a classic hand game played between two players. Each player simultaneously forms one of three shapes: stone (rock), paper, or scissors. The game follows simple rules: stone crushes scissors, scissors cut paper, and paper covers stone. It’s a fun, quick decision-making game.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    link: null,
    image: 'sps.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/STONE-PAPER-SCISSOR',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Tic-Tac-Toe is a simple two-player game where players take turns marking spaces on a 3x3 grid with Xs and Os. The goal is to align three marks in a row, either horizontally, vertically, or diagonally. It’s a quick and engaging strategy game, often played for fun or as a learning tool.',
    technologies: ['JavaScript', 'CSS', 'HTML'],
    link: null,
    image: 'ttt.svg',
    githubLink: 'https://github.com/SSujoy-Samanta/Tic-Tac--Toe',
  },

  // Add more projects here
];
  
