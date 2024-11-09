export interface Institute {
    degree: string;
    starting: number;
    ending: number;
    name: string;
    details: string;
    grade:string
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
      grade:"NONE"
    },
    {
        degree: "Higher Secondary Education(HS)",
        starting: 2020,
        ending: 2022,
        name: "Shyam Sundarpur Patna High School",
        details: "Completed high school with a focus on science subjects, where I developed a strong foundation in mathematics, physics, chemistry and computer science.",
        grade:"A"
      },
    {
      degree: "Secondary Education(Madhymick)",
      starting: 2014,
      ending: 2020,
      name: "Shyam Sundarpur Patna High School",
      details: "Focused on foundational subjects including Mathematics, Science, English,Bengail, History and Geography. Achieved a distinction in final exams and participated in inter-school science competitions.",
      grade:"A"
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
      subject: "Software Engineer",
      type: "Full-Time",
      starting: 2022,
      ending: 2023,
      description: [
        { title: "Collaborated with a team of engineers to develop scalable backend services" },
        { title: "Optimized database queries and improved application performance" },
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

