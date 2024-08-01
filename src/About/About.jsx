import React from 'react';

export default function About() {
  return (
    <div className="w-full bg-teal-500">
      <div className="container mx-auto py-5 px-4 flex flex-col items-center py-10 ">
        <h1 className="text-xl  font-bold text-white text-center">
          About Component
        </h1>
        <div className="flex items-center  mx-auto gap-3 py-5">
          <div className="w-16 h-1 bg-white"></div>
          <i className="fa-solid fa-star text-white text-lg"></i>
          <div className="w-16 h-1 bg-white"></div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between w-full ">
          <div className="flex-1 text-xs sm:text-sm md:text-base text-white text-center  px-2 my-4 ">
<p className=''>
Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

</p>
          </div>
          <div className="flex-1 text-xs sm:text-sm md:text-base text-white text-center  px-2 my-4 ">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
