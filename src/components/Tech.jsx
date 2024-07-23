import { RiReactjsLine } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { RiBlenderLine } from "react-icons/ri";
import { SiVirtualbox } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import {motion} from "framer-motion";

const moveIcons = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Tech = () => {
    return (
        <div className="border -b border-neutral-800 pb-24">
           <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
            
                Tech Stack
    
            </motion.h2>
           <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                    variants={moveIcons(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-5xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={moveIcons(4)}
                    initial="initial"
                    animate="animate" 
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <PiFileSql className="text-5xl text-black-400"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-5xl text-orange-300"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-5xl text-yellow-400"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoSpringBoot className="text-5xl text-green-400"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiVirtualbox className="text-5xl text-white-400"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-5xl text-cyan-400"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(2.25)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaMeta className="text-5xl text-blue-600"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaUnity className="text-5xl text-white-400"/>
                </motion.div >
                <motion.div 
                    variants={moveIcons(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCsharp className="text-5xl text-purple-400"/>
                </motion.div >
                <motion.div  
                    variants={moveIcons(2.25)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiBlenderLine className="text-5xl text-orange-400"/>
                </motion.div >
           </motion.div>
        </div>
    );
};

export default Tech;