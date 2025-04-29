import React from 'react';
import Dashboard from '../assets/dashboard.png'
const JobPostingBanner = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-[#5c4dff] p-8 md:p-16 rounded-br-[100px] rounded-tl-[100px] overflow-hidden">

            {/* Left Side Text Content */}
            <div className="text-white max-w-md space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Start posting <br /> jobs today
                </h1>
                <p className="text-lg">
                    Start posting jobs for only $10.
                </p>
                <button className="mt-4 bg-white text-[#5c4dff] font-semibold py-3 px-6 rounded-md hover:bg-gray-100">
                    Sign Up For Free
                </button>
            </div>

            {/* Right Side Image */}
            <div className="mt-10 md:mt-0 md:ml-12 flex-shrink-0">
                <img
                    src={Dashboard}
                    alt="Dashboard preview"
                    className="w-[500px] max-w-full rounded-lg shadow-lg"
                />
            </div>

        </section>
    );
};

export default JobPostingBanner;
