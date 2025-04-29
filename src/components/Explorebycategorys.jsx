

import React from "react";

import DesignIcon from '../assets/design.svg';
import SalesIcon from '../assets/sales.svg';
import MarketingIcon from '../assets/marketing.svg';
import FinanceIcon from '../assets/finance.svg';
import TechnologyIcon from '../assets/technology.svg';
import EngineeringIcon from '../assets/engineering.svg';
import BusinessIcon from '../assets/business.svg';
import HumanResourceIcon from '../assets/humen.svg';

const categories = [
    { name: "Design", jobs: 235, icon: DesignIcon },
    { name: "Sales", jobs: 756, icon: SalesIcon },
    { name: "Marketing", jobs: 140, icon: MarketingIcon, highlighted: true },
    { name: "Finance", jobs: 325, icon: FinanceIcon },
    { name: "Technology", jobs: 436, icon: TechnologyIcon },
    { name: "Engineering", jobs: 542, icon: EngineeringIcon },
    { name: "Business", jobs: 211, icon: BusinessIcon },
    { name: "Human Resource", jobs: 346, icon: HumanResourceIcon },
];

export default function ExploreCategories() {
    return (
        <section className="max-w-[1440px] bg-white pt-10 px-4 md:px-8 lg:px-[124px] mx-auto">
            {/* Title */}
            <div className="max-w-[1192px] mb-6 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                    Explore by <span className="text-blue-500">category</span>
                </h2>
            </div>

            {/* Categories grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-[32px] mb-6">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-row md:flex-col items-center rounded-xl border cursor-pointer p-4 md:p-6 transition-all
                            ${cat.highlighted ? "bg-blue-600 text-white" : "hover:shadow-md"}`}
                    >
                        {/* Logo */}
                        <div className="flex items-center justify-center w-16 h-16 md:w-auto md:h-auto mb-0 md:mb-4">
                            <img src={cat.icon} alt={`${cat.name} icon`} className="w-10 h-10" />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-1 ml-4 md:ml-0">
                            <h3 className="text-base md:text-xl font-semibold">{cat.name}</h3>
                            <p className="text-xs md:text-sm opacity-70">{cat.jobs} jobs available →</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* "Show all jobs" button at bottom */}
            <div className="flex justify-start md:justify-end">
                <a
                    href="#"
                    className="text-blue-600 hover:underline flex items-center gap-2 text-sm md:text-base"
                >
                    Show all jobs <span>→</span>
                </a>
            </div>
        </section>
    );
}
