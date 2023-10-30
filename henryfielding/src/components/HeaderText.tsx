'use client';
import { motion } from "framer-motion"

interface FullName {
    firstName: string,
    lastName: string,
}

export default function HeaderText(props:FullName) {
    const firstNameChars : string[] = props.firstName.split('');
    const lastNameChars : string[] = props.lastName.split('');

    return (
        <>
            {firstNameChars.map((char : string, index : number) => (
                <motion.div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl"
                            key={index}
                            initial={{ fontWeight: 'normal' }}
                            whileHover={{ fontWeight: 'bold', scale: 1.1}}>
                    {char}
                </motion.div>
            ))}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl">&nbsp;</span> {/* This is a space */}
            {lastNameChars.map((char : string, index : number) => (
                <motion.div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text8xl"
                            key={index}
                            initial={{ fontWeight: 'normal' }}
                            whileHover={{ fontWeight: 'bold', scale: 1.1 }}>
                    {char}
                </motion.div>
            ))}
        </>
    );
}
