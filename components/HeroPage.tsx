'use client'
import Typewriter from 'typewriter-effect';
import { PrimaryButton } from './Buttons/PrimaryButton';
import { SecondaryButton } from './Buttons/SecondaryButton';
import ImageSlider from './ImageSlider';
import { useRouter } from 'next/navigation';
import {motion} from 'framer-motion';

export const HeroPage=()=> {
  const router=useRouter();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "My-Resume.pdf"; // Path to the PDF file
    link.download = "Sujoy-Resume.pdf"; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
    
  return (
    <div className="h-full">
        <div className="h-4/6 flex md:flex-row flex-col-reverse justify-between pl-5 md:pl-24 lg:pl-40 pb-40 pt-10 text-white gap-2 ">
          <div className='animate-slideInLeft space-y-3'>
            <h1 className="lg:text-5xl sm:text-3xl text-xl font-bold text-white flex gap-1 md:flex-row  flex-col"><p className="text-amber-700">Hi,</p> <p>I'm Sujoy Samanta.</p></h1>
            <div className='flex justify-start items-center gap-2 md:text-2xl text-base mt-2'>
              <p className="md:text-2xl text-xl text-gray-400">A Passionate</p>
              <div className='text-yellow-600 font-bold'>
                <Typewriter
                  options={{
                    strings: ["Software Engineer","Blockchain Developer","Full-Stack Developer", "Freelancer", "Athlete"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <motion.div  
              variants={itemVariants}
              className="text-md md:text-lg space-y-2 mb-8 text-blue-100 pr-5 md:pr-0"
            >
              <p className="backdrop-blur-sm bg-white/5 rounded-lg px-4 py-2 w-fit">
                B.Tech <span className="text-blue-300">|</span> Blockchain, Full-stack & DevOps enthusiast.
              </p>
              <p className="backdrop-blur-sm bg-white/5 rounded-lg px-4 py-2 w-fit">
                Skilled in JAVA, C++, DSA and OOPS.
              </p>
              <p className="backdrop-blur-sm bg-white/5 rounded-lg px-4 py-2 w-fit">
                Passionate about building web apps and exploring tech.
              </p>
            </motion.div>
            <div className="pt-10 flex justify-start space-x-6">
                <PrimaryButton onClick={handleDownload}>
                  <div className='flex justify-center items-center gap-1 text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <p>Resume</p>
                  </div>
                </PrimaryButton>
                <SecondaryButton onClick={()=>{
                  router.push('/contact');
                }}>
                  <div className='flex justify-center items-center gap-1 text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p>Contact</p>
                  </div>
                </SecondaryButton>
            </div>
          </div>
          <div className='flex justify-center items-center lg:w-3/6 md:w-2/6 w-full h-full z-20'>
            <div className='flex justify-center items-center  border-animate rounded-full  transition-transform transform p-1'>
              <img src="my-profile.png" alt="profile" className='lg:h-60 lg:w-60 h-48 w-48 object-contain bg-slate-900 rounded-full' />
            </div>
          </div>
        </div>
        <div className='h-40 -mt-20 flex justify-center items-center'>
          <ImageSlider/>

        </div>
    </div>
  );
}
