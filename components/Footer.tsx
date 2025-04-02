"use client";
import { InstagramIcon } from "./CustomSvg/Insta";
import { FaceBookIcon } from "./CustomSvg/Facebook";
import { TwitterIcon } from "./CustomSvg/Twitter";
import { LinkedInSvg } from "./CustomSvg/Linkdin";
import { EmailSvg } from "./CustomSvg/Email";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleOpenNewTab = (path:string) => {
    window.open(path, "_blank");
  };
  
  const handleEmailClick = () => {
    const email = "sujoy.samanta.contact@gmail.com";
    const subject = "Inquiry from Portfolio";
    const body = "Hello, I'm interested in connecting with you!";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  };
  
  const socialLinks = [
    { 
      Icon: InstagramIcon, 
      url: "https://www.instagram.com/sujoy_samanta2003/profilecard/?igsh=MTB5cjd0Njkwd2hraQ==",
      delay: "100ms" 
    },
    { 
      Icon: FaceBookIcon, 
      url: "https://www.facebook.com/share/183i2FKkiH/",
      delay: "200ms" 
    },
    { 
      Icon: TwitterIcon, 
      url: "https://x.com/SujoySaman71471?t=HOb21AvnLTlOUb9EN7yhIw&s=09",
      delay: "300ms" 
    },
    { 
      Icon: LinkedInSvg, 
      url: "https://www.linkedin.com/in/sujoy-samanta-b06939336",
      delay: "400ms" 
    }
  ];

  return (
    <footer className={`bg-gray-900 text-gray-400 py-12 px-8`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Connect with me section */}
          <div className={`w-full max-w-2xl`}>

            <h2 className="text-lg md:text-xl bg-gradient-to-b from-blue-200 to-sky-700 bg-white bg-clip-text font-black tracking-tighter text-transparent text-center mb-6">
              Connect with me
            </h2>
            
            {/* Social icons grid */}
            <div className="grid grid-cols-4 gap-6 mb-8 max-w-md mx-auto">
              {socialLinks.map((social, index) => (
                <div 
                  key={index}
                  className={`flex justify-center items-center transition-all duration-500 transform hover:scale-110 cursor-pointer`}
                  style={{ transitionDelay: social.delay }}
                >
                  <social.Icon onClick={() => handleOpenNewTab(social.url)} />
                </div>
              ))}
            </div>
            
            {/* Email section */}
            <div 
              onClick={handleEmailClick} 
              className={`cursor-pointer flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <EmailSvg />
              <p className="font-bold mt-2 text-sm md:text-base text-amber-600">sujoy.samanta.contact@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className={`border-t border-gray-800 mt-12 pt-8 text-center text-gray-500`}>
          <p className="font-medium text-sm md:text-base">&copy; {currentYear} Sujoy Samanta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};