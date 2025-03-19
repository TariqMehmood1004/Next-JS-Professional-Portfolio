// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   FaDatabase,
//   FaAws,
//   FaMobileAlt,
//   FaCode,
//   FaCogs,
//   FaPalette,
//   FaBrain,
// } from "react-icons/fa";
// import { SiFastapi } from "react-icons/si";

// const skillsData = [
//   {
//     title: "Full Stack Development",
//     icon: <FaCode />,
//     skills: ["MERN Stack", "React", "Node.js", "Django", "Laravel", "ASP.NET"],
//   },
//   {
//     title: "Mobile Development",
//     icon: <FaMobileAlt />,
//     skills: ["Flutter", "React Native", "Android & iOS"],
//   },
//   {
//     title: "Database Management",
//     icon: <FaDatabase />,
//     skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQL Server"],
//   },
//   {
//     title: "Cloud & DevOps",
//     icon: <FaAws />,
//     skills: ["AWS", "EC2", "RDS", "S3", "ELB", "Auto Scaling"],
//   },
//   {
//     title: "AI & Machine Learning",
//     icon: <FaBrain />,
//     skills: ["ML Engineer", "Deep Learning", "NLP Engineer"],
//   },
//   {
//     title: "UI/UX Design",
//     icon: <FaPalette />,
//     skills: ["Figma", "Adobe XD", "Sketch"],
//   },
//   {
//     title: "Programming Languages",
//     icon: <FaCogs />,
//     skills: ["Python", "PHP", "C++", "C#", "JavaScript"],
//   },
//   {
//     title: "API Development",
//     icon: <SiFastapi />,
//     skills: ["FastAPI", "REST API"],
//   },
// ];

// export default function SkillsSection() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="relative w-screen h-screen flex justify-center items-center">
//       <div className="absolute md:inset-0 grid grid-cols-1 md:grid-cols-2 gap-2 md:px-30">
//         {skillsData.map((category, index) => (
//           <motion.div
//             key={index}
//             initial={{ scale: 1.3, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="flex items-center bg-[#171717] justify-center text-white p-5 cursor-pointer rounded-lg relative"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             whileHover={{ scale: 0.9, rotate: -3, skewX: "3deg" }}
//           >
//             <motion.div className="text-center">
//               <motion.div
//                 className="text-2xl md:text-4xl text-blue-400 mb-3"
//                 animate={{
//                   rotate: hoveredIndex === index ? 360 : 0,
//                   transition: { duration: 0.5 },
//                 }}
//               >
//                 {category.icon}
//               </motion.div>
//               <motion.h3
//                 className="text-2xl md:text-3xl font-semibold"
//                 animate={{
//                   scale: hoveredIndex === index ? 1.2 : 1,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 {category.title}
//               </motion.h3>
//             </motion.div>

//             {hoveredIndex === index && (
//               <motion.div
//                 className="absolute inset-0 bg-[#172727] flex flex-col justify-center items-center text-center p-6 rounded-lg"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h3 className="text-2xl md:text-4xl font-bold text-white">{category.title}</h3>
//                 <div className="flex flex-wrap gap-2 mt-4 justify-center">
//                   {category.skills.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="bg-[#171717] text-white text-1xl md:text-2xl font-normal px-5 py-3 rounded-full hover:bg-blue-600 transition-all"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
