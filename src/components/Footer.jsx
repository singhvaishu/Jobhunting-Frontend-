

import React from 'react';
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import JogoIcon from "../assets/mainlogo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">

                {/* Logo and Description */}
                <div>
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <img src={JogoIcon} alt="Jogo" className="w-4 h-4" />
                        </div>
                        <span className="ml-2 text-white font-bold text-lg">JobHuntly</span>
                    </div>
                    <p className="text-sm">
                        Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </p>
                </div>

                {/* About - Separate Column */}
                <div>
                    <h4 className="text-white font-semibold mb-4">About</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Companies</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Terms</a></li>
                        <li><a href="#" className="hover:underline">Advice</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Resources - Separate Column */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Help Docs</a></li>
                        <li><a href="#" className="hover:underline">Guide</a></li>
                        <li><a href="#" className="hover:underline">Updates</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Get job notifications</h4>
                    <p className="text-sm mb-4">The latest job news, articles, sent to your inbox weekly.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 px-5 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>2021 © JobHuntly. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaInstagram /></a>
                    <a href="#" className="hover:text-white"><FaDribbble /></a>
                    <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                    <a href="#" className="hover:text-white"><FaTwitter /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
