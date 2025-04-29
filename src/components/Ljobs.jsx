import React from 'react';

import nomadLogo from '../assets/ljobs/nomad.svg';
import netlifyLogo from '../assets/ljobs/netlify.png';
import dropboxLogo from '../assets/ljobs/dropbox.svg';
import mazeLogo from '../assets/ljobs/maze.jpg';
import terraformLogo from '../assets/ljobs/terraform.svg';
import udacityLogo from '../assets/ljobs/udacity.png';
import packerLogo from '../assets/ljobs/packer.svg';
import webflowLogo from '../assets/ljobs/webflow.png';

const jobs = [
    {
        id: 1,
        companyLogo: nomadLogo,
        title: 'Social Media Assistant',
        company: 'Nomad',
        location: 'Paris, France',
    },
    {
        id: 2,
        companyLogo: netlifyLogo,
        title: 'Social Media Assistant',
        company: 'Netlify',
        location: 'Paris, France',
    },
    {
        id: 3,
        companyLogo: dropboxLogo,
        title: 'Brand Designer',
        company: 'Dropbox',
        location: 'San Francisco, USA',
    },
    {
        id: 4,
        companyLogo: mazeLogo,
        title: 'Brand Designer',
        company: 'Maze',
        location: 'San Francisco, USA',
    },
    {
        id: 5,
        companyLogo: terraformLogo,
        title: 'Interactive Developer',
        company: 'Terraform',
        location: 'Hamburg, Germany',
    },
    {
        id: 6,
        companyLogo: udacityLogo,
        title: 'Interactive Developer',
        company: 'Udacity',
        location: 'Hamburg, Germany',
    },
    {
        id: 7,
        companyLogo: packerLogo,
        title: 'HR Manager',
        company: 'Packer',
        location: 'Lucern, Switzerland',
    },
    {
        id: 8,
        companyLogo: webflowLogo,
        title: 'HR Manager',
        company: 'Webflow',
        location: 'Lucern, Switzerland',
    },
];

const JobCard = ({ title, company, location, companyLogo }) => (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-sm" style={{ width: '580px', height: '149px', background: 'rgba(255, 255, 255, 1)' }}>
        {/* Displaying the logo */}
        <img src={companyLogo} alt={company} className="w-12 h-12 object-contain" />
        <div className="flex flex-col flex-1">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">{company} • {location}</p>
            <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">Full-Time</span>
                <span className="px-3 py-1 text-xs bg-orange-100 text-orange-500 rounded-full">Marketing</span>
                <span className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">Design</span>
            </div>
        </div>
    </div>
);

const Ljobs = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">
                        Latest <span className="text-blue-500">jobs open</span>
                    </h2>
                    <a href="#" className="text-blue-500 hover:underline flex items-center gap-1">
                        Show all jobs →
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                        <JobCard key={job.id} {...job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ljobs;
