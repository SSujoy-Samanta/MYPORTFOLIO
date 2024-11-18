'use client'

import { useRouter } from "next/navigation"

export const Logo=()=>{
    const router=useRouter();

    return <div className="flex  justify-center items-center font-bold pl-2 md:pl-5 text-2xl cursor-pointer gap-0.5" onClick={()=>{
        router.push('/home');
    }}>
        <p className="text-black flex justify-center items-center logo md:text-4xl  transform hover:scale-110 transition-all md:gap-0.5 gap-1">
            <span className="">P</span><span>o</span><span>r</span><span>t</span><span className="">f</span><span>o</span><span>l</span><span>i</span><span>o</span>
        </p>
    </div>
}