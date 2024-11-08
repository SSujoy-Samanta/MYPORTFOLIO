import { Experience, MyExperience } from "@/lib/data";

export const ExperienceModal = () => {
  return (
    <div className="flex relative gap-8">
      {/* Vertical Line */}
      <div className="h-full p-1 bg-sky-500 rounded-sm absolute left-4"></div>

      {/* Timeline Content */}
      <div className="flex flex-col ml-8 space-y-8">
        {MyExperience.map((x: Experience, inx: number) => (
          <div key={inx} className="relative group">
            {/* Circle Indicator */}
            <div className="p-2 rounded-full bg-cyan-500 absolute -left-5 top-1"></div>

            {/* Content Box */}
            <div className="p-6 border-4 border-sky-500 rounded-md shadow-lg ml-4 bg-cyan-900 relative overflow-hidden cursor-pointer flex flex-col gap-4">
              {/* Heading Section */}
              <div className="flex gap-2 text-gray-900 font-bold items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
                <p className="text-lg text-black">{x.starting} - {x.ending}</p>
              </div>

              {/* Experience Details */}
              <div className="flex justify-start items-start flex-col w-full gap-2">
                <h4 className="text-2xl font-medium text-cyan-400">{x.subject}</h4>
                <p className="text-lg text-gray-400">{x.type} | {x.starting} - {x.ending}</p>

                {/* Description List */}
                <ul className="list-disc w-full list-inside mt-4 text-lg text-gray-300 leading-relaxed flex flex-col justify-start">
                  {x.description.map((y: any, inx: number) => (
                    <li key={inx} className="text-start">{y.title}</li>
                  ))}
                </ul>
                
              </div>

              {/* Hover Overlay Animation */}
              <div className="absolute top-0 left-0 h-full bg-slate-500 opacity-0 w-0 transition-all duration-500 ease-in-out group-hover:w-full group-hover:opacity-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
