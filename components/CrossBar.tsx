'use client'
import { useState } from "react";
import { ProfileModal } from "./ProfileModal";

export const CrossBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center xl:hidden">
      {toggle ? (
        <div onClick={() => setToggle((prev) => !prev)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
            >
                <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                />
            </svg>
            <div>
                <ProfileModal setToggle={setToggle}/>
            </div>

        </div>
      ) : (
        <div onClick={() => setToggle((prev) => !prev)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
            >
                <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
                />
            </svg>
            
        </div>
      )}
    </div>
  );
};
