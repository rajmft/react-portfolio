import {INTRO} from "../constants";
import profilePic from "../assets/profilePicture.png";
import {motion} from "framer-motion";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: .5, delay: delay }
    }
})


const Intro = () => {
    return (
    
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        
                        RAJMFT
                    
                    </motion.h1>
                    <motion.span 
                        variants={container(.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-red-400 via-slate-700
                        to-red-600 bg-clip-text text-4xl tracking-tight text-transparent">
                        
                        Software Developer 

                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">

                        {INTRO}
                        
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{duration: 1, delay: 1.2 }}
                    className="rounded w-80 h-100 lg:w-80 lg:h-100"
                    src={profilePic} 
                    alt="profile pic"/>
                </div>
            </div>
        </div>
    </div >


    );
};

export default Intro;