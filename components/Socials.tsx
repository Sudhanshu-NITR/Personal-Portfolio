import React from 'react';
import Link from 'next/link';
import * as Fa from 'react-icons/fa';
import { social } from '@/types/main';
// import { IconType } from '../node_modules/react-icons/lib'

const Socials = ({ socials }: { socials: social[] }) => {

    // const components = Object.values(Fa);
    // console.log(components[0])

    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
            {socials.map((s: social) => {
                // const { icon } = s;
                // const iconIndex = components.indexOf(icon : IconType)
                // const Icon = components[`Fa${icon}`]
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} className="grid place-items-center p-3 hover:-translate-y-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white transition-all shadow-sm">
                        {
                            //@ts-ignore
                            React.createElement(Fa[`${s.icon}`])
                        }
                        {/* <Icon /> */}
                    </Link>
                )
            })}
        </section>
    )
}

export default Socials