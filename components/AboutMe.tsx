'use client'

import { useRouter } from "next/navigation";

export const AboutMe=()=>{
    const router=useRouter();
    return (
        <section id="about" className="bg-gradient-to-r from-blue-600/50 via-sky-600/50 to-teal-600/50  text-white py-16 px-4 md:px-16">
          <div className="max-w-5xl mx-auto text-center flex flex-col justify-center items-center animate-slideInUp">
            <p className="font-lg text-gray-500 font-bold">Get To Know More </p>
            <h2 className="text-3xl font-semibold mb-6 text-black">About Me</h2>
            <p className="text-lg leading-relaxed mb-8">
              Hi, I'm <strong className="text-teal-300">Sujoy Samanta</strong>, a passionate software engineer with a focus on full-stack web development. 
              I specialize in building modern web applications using cutting-edge technologies like <strong className="text-rose-600">Next.js</strong>, 
              <strong className="text-rose-600"> React.js</strong>, <strong className="text-rose-600">TypeScript</strong>, <strong className="text-rose-600">Node.js</strong>, and <strong className="text-rose-600">Docker</strong>. 
              I enjoy crafting clean, efficient, and scalable code to build seamless user experiences.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              With a strong foundation in <strong className="text-red-500">Data Structures and Algorithms</strong>,<strong className="text-green-500"> Object Oriented Programming</strong> and problem-solving, I strive to continuously learn and 
              improve my skills. I’m also passionate about <strong className="text-orange-500">DevOps</strong> and enjoy working with tools like 
              <strong className="text-amber-500"> AWS</strong>, <strong className="text-amber-500">Docker</strong>, and <strong className="text-amber-500">Kubernetes</strong> to ensure smooth development and deployment workflows.
            </p>
            <p className="text-lg leading-relaxed mb-8">
                In addition to being a tech enthusiast, I am also an athlete. I actively participate in sports like <strong className="text-rose-500"> cricket </strong> 
                and <strong className="text-rose-500"> football</strong>, which keep me energized and motivated. I also dedicate time to staying fit at the <strong className="text-rose-500">gym</strong>, 
                as I believe in maintaining a healthy mind and body to enhance both my professional and personal life.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              I’m also someone who loves to explore the world! Traveling to different places allows me to experience new cultures, 
              meet diverse people, and gain fresh perspectives. Whether it’s a short weekend getaway or a longer adventure, 
              I find traveling to be a great way to recharge and get inspired.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              When I’m not coding, you’ll find me exploring new technologies, contributing to <strong>open-source projects</strong>, 
              and staying up to date with the latest industry trends. 
            </p>
            <div className="flex justify-center mt-8">
              <button
                onClick={()=>{
                  router.push('/contact');
                }}
                className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg transition duration-300 hover:shadow-md animate-bounce"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </section>
    );
}