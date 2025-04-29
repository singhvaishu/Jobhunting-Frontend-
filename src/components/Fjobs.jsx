import React from "react";

import revolutLogo from "../assets/fjob/Email Marketing.png";
import dropboxLogo from "../assets/fjob/Brand Designer.png";
import pitchLogo from "../assets/fjob/Email Marketing1.jpg";
import blinkistLogo from "../assets/fjob/Visual Designer.png";
import classpassLogo from "../assets/fjob/Product Designer.jpg";
import canvaLogo from "../assets/fjob/Lead Designer.png";
import godaddyLogo from "../assets/fjob/Brand Strategist.jpg";
import twitterLogo from "../assets/fjob/Data Analyst.jpg";


const jobs = [
    {
        company: "Revolut",
        location: "Madrid, Spain",
        title: "Email Marketing",
        logo: revolutLogo,
        description: "Revolut is looking for Email Marketer to drive campaigns globally.",
        tags: ["Marketing", "Design"],
    },
    {
        company: "Dropbox",
        location: "San Francisco, US",
        title: "Brand Designer",
        logo: dropboxLogo,
        description: "Dropbox needs a creative Brand Designer to define their visual identity.",
        tags: ["Design", "Business"],
    },
    {
        company: "Pitch",
        location: "Berlin, Germany",
        title: "Email Marketing",
        logo: pitchLogo,
        description: "Pitch hiring a Customer Marketing Manager to build strong relations.",
        tags: ["Marketing"],
    },
    {
        company: "Blinkist",
        location: "Granada, Spain",
        title: "Visual Designer",
        logo: blinkistLogo,
        description: "Blinkist seeks a Visual Designer to create engaging content designs.",
        tags: ["Design"],
    },
    {
        company: "ClassPass",
        location: "Manchester, UK",
        title: "Product Designer",
        logo: classpassLogo,
        description: "Join ClassPass as Product Designer and shape fitness experiences!",
        tags: ["Marketing", "Design"],
    },
    {
        company: "Canva",
        location: "Ontario, Canada",
        title: "Lead Designer",
        logo: canvaLogo,
        description: "Canva is searching for a Lead Designer to drive product design innovation.",
        tags: ["Design", "Business"],
    },
    {
        company: "GoDaddy",
        location: "Marseille, France",
        title: "Brand Strategist",
        logo: godaddyLogo,
        description: "GoDaddy is hiring Brand Strategist to strengthen market positioning.",
        tags: ["Marketing"],
    },
    {
        company: "Twitter",
        location: "San Diego, US",
        title: "Data Analyst",
        logo: twitterLogo,
        description: "Twitter looking for skilled Data Analyst to optimize product decisions.",
        tags: ["Marketing", "Technology"],
    },
];

const FeaturedJobs = () => {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">
                    <span className="text-gray-800">Featured</span>{" "}
                    <span className="text-blue-500">jobs</span>
                </h2>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                    Show all jobs →
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="border border-dashed border-purple-300 rounded-lg p-6 flex flex-col gap-4 hover:shadow-lg transition"
                    >
                        <div className="flex justify-between items-center">
                            {/* Company Logo */}
                            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="w-[91px] h-[34px] flex items-center justify-center gap-2 border border-[#4640DE] text-[#4640DE] text-sm font-semibold">
                                Full time
                            </div>


                        </div>

                        {/* Job Title */}
                        <div>
                            <div className="w-[144px] h-[29px] flex items-center justify-center  text-gray-700 font-epilogue font-semibold text-[18px] leading-[160%] tracking-[0%] rounded">
                                {job.title}
                            </div>

                            {/* Custom Description */}
                            <p className="text-sm text-gray-500 mt-2">{job.description}</p>

                            {/* Company and Location */}
                            <p className="text-sm text-gray-500 mt-2">
                                {job.company} ・ {job.location}
                            </p>
                        </div>

                        {/* Tags */}
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {job.tags.map((tag, idx) => {
                                let tagStyle = "bg-gray-100 text-gray-600"; // default

                                if (tag === "Marketing") tagStyle = "bg-orange-100 text-orange-700";
                                if (tag === "Design") tagStyle = "bg-green-100 text-green-700";
                                if (tag === "Business") tagStyle = "bg-blue-100 text-blue-700";
                                if (tag === "Technology") tagStyle = "bg-red-100 text-red-700";

                                return (
                                    <span
                                        key={idx}
                                        className={`text-xs px-3 py-1 rounded-full font-semibold ${tagStyle}`}
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedJobs;