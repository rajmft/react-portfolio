 import {CONTACT} from "../constants";
 import {motion} from "framer-motion";
 
 const Contact = () => {
    return (
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 2 }}
            className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">
                Get In Touch
            </h1>
            <div className="text-center tracking-tighter">
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>
            </div>
        </motion.div>
    );
 };

 export default Contact;