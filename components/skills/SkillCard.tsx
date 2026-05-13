import Image from "next/image"
import { useEffect, useState } from 'react'
import { FastAverageColor } from 'fast-average-color';
import { skill } from "@/types/main";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Skill = ({ name, image }: skill) => {

    const { theme } = useTheme();
    const [bgColor, setBgColor] = useState("")
    useEffect(() => {
        new FastAverageColor().getColorAsync(image)
            .then(color => {
                const rgba = color.rgb.split(')')
                setBgColor(rgba[0] + ',0.07)')
            })
            .catch(e => {
                console.log(e);
            })
    }, [image])

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center gap-2 group"
        >
            <div title={name} style={{ backgroundColor: bgColor }}
                className={"h-20 w-20 md:h-24 md:w-24 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-sm border border-slate-200 dark:border-slate-800"}>
                <Image alt="skill" width={100} height={100} className={`h-12 w-12 md:h-14 md:w-14 object-contain ${theme === 'dark' && (name === "GitHub" || name === "Vercel" || name === "NextJS" || name === "ExpressJS" ? 'invert' : 'invert-0')}`} src={image} />
            </div>
            <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-300 group-hover:text-violet-600 transition-colors">{name}</p>
        </motion.div>
    )
}

export default Skill