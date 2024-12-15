'use client'

import { PrimaryButton } from "./Buttons/PrimaryButton";

export const ContactMe= () => {
    // Function to handle the "Email Me" button click
    const handleEmailClick = () => {
        const email = "sujoy.samanta.contact@gmail.com"; // replace with your email
        const subject = "Inquiry from Portfolio"; // optional subject
        const body = "Hello, I'm interested in connecting with you!"; // optional body
        // Redirect to Gmail compose with pre-filled fields
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
    };

    return (
        <section id="contact" className="bg-gradient-to-r from-sky-600/70 to-cyan-600/70 py-16 px-4 text-center flex flex-col justify-center items-center overflow-x-hidden">
            <div className="animate-slideInLeft flex flex-col justify-center items-center">
                <p className="text-lg font-bold text-gray-400">Get in Touch</p>
                <h2 className="text-3xl font-semibold mb-12 text-amber-700">Contact Me</h2>
                <p className="text-lg text-white mb-8 leading-relaxed break-words lg:w-3/6 md:w-4/6 w-full">
                Whether you're looking to discuss a new project, ask a question, or just say hello – I'm here to connect! I love collaborating on exciting projects, so feel free to reach out. Let’s turn ideas into impactful solutions together.
                </p>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-8 animate-slideInRight">
                <a href="https://github.com/SSujoy-Samanta" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex flex-col items-center justify-center">
                    <img
                        src='github.svg'
                        alt='github'
                        style={{ width: "50px", height: "50px" }}
                        className="animate-bounce slider-image aspect-auto object-contain mix-blend-darken p-1 rounded-2xl "
                    />
                    <p className="text-black font-bold">
                        GitHub
                    </p>
                </a>
                <a href="https://www.linkedin.com/in/sujoy-samanta-b06939336" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex flex-col items-center justify-center">
                    <img
                        src='linkedin.svg'
                        alt='LinkdIn'
                        style={{ width: "50px", height: "50px" }}
                        className="animate-bounce slider-image aspect-auto object-contain p-1 rounded-2xl "
                    />
                    <p className="text-black font-bold">
                        LinkedIn
                    </p>
                </a>
                <a 
                    href="https://www.instagram.com/sujoy_samanta2003/profilecard/?igsh=MTB5cjd0Njkwd2hraQ==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 flex flex-col items-center justify-center"
                >
                <img
                        src='instagram.svg'
                        alt='instagram'
                        style={{ width: "50px", height: "50px" }}
                        className="animate-bounce slider-image aspect-auto object-contain p-1 rounded-2xl "
                    />
                    <p className="text-black font-bold">
                        Instagram
                    </p>
                </a>

                <a href="https://x.com/SujoySaman71471?t=HOb21AvnLTlOUb9EN7yhIw&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex flex-col items-center justify-center">
                    <img
                        src='twitter.svg'
                        alt='twitter'
                        style={{ width: "50px", height: "50px" }}
                        className="animate-bounce slider-image aspect-auto object-contain p-1 rounded-2xl "
                    />
                    <p className="text-black font-bold">
                        X
                    </p>
                </a>
                {/* Add more links as needed */}
            </div>
                    
            {/* Email Button */}
            <PrimaryButton 
                onClick={handleEmailClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                <p>Email Me</p>
            </PrimaryButton>
            
        </section>
    );
};

