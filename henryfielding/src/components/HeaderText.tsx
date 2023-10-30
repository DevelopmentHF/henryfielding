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
                <motion.div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text9xl"
                            key={index}
                            initial={{ fontWeight: 'normal' }}
                            whileHover={{ fontWeight: 'bold', scale: 1.1}}>
                    {char}
                </motion.div>
            ))}
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text9xl">&nbsp;</span> {/* This is a space */}
            {lastNameChars.map((char : string, index : number) => (
                <motion.div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text9xl"
                            key={index}
                            initial={{ fontWeight: 'normal' }}
                            whileHover={{ fontWeight: 'bold', scale: 1.1 }}>
                    {char}
                </motion.div>
            ))}
        </>
    );
}
