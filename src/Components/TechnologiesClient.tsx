
'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    {
        "id": 1,
        "name": "Visual Studio",
        "description": "Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs including websites, web apps, web services and mobile apps.",
        "logo": "https://img.icons8.com/fluency/48/visual-studio.png",
    },
    {
        "id": 2,
        "name": "Visual Studio Code",
        "description": "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
        "logo": "https://img.icons8.com/fluency/48/visual-studio-code-2019.png",
    },
    {
        "id": 3,
        "name": "Flutter",
        "description": "Flutter is an open-source UI software development toolkit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.",
        "logo": "https://img.icons8.com/color/48/flutter.png",
    },
    {
        "id": 4,
        "name": "ReactJS",
        "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Meta and a community of individual developers and companies.",
        "logo": "https://img.icons8.com/color/48/react-native.png",
    },
    {
        "id": 5,
        "name": "React Native",
        "description": "React Native is an open-source mobile application framework created by Meta Platforms, Inc. It is used to develop applications for Android, iOS, Web, and UWP by enabling developers to use React along with native platform capabilities.",
        "logo": "https://img.icons8.com/color/48/react-native.png",
    },
    {
        "id": 6,
        "name": "Xamarin",
        "description": "Xamarin is a Microsoft-owned software company that provides tools for cross-platform mobile application development. It allows developers to create native Android, iOS, and Windows apps using .NET and C#.",
        "logo": "https://img.icons8.com/color/48/xamarin.png",
    },
    {
        "id": 7,
        "name": "Django",
        "description": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It is maintained by the Django Software Foundation (DSF).",
        "logo": "https://img.icons8.com/color/48/django.png",
    },
    {
        "id": 8,
        "name": "Laravel",
        "description": "Laravel is a web application framework with expressive, elegant syntax. It aims to make the development process a pleasing one for the developer without sacrificing application functionality.",
        "logo": "https://img.icons8.com/fluency/48/laravel.png",
    },
    {
        "id": 9,
        "name": "PHP",
        "description": "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
        "logo": "https://img.icons8.com/color/48/php.png",
    },
    {
        "id": 10,
        "name": "Microsoft SQL Server",
        "description": "Microsoft SQL Server is a relational database management system developed by Microsoft. It is designed to handle a wide variety of data workloads, from small applications to large-scale enterprise solutions.",
        "logo": "https://img.icons8.com/color/48/microsoft-sql-server.png",
    },
    {
        "id": 11,
        "name": "MySQL",
        "description": "MySQL is an open-source relational database management system. It is a popular choice for web applications and is known for its reliability, performance, and ease of use.",
        "logo": "https://img.icons8.com/color/48/mysql.png",
    },
    {
        "id": 12,
        "name": "MongoDB",
        "description": "MongoDB is a source-available cross-platform document-oriented database program. It uses JSON-like documents with optional schemas and is classified as a NoSQL database program.",
        "logo": "https://img.icons8.com/color/48/mongodb.png",
    },
    {
        "id": 13,
        "name": "Python",
        "description": "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
        "logo": "https://img.icons8.com/color/48/python--v1.png",
    },
    {
        "id": 14,
        "name": "R",
        "description": "R is a programming language and free software environment used for statistical computing and graphics supported by the R Foundation for Statistical Computing.",
        "logo": "https://img.icons8.com/color/48/r-cute.png",
    },
    {
        "id": 15,
        "name": "NoSqlite",
        "description": "NoSqlite is a NoSQL database that is designed to be lightweight and easy to use. It is a good choice for applications that require a simple and fast database solution.",
        "logo": "https://img.icons8.com/ios/50/sqlite.png",
    },
    {
        "id": 16,
        "name": "ASP.NET",
        "description": "ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services.",
        "logo": "https://img.icons8.com/windows/32/asp.png",
    },
    {
        "id": 17,
        "name": "Desktop Development",
        "description": "Desktop development refers to the process of creating software applications that run on desktop or laptop computers. It involves using programming languages and frameworks to build applications for various operating systems.",
        "logo": "https://img.icons8.com/ios-filled/50/desktop.png",
    },
    {
        "id": 18,
        "name": "Mobile Development",
        "description": "Mobile development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves using programming languages and frameworks to build applications for various mobile platforms.",
        "logo": "https://img.icons8.com/ios-glyphs/30/google-mobile.png",
    },
    {
        "id": 19,
        "name": "iOS Development",
        "description": "iOS development is the process of creating software applications that run on Apple's iOS operating system. It involves using programming languages and frameworks to build applications for iPhones and iPads.",
        "logo": "https://img.icons8.com/ios-glyphs/30/ios-logo.png",
    },
    {
        "id": 20,
        "name": "Android Development",
        "description": "Android development is the process of creating software applications that run on Google's Android operating system. It involves using programming languages and frameworks to build applications for Android devices.",
        "logo": "https://img.icons8.com/ios-glyphs/30/android-os.png",
    },
    {
        "id": 21,
        "name": "Web Development",
        "description": "Web development is the process of creating websites and web applications. It involves using programming languages and frameworks to build applications that run on web browsers.",
        "logo": "https://img.icons8.com/color/48/backend-development--v1.png",
    },
    {
        "id": 22,
        "name": "Cloud Development",
        "description": "Cloud development is the process of creating software applications that run on cloud computing platforms. It involves using programming languages and frameworks to build applications that can be accessed over the internet.",
        "logo": "https://img.icons8.com/ios/50/cloud-development.png",
    },
    {
        "id": 23,
        "name": "API Development",
        "description": "API development is the process of creating application programming interfaces (APIs) that allow different software applications to communicate with each other. It involves using programming languages and frameworks to build APIs that can be accessed over the internet.",
        "logo": "https://img.icons8.com/ios-glyphs/30/api-settings.png",
    },
    {
        "id": 24,
        "name": "Database Management System",
        "description": "Database management system (DBMS) is software that interacts with end users, applications, and the database itself to capture and analyze data. It allows users to create, read, update, and delete data in a database.",
        "logo": "https://img.icons8.com/ios/50/data-configuration.png",
    },
];

