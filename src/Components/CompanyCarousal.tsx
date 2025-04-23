"use client";

import Image from 'next/image';
import React from 'react';

const logos = [
    'client-1',
    'client-2',
    'client-3',
    'client-4',
    'client-5',
    'client-6',
    'cui',
    'emerson',
    'kics-2',
    'python',
    'vs',
    'youtube',
];

const CompanyCarousal = () => {
    return (
        <main className="company-carousal relative flex flex-col justify-center overflow-hidden">
            <div className="w-full container mx-auto px-4 md:px-6 py-24 min-h-[200px]">
                <div className="text-center">
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll [&_li]:mx-4 [&_img]:max-w-none">
                            {[...logos, ...logos].map((logo, index) => (
                                <li key={index}>
                                    <Image
                                        src={`/logo/${logo}.png`}
                                        alt={logo}
                                        width={120}
                                        height={120}
                                        className="w-[120px]"
                                        unoptimized
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CompanyCarousal;
