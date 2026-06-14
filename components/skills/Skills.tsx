import { useState } from 'react';
import { skill } from '@/types/main';
import SkillCard from "./SkillCard"
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

interface Props {
    skillData: skill[]
}

const Skills = ({ skillData }: Props) => {

    const categories = Array.from(new Set(skillData.map((s: { category: any; }) => s.category)))
    const [category, setCategory] = useState(categories[0])

    return (
        <SectionWrapper id='skills' className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0">
            <h2 className="text-4xl mt-20 text-center">Tech Stack</h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 lg:w-1/3 mx-auto mt-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-2 flex flex-nowrap items-center gap-3 overflow-x-auto scroll-hide rounded-full shadow-md"
            >
                {categories.map((c: string, i: number) => (
                    <span
                        key={i}
                        onClick={() => setCategory(c)}
                        className={`p-1.5 md:p-2 text-sm md:text-base whitespace-nowrap flex-shrink-0 text-center cursor-pointer rounded-full ${category.toLowerCase() === c.toLowerCase()
                            ? "bg-violet-600 text-white shadow-lg"
                            : "hover:bg-slate-100 hover:dark:bg-slate-800"
                            } transition-all capitalize`}
                    >
                        {c}
                    </span>
                ))}
            </motion.div>

            <motion.div
                layout
                className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8"
            >
                {skillData.filter((s: skill) => s.category.toLowerCase() === category.toLowerCase()).map((s: any, i: number) => (
                    <SkillCard key={i} {...s} />
                ))}
            </motion.div>

        </SectionWrapper>
    )
}

export default Skills