const TechnologiesClient = () => {

    return (
        <section className="w-full md:px-40 py-4 md:py-16">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">

                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="md:my-5 md:mx-auto w-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">

                    <div className="w-full md:w-3/4 order-1 md:order-1 flex flex-col gap-5">
                        <h1 className="w-full text-4xl md:text-[8rem] flex items-center justify-center md:justify-start gap-5">
                            <span className="font-bold">Technologies</span>
                        </h1>
                        <p className="w-full text-sm md:text-2xl text-left font-normal px-0">
                            My skill set spans a wide spectrum, including C#, ASP.NET, Flutter,
                            ReactJS, React Native, Xamarin, Desktop development, Mobile Development (iOS and Android),
                            Django, Laravel, PHP, Microsoft SQL Server, MySQL, NoSqlite, MongoDB, and adept knowledge in Python and R.
                            Whether it's crafting robust desktop applications or developing seamless mobile experiences,
                            I have the expertise to transform ideas into impactful solutions.
                        </p>
                    </div>
                </motion.section>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {technologies.map((technology) => (
                        <motion.div
                            key={technology.id}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                            className="my-card border-2 group border-neutral-100 hover:bg-gray-100 rounded-lg md:mx-auto w-full flex flex-col gap-5 p-5 transition-all duration-300 ease-in-out cursor-pointer">

                            <div className="w-full flex items-center justify-center gap-5 py-2">
                                <div className="w-[5rem] h-[5rem] flex items-center justify-center bg-white rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:scale(1.2) group-hover:rotate-360">
                                    <Image
                                        src={`${technology.logo}`}
                                        alt={technology.name}
                                        width={60}
                                        height={60}
                                        className="w-[3.5rem] h-[3.5rem] object-contain rounded-full transition-all duration-300 ease-in-out group-hover:scale(1.2) group-hover:rotate-360"
                                    />
                                </div>
                            </div>

                            <h1 className="w-full text-3xl flex items-center justify-center gap-5">
                                <span className="font-bold text-center">{technology.name}</span>
                            </h1>
                            <p className="w-full text-sm md:text-2xl text-left font-normal px-0">
                                {technology.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </section>
    )
}

export default TechnologiesClient