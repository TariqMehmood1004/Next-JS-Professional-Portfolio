
'use client';

import { Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
    {
        id: 1,
        name: "Question Bank and Paper Setter",
        description: "Visual Studio is an integrated development environment from Microsoft.It is used to develop computer programs including websites, web apps, web services and mobile apps.",
        logo: "https://i.ibb.co/JwCn3vF3/question-bank.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 2,
        "name": "Noticed Board App (Frontend & Backend)",
        "description": "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
        "logo": "https://img.icons8.com/fluency/48/visual-studio-code-2019.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 3,
        "name": "TikTok clone (Frontend)",
        "description": "Flutter is an open-source UI software development toolkit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.",
        "logo": "https://img.icons8.com/color/48/flutter.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 4,
        "name": "WhatsApp clone (Frontend)",
        "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Meta and a community of individual developers and companies.",
        "logo": "https://img.icons8.com/color/48/react-native.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 5,
        "name": "Video Player clone (Frontend)",
        "description": "React Native is an open-source mobile application framework created by Meta Platforms, Inc. It is used to develop applications for Android, iOS, Web, and UWP by enabling developers to use React along with native platform capabilities.",
        "logo": "https://img.icons8.com/color/48/react-native.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 6,
        "name": "Todo App (Frontend & Backend)",
        "description": "Xamarin is a Microsoft-owned software company that provides tools for cross-platform mobile application development. It allows developers to create native Android, iOS, and Windows apps using .NET and C#.",
        "logo": "https://img.icons8.com/color/48/xamarin.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 7,
        "name": "Messenger Clone (Frontend)",
        "description": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It is maintained by the Django Software Foundation (DSF).",
        "logo": "https://img.icons8.com/color/48/django.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 8,
        "name": " Table Generator App (Frontend & Backend)",
        "description": "Laravel is a web application framework with expressive, elegant syntax. It aims to make the development process a pleasing one for the developer without sacrificing application functionality.",
        "logo": "https://img.icons8.com/fluency/48/laravel.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 9,
        "name": "Attendance Management System App (Frontend & Backend)",
        "description": "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
        "logo": "https://img.icons8.com/color/48/php.png",
        techs: [
            "Flutter"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 10,
        "name": "Microsoft SQL Server",
        "description": "Microsoft SQL Server is a relational database management system developed by Microsoft. It is designed to handle a wide variety of data workloads, from small applications to large-scale enterprise solutions.",
        "logo": "https://img.icons8.com/color/48/microsoft-sql-server.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 11,
        "name": "MySQL",
        "description": "MySQL is an open-source relational database management system. It is a popular choice for web applications and is known for its reliability, performance, and ease of use.",
        "logo": "https://img.icons8.com/color/48/mysql.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 12,
        "name": "MongoDB",
        "description": "MongoDB is a source-available cross-platform document-oriented database program. It uses JSON-like documents with optional schemas and is classified as a NoSQL database program.",
        "logo": "https://img.icons8.com/color/48/mongodb.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 13,
        "name": "Python",
        "description": "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
        "logo": "https://img.icons8.com/color/48/python--v1.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 14,
        "name": "R",
        "description": "R is a programming language and free software environment used for statistical computing and graphics supported by the R Foundation for Statistical Computing.",
        "logo": "https://img.icons8.com/color/48/r-cute.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 15,
        "name": "NoSqlite",
        "description": "NoSqlite is a NoSQL database that is designed to be lightweight and easy to use. It is a good choice for applications that require a simple and fast database solution.",
        "logo": "https://img.icons8.com/ios/50/sqlite.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 16,
        "name": "ASP.NET",
        "description": "ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services.",
        "logo": "https://img.icons8.com/windows/32/asp.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 17,
        "name": "Desktop Development",
        "description": "Desktop development refers to the process of creating software applications that run on desktop or laptop computers. It involves using programming languages and frameworks to build applications for various operating systems.",
        "logo": "https://img.icons8.com/ios-filled/50/desktop.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 18,
        "name": "Mobile Development",
        "description": "Mobile development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves using programming languages and frameworks to build applications for various mobile platforms.",
        "logo": "https://img.icons8.com/ios-glyphs/30/google-mobile.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 19,
        "name": "iOS Development",
        "description": "iOS development is the process of creating software applications that run on Apple's iOS operating system. It involves using programming languages and frameworks to build applications for iPhones and iPads.",
        "logo": "https://img.icons8.com/ios-glyphs/30/ios-logo.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 20,
        "name": "Android Development",
        "description": "Android development is the process of creating software applications that run on Google's Android operating system. It involves using programming languages and frameworks to build applications for Android devices.",
        "logo": "https://img.icons8.com/ios-glyphs/30/android-os.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 21,
        "name": "Web Development",
        "description": "Web development is the process of creating websites and web applications. It involves using programming languages and frameworks to build applications that run on web browsers.",
        "logo": "https://img.icons8.com/color/48/backend-development--v1.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 22,
        "name": "Cloud Development",
        "description": "Cloud development is the process of creating software applications that run on cloud computing platforms. It involves using programming languages and frameworks to build applications that can be accessed over the internet.",
        "logo": "https://img.icons8.com/ios/50/cloud-development.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 23,
        "name": "API Development",
        "description": "API development is the process of creating application programming interfaces (APIs) that allow different software applications to communicate with each other. It involves using programming languages and frameworks to build APIs that can be accessed over the internet.",
        "logo": "https://img.icons8.com/ios-glyphs/30/api-settings.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
    {
        "id": 24,
        "name": "Database Management System",
        "description": "Database management system (DBMS) is software that interacts with end users, applications, and the database itself to capture and analyze data. It allows users to create, read, update, and delete data in a database.",
        "logo": "https://img.icons8.com/ios/50/data-configuration.png",
        techs: [
            "ASP.NET",
            "C#",
            "Xamarin"
        ],
        github: "https://github.com/TariqMehmood1004/Question-bank-and-paper-setter"
    },
];

const techs = [
    { id: 1, name: "ASP.NET" },
    { id: 2, name: "C#" },
    { id: 3, name: "Xamarin" },
    { id: 4, name: "Flutter" },
    { id: 5, name: "ReactJS" },
    { id: 6, name: "React Native" },
    { id: 7, name: "Xamarin" },
    { id: 8, name: "Django" },
    { id: 9, name: "Laravel" },
    { id: 10, name: "PHP" },
    { id: 11, name: "Microsoft SQL Server" },
    { id: 12, name: "MySQL" },
    { id: 13, name: "MongoDB" },
    { id: 14, name: "Python" },
    { id: 15, name: "R" },
    { id: 16, name: "NoSqlite" },
];


const ProjectsClient = () => {

    const [selectedTech, setSelectedTech] = useState<string | null>(null);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        if (selectedTech) {
            const filtered = projects.filter((project) =>
                project.techs.includes(selectedTech) // Assuming project has techs array
            );
            setFilteredProjects(filtered);
        } else {
            setFilteredProjects(projects);
        }
    }, [selectedTech, filteredProjects]);

    return (
        <section className="w-full md:px-40 py-4 md:py-16 border-t-2 border-neutral-100">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">

                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="md:my-5 md:mx-auto w-full flex flex-col md:flex-row gap-10">

                    <div className="w-full md:w-2/3 order-1 md:order-1 flex flex-col gap-5">
                        <h1 className="w-full text-4xl md:text-[8rem] gap-5">
                            <span className="font-bold clients-t1">Clients & Companies Projects</span>
                        </h1>
                        <p className="w-full text-sm md:text-2xl text-left font-normal px-0">
                            We have worked with a variety of clients and companies,
                            delivering high-quality projects that meet their needs and exceed their expectations.
                            Our team is dedicated to providing the best possible service and support to our clients,
                            ensuring that their projects are completed on time and within budget.
                        </p>
                    </div>
                </motion.section>

                {/* Tech Buttons */}
                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="w-full flex items-center justify-center gap-10">
                    <div className="container max-auto w-full p-2 px-4 rounded-full flex flex-wrap gap-3">
                        {/* Add 'All' button to reset filter */}
                        <Button
                            className="cursor-pointer bg-[#E7E7E7] text-black font-medium text-sm md:text-2xl rounded-full px-4 py-2 hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
                            onClick={() => setSelectedTech(null)}>
                            All
                        </Button>

                        {techs.map((tech) => (
                            <Button
                                key={tech.id}
                                className={`cursor-pointer ${selectedTech === tech.name ? "bg-indigo-600 text-white" : "bg-[#E7E7E7] text-black"
                                    } font-medium text-sm md:text-2xl rounded-full px-4 py-2 hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out`}
                                onClick={() => setSelectedTech(tech.name || null)}
                            >
                                {tech.name}
                            </Button>
                        ))}
                    </div>
                </motion.section>

                {/* Project Cards */}
                <div className="w-full columns-1 md:columns-3 lg:columns-4 gap-5 space-y-5">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="relative break-inside-avoid bg-pink-100 my-card border-2 group border-neutral-100 hover:bg-gray-100 rounded-lg md:mx-auto w-full flex flex-col gap-5 overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="w-full flex items-center justify-center gap-5">
                                    <Image
                                        src={project.logo}
                                        alt={project.name}
                                        width={600}
                                        height={600}
                                        loading="lazy"
                                        className="w-full object-contain transition-all duration-300 ease-in-out"
                                    />
                                </div>

                                <div className="absolute bottom-0 w-full h-0 flex-col justify-between group-hover:h-full bg-slate-900/90 text-white group-hover:p-6 md:group-hover:p-12 text-center space-y-6 md:space-y-12 opacity-100 transition-all duration-300 ease-in-out">
                                    <div className="space-y-6 md:space-y-12">
                                        <h1 className="w-full text-3xl flex items-center justify-center gap-5">
                                            <span className="font-bold text-center">{project.name}</span>
                                        </h1>
                                        <p className="w-full text-sm md:text-2xl text-center font-normal px-0 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div>
                                            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                                                {project.techs.map((tech, index) => (
                                                    <span key={index} className="bg-slate-800 text-white text-xl font-semibold px-3.5 py-1 rounded-full transition-all duration-300 ease-in-out">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full flex items-center justify-center gap-5 md:gap-10 transition-all duration-300 ease-in-out">
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button
                                                className="w-12 h-12 cursor-pointer bg-slate-800 text-black font-medium text-sm md:text-2xl rounded-full p-1 hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
                                            >
                                                <Image
                                                    src={"https://img.icons8.com/ios-glyphs/ffffff/90/github.png"}
                                                    alt={"GitHub"}
                                                    width={90}
                                                    height={90}
                                                    loading="lazy"
                                                    className="object-contain transition-all duration-300 ease-in-out" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>


            </motion.div>
        </section >
    )
}

export default ProjectsClient