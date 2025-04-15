"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
    return (
        <section className="w-full md:h-screen md:px-40">
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="font-[family-name:var(--font-geist-sans)] flex flex-col gap-8">

                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="md:my-5 md:mx-auto w-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">

                    <div className="flex order-1 md:order-1 justify-center items-center">

                        {/* Clickable Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
                            onClick={() => { }}
                        >
                            <Image
                                src="/features-1.png"
                                alt="Features Picture"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </div>

                    <div className="w-full md:w-3/4 order-1 md:order-1 flex flex-col gap-5">
                        <h1 className="w-full text-4xl md:text-[8rem] flex items-center justify-center md:justify-start gap-5">
                            <span className="font-bold">Features</span>
                        </h1>
                        <p className="w-full text-sm md:text-2xl text-left font-normal px-0">
                            Welcome to the world of <strong>cutting-edge technology</strong>, where innovation meets expertise!
                            I am a <strong>dynamic Software Engineer</strong>, proficient in a diverse array of technologies, and I bring a unique blend of programming skills coupled with a keen eye for detail.
                            My skill set spans a wide spectrum, including <strong>C#, ASP.NET, Flutter, ReactJS, React Native, Xamarin, Desktop development, Mobile Development (iOS and Android), Django, Laravel, PHP, Microsoft SQL Server, MySQL, NoSqlite, MongoDB</strong>, and adept knowledge in <strong>Python and R</strong>.
                            Whether it's crafting robust desktop applications or developing seamless mobile experiences, I have the expertise to <strong>transform ideas into impactful solutions</strong>.
                        </p>
                        <div className="w-full flex flex-col gap-5">
                            <h2 className="text-sm md:text-4xl text-left font-bold px-0 text-gray-500">Android Studio Development</h2>
                            <ul className="text-sm md:text-2xl text-left font-normal px-0 list-disc list-inside">
                                <li>Our development with Android Studio is proficient and experienced.</li>
                                <li>Flutter development</li>
                                <li>Kotlin development</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="md:my-3 md:px-10 w-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">

                    <div className="order-2 md:order-1 flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-sm md:text-4xl text-left font-bold px-0 text-gray-500">Visual Studio & Visual Studio Code</h2>
                            <p className="text-sm md:text-2xl text-left font-normal px-0">Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs including websites, web apps, web services and mobile apps.</p>
                            <ul className="text-sm md:text-2xl text-left font-normal px-0 list-disc list-inside">
                                <li>Our development with Visual Studio is proficient and experienced.</li>
                                <li>Flutter development</li>
                                <li>Kotlin development</li>
                                <li>Xamarin development</li>
                                <li>Desktop development</li>
                                <li>Mobile development</li>
                                <li>Web development</li>
                            </ul>
                        </div>
                    </div>

                    <div className="order-1 md:order-1 flex justify-center items-center">

                        {/* Clickable Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
                            onClick={() => { }}
                        >
                            <Image
                                src="/features-2.png"
                                alt="Features Picture"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="md:my-5 md:mx-auto w-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">

                    <div className="flex justify-center items-center">

                        {/* Clickable Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
                            onClick={() => { }}
                        >
                            <Image
                                src="/features-3.png"
                                alt="Features Picture"
                                width={700}
                                height={700}
                            />
                        </motion.div>
                    </div>

                    <div className="w-full flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-sm md:text-4xl text-left font-bold px-0 text-gray-500">Git & Github</h2>
                            <p className="text-sm md:text-2xl text-left font-normal px-0">GitHub, Inc. is an AI-powered developer platform that allows developers to create, store, manage and share their code.</p>
                            <ul className="text-sm md:text-2xl text-left font-normal px-0 list-disc list-inside">
                                <li> My experience with Git and GitHub is excellent.</li>
                                <li> Work with GitHub</li>
                                <li> Work with Git</li>
                                <li> 54+ Projects</li>
                                <li> 100+ Commits</li>
                                <li> 50+ Stars</li>
                                <li> 10+ forks</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>


                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } }}
                    className="md:my-3 md:px-10 w-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-10">

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-sm md:text-4xl text-left font-bold px-0 text-gray-500">Python Development</h2>
                            <p className="text-sm md:text-2xl text-left font-normal px-0">Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.</p>
                            <ul className="text-sm md:text-2xl text-left font-normal px-0 list-disc list-inside">
                                <li> My experience with Python is excellent.</li>
                                <li> Work with Python</li>
                                <li> Learn Python</li>
                                <li> 100+ Projects</li>
                                <li> Python based Tumigo Language</li>
                                <li> Django Framework</li>
                                <li> Django & MongoDB</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">

                        {/* Clickable Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
                            onClick={() => { }}
                        >
                            <Image
                                src="/features-4.png"
                                alt="Features Picture"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </div>
                </motion.section>

            </motion.div>
        </section>
    )
}

export default Features