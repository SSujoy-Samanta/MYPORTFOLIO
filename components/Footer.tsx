"use client";
import { useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { InstagramIcon } from "./CustomSvg/Insta";
import { FaceBookIcon } from "./CustomSvg/Facebook";
import { TwitterIcon } from "./CustomSvg/Twitter";
import { LinkedInSvg } from "./CustomSvg/Linkdin";
import { EmailSvg } from "./CustomSvg/Email";

export const Footer = () => {
  const handleOpenNewTab = (path: string) => {
    window.open(path, "_blank");
  };
  const handleEmailClick = () => {
    const email = "sujoy.samanta.contact@gmail.com"; // replace with your email
    const subject = "Inquiry from Portfolio"; // optional subject
    const body = "Hello, I'm interested in connecting with you!"; // optional body
    // Redirect to Gmail compose with pre-filled fields
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  };
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  return (
    <div className="p-2 flex flex-col bg-gradient-to-r from-cyan-900  to-sky-900 w-full text-white items-end lg:text-base sm2:text-sm xxs:text-xs">
      <div className="grid grid-cols-1 w-full">
        <div className="flex flex-row w-full gap-4 p-2 col-span-1 ">
          <div className="flex flex-col justify-center items-center w-full gap-4 p-2 xl:ml-0 sm2:ml-10 text-purple-500">
            <div className="lg:text-lg sm2:text-base xxs:text-xs text-blue-600 font-bold">
              CONNECT WITH ME
            </div>
            <div className="grid grid-cols-4 lg:w-2/6 md:w-3/6 sm2:w-4/6 xxs:w-4/5 pl-2 gap-1 sm2:gap-y-8 xxs:gap-y-4">
              <div className="flex justify-center items-center  cursor-pointer">
                <InstagramIcon
                  onClick={() => {
                    handleOpenNewTab("https://www.instagram.com/sujoy_samanta2003/profilecard/?igsh=MTB5cjd0Njkwd2hraQ==");
                  }}
                />
              </div>
              <div className="flex  justify-center items-center  cursor-pointer">
                <FaceBookIcon
                  onClick={() => {
                    handleOpenNewTab("https://www.facebook.com/share/183i2FKkiH/");
                  }}
                />
              </div>
              <div className="flex justify-center items-center  cursor-pointer">
                <TwitterIcon
                  onClick={() => {
                    handleOpenNewTab("https://x.com/SujoySaman71471?t=HOb21AvnLTlOUb9EN7yhIw&s=09");
                  }}
                />
              </div>
              <div className="flex justify-center items-center  cursor-pointer">
                <LinkedInSvg
                  onClick={() => {
                    handleOpenNewTab("https://www.linkedin.com/in/sujoy-samanta-b06939336");
                  }}
                />
              </div>
              <div onClick={handleEmailClick} className="col-span-4 cursor-pointer flex flex-col items-center justify-center">
                <EmailSvg />
                <p className="font-bold  ">sujoy.samanta.contact@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-4 text-black font-bold text-center w-full bottom-0">
        <p>&copy; {currentYear} Sujoy Samanta. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
