import React, { useState } from 'react';
import img1 from '../assets/img1.png';
import logo from '../assets/mainlogo.png';
import { FaBars } from 'react-icons/fa';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa'
function CombinedLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="w-full min-h-screen bg-[#F8F8FD] overflow-x-hidden">
            {/* Navbar */}
            <nav className="w-full h-[78px] bg-[#F8F8FD] flex items-center justify-between px-6 md:px-[124px]">
                {/* Left */}
                <div className="flex items-center gap-4">
                    <img src={logo} alt="JobHuntly Logo" className="w-8 h-8 object-cover" />
                    <div className="text-[#25324B] font-bold text-lg">JobHuntly</div>
                </div>

                <div className="hidden md:flex gap-6">
                    <a href="#" className="text-[#25324B] font-medium">Find Job</a>
                    <a href="#" className="text-[#25324B] font-medium">Browser Company</a>
                </div>

                {/* Right Buttons for Desktop */}
                <div className="hidden md:flex gap-4">
                    <button className="w-[70px] md:w-[92px] h-[40px] md:h-[50px] text-[#25324B] font-medium text-sm md:text-base">Login</button>
                    <button className="w-[80px] md:w-[108px] h-[40px] md:h-[50px] bg-[#4640DE] text-white font-medium text-sm md:text-base rounded">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden flex items-center" onClick={toggleMenu}>
                    <div className="w-[30px] h-[30px] bg-[#a0a0a4] rounded-full flex justify-center items-center">

                        <FaBars className="text-white text-[20px]" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full bg-[#F8F8FD] overflow-hidden flex flex-col md:flex-row items-center md:items-start">
                {/* Left Content */}
                <div className="flex flex-col gap-6 px-6 md:px-[125px] pt-[40px] md:pt-[100px] w-full md:max-w-[746px] text-center md:text-left">
                    <h1 className="text-[32px] md:text-[64px] leading-[120%] font-bold text-[#202430]">
                        Discover more than <br />
                        <span className="text-[#4640DE]">5000+ Jobs</span>
                    </h1>

                    <p className="text-[16px] md:text-[20px] leading-[160%] text-[#515B6F] opacity-70">
                        Great platform for the job seeker that searching for new career heights and passionate about startups.
                    </p>
                    <div className="w-full md:w-[900px] flex flex-col md:flex-row gap-4 items-center bg-white px-6 py-4 rounded-lg shadow-sm">
                        <div className="flex items-center w-full md:w-[360px]">
                            <FaSearch className="text-gray-400 mr-2 text-lg" />
                            <input
                                type="text"
                                placeholder="Job title or keyword"
                                className="w-full outline-none text-[16px] placeholder-gray-400"
                            />
                        </div>

                        <div className="flex items-center w-full md:w-[320px]">
                            <FaMapMarkerAlt className="text-gray-400 mr-2 text-lg" />
                            <select className="w-full outline-none text-[16px] text-gray-700 bg-transparent">
                                <option>Florence, Italy</option>
                            </select>
                        </div>

                        <button className="w-full md:w-[180px] bg-[#4640DE] text-white px-6 py-3 rounded-md font-semibold">
                            Search my job
                        </button>
                    </div>


                    <div className="text-[#202430] opacity-70 text-[14px] md:text-[16px] font-medium">
                        Popular: UI Designer, UX Researcher, Android, Admin
                    </div>
                </div>

                {/* Right Content - Hide on mobile */}

                <div className="hidden md:flex relative w-[860px] h-[794px]">

                    {/* Background rectangles */}
                    <div className="absolute top-60 left-24 w-[320px] h-[780px] rotate-[-64deg] border-4 border-[#CCCCF5] opacity-70"></div>
                    <div className="absolute top-12 left-[-100px] w-[192px] h-[416px] rotate-[-64deg] border-4 border-[#CCCCF5] opacity-60"></div>
                    <div className="absolute top-5 left-[282px] w-[328px] h-[796px] rotate-[-64deg] border-4 border-[#CCCCF5] opacity-70"></div>
                    <div className="absolute top-[617px] left-[-197px] w-[283px] h-[716px] rotate-[-64deg] border-4 border-[#CCCCF5] opacity-70"></div>

                    {/* White rectangle */}
                    <div className="absolute top-[495px] left-[946px] w-[283px] h-[716px] rotate-[-64deg] bg-white"></div>

                    {/* Hero Image */}
                    <div className="absolute top-[87px] left-[232px]">
                        <img src={img1} alt="Hero" className="w-[501px] h-[707px] object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CombinedLayout;
