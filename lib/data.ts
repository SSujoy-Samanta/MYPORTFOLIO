export interface Institute {
    degree: string;
    starting: number;
    ending: number;
    name: string;
    details: string;
    percentage:string
}

export interface Experience {
    subject: string;
    type: string;
    starting: number|string;
    ending: number|string;
    description: {
      title: string;
    }[];
}
  
  
export const allInstitutes: Institute[] = [
    {
      degree: "B.Tech in CS",
      starting: 2022,
      ending: 2026,
      name: "Techno InterNational Newtown",
      details: "Currently pursuing a Bachelor's degree in Computer Science. Involved in various projects and coursework related to web development, DSA, OOPS and software engineering principles.",
      percentage:"75%"
    },
    {
        degree: "Higher Secondary Education(HS)",
        starting: 2020,
        ending: 2022,
        name: "Shyam Sundarpur Patna High School",
        details: "Completed high school with a focus on science subjects, where I developed a strong foundation in mathematics, physics, chemistry and computer science.",
        percentage:"95%"
      },
    {
      degree: "Secondary Education(Madhymick)",
      starting: 2014,
      ending: 2020,
      name: "Shyam Sundarpur Patna High School",
      details: "Focused on foundational subjects including Mathematics, Science, English,Bengail, History and Geography. Achieved a distinction in final exams and participated in inter-school science competitions.",percentage:"93%"
    },

];

export const MyExperience: Experience[] = [
    {
      subject: "Full Stack Web Development",
      type: "Internship",
      starting: 2023,
      ending: 2024,
      description: [
        { title: "Developed a full-stack web application using Next.js and Prisma" },
        { title: "Worked on state management with Recoil and implemented user authentication" },
      ],
    },
    {
      subject: "Blockchain Development",
      type: "Internship",
      starting: 2024,
      ending: 2025,
      description: [
        { 
          title: "Collaborated with a team to build and deploy smart contracts on Ethereum using Solidity and on Solana using Rust, integrating them seamlessly with the application" 
        },        
        { title: "Designed and implemented RESTful APIs to interact with blockchain data and ensure seamless user experience" },
        { title: "Conducted thorough testing of smart contracts and web app functionality to ensure reliability and security" },
        { title: "Worked on optimizing blockchain transaction speed and reducing gas fees in the app" },
        { title: "Gained hands-on experience in developing decentralized applications (dApps) and integrating them with web technologies" }
      ],
    },
    {
        subject: "Freelance Web Developer",
        type: "Self-employed",
        starting: 2024,
        ending: 'Present',
        description: [
          { title: "Built custom websites for small businesses using Next.js, TypeScript, and Tailwind CSS." },
          { title: "Implemented responsive and user-friendly UI designs to improve customer engagement." },
          { title: "Collaborated with clients to understand requirements and deliver tailored web solutions." },
          { title: "Managed full project life cycle from concept to deployment and maintenance." },
        ],
      },
];
  
export const skills = {
  technical: [
    { name: 'JavaScript', img: 'js.svg',percentage:80 },
    { name: 'TypeScript', img: 'ts.svg',percentage:85 },
    { name: 'Solana', img: 'solana.svg',percentage:80 },
    { name: 'Ethereum', img: 'ethereum.png',percentage:85 },
    { name: 'Rust', img: 'rust.png',percentage:70 },
    { name: 'solidity', img: 'solidity.svg',percentage:90 },
    { name: 'DSA', img: 'dsa.svg',percentage:75 },
    { name: 'OOPS', img: 'oops.svg',percentage:90 },
    { name: 'React', img: 'react.svg',percentage:85 },
    { name: 'Next.js', img: 'nextjs.svg',percentage:80 },
    { name: 'Node.js', img: 'nodejs.svg',percentage:90 },
    { name: 'Tailwind CSS', img: 'tailwind.svg',percentage:95 },
    { name: 'Prisma', img: 'prisma.svg',percentage:95 },
    { name: 'Postgress', img: 'postgress.svg',percentage:75 },
    { name: 'MongoDB', img: 'mongo.svg',percentage:80 },
    { name: 'Docker', img: 'docker.svg',percentage:75 },
    { name: 'DevOps', img: 'devops.svg',percentage:70 },
    { name: 'AWS', img: 'aws.svg',percentage:65 },
    { name: 'GitHub', img: 'github.svg',percentage:80 },
    { name: 'JAVA', img: 'java.svg',percentage:70 },
    { name: 'C++', img: 'cplus.svg',percentage:70 },
    { name: 'PYTHON', img: 'python.svg',percentage:75 },
    { name: 'C', img: 'c.svg',percentage:70 },
  ],
  professional: [
    { name: 'Problem Solving',percentage:80  },
    { name: 'Project Management',percentage:75  },
    { name: 'Leadership',percentage:85  },
    { name: 'Communication',percentage:70  },
    { name: 'Time Management',percentage:95  },
    { name: 'Team Work',percentage:90  },
    { name: 'Sports',percentage:95 },
  ]
};

