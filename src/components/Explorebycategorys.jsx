// import React from "react";

// import DesignIcon from '../assets/design.svg';
// import SalesIcon from '../assets/sales.svg';
// import MarketingIcon from '../assets/marketing.svg';
// import FinanceIcon from '../assets/finance.svg';
// import TechnologyIcon from '../assets/technology.svg';
// import EngineeringIcon from '../assets/engineering.svg';
// import BusinessIcon from '../assets/business.svg';
// import HumanResourceIcon from '../assets/humen.svg';

// const categories = [
//     { name: "Design", jobs: 235, icon: DesignIcon },
//     { name: "Sales", jobs: 756, icon: SalesIcon },
//     { name: "Marketing", jobs: 140, icon: MarketingIcon, highlighted: true },
//     { name: "Finance", jobs: 325, icon: FinanceIcon },
//     { name: "Technology", jobs: 436, icon: TechnologyIcon },
//     { name: "Engineering", jobs: 542, icon: EngineeringIcon },
//     { name: "Business", jobs: 211, icon: BusinessIcon },
//     { name: "Human Resource", jobs: 346, icon: HumanResourceIcon },
// ];

// export default function ExploreCategories() {
//     return (
//         <section
//             className="max-w-[1440px] bg-white pt-18 px-[124px] mx-auto"
//             style={{ minHeight: 633 }}
//         >
//             {/* Title and button container */}
//             <div
//                 className="max-w-[1192px] flex justify-between items-center mb-12"
//                 style={{ height: 53 }}
//             >
//                 <h2 className="text-4xl font-bold w-[484px]">
//                     Explore by <span className="text-blue-500">category</span>
//                 </h2>
//                 <a
//                     href="#"
//                     className="text-blue-600 hover:underline flex items-center justify-center w-[144px] h-[26px] gap-4"
//                 >
//                     Show all jobs <span>→</span>
//                 </a>
//             </div>

//             {/* Categories grid */}
//             <div
//                 className="max-w-[1192px] grid grid-cols-4"
//                 style={{
//                     gap: 32,
//                     // removed fixed height to allow natural height based on cards
//                 }}
//             >
//                 {categories.map((cat, idx) => (
//                     <div
//                         key={idx}
//                         className={`flex flex-col rounded-xl border cursor-pointer transition-all
//               ${cat.highlighted ? "bg-blue-600 text-white" : "hover:shadow-md"}`}
//                         style={{
//                             width: 274,
//                             height: 214,
//                             padding: 32,
//                             borderWidth: 1,
//                             boxSizing: "border-box",
//                             gap: 12,
//                         }}
//                     >
//                         <div
//                             className="flex items-center justify-center"
//                             style={{ width: 90, height: 75 }}
//                         >
//                             <img src={cat.icon} alt={`${cat.name} icon`} style={{ width: 48, height: 48 }} />
//                         </div>
//                         <div className="flex flex-col gap-1" style={{ width: "100%", height: 70 }}>
//                             <h3 className="text-xl font-semibold">{cat.name}</h3>
//                             <p className="text-sm opacity-70">{cat.jobs} jobs available →</p>
//                         </div>

//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// } 

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
