'use client';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FiSun, FiMoon } from 'react-icons/fi'
import { FaNodeJs } from 'react-icons/fa'
import { CgClose, CgMenuRight } from 'react-icons/cg'

export default function Header({ logo }: { logo: string }) {

    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const updateScroll = () => {
            window.scrollY >= 90 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', updateScroll)
    }, [])


    const navs = ['home', 'about', 'projects', 'experience', 'contact']

    return (
        <header className={`backdrop-filter backdrop-blur-lg ${scroll ? 'border-b bg-white/70 shadow-sm' : 'border-b-0'} dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 z-30 min-w-full flex flex-col fixed transition-all duration-300`}>
            <nav className='lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between'>

                <Link href={'/'} className='2xl:ml-6 hover:text-violet-700 hover:dark:text-violet-500 transition-colors duration-300'>
                    {logo === 'Sudhanshu Kadam' ? <span className='text-lg font-medium'>{logo.split(' ')[0]}.dev</span>: <FaNodeJs size={28} />}
                </Link>

                <ul className='flex items-center gap-8'>
                    {navs.map((e, i) => (
                        <li key={i}>
                            <ScrollLink
                                className='hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer'
                                to={e}
                                offset={-60}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {e}
                            </ScrollLink>
                        </li>
                    ))}
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='hover:bg-gray-100 hover:dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors'>
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </span>
                </ul>
            </nav>

            <nav className='p-4 flex sm:hidden items-center justify-between'>
                {logo === 'Sudhanshu Kadam' ? <FaNodeJs size={28} /> : <span className='text-lg font-medium'>{logo.split(' ')[0]}</span>}
                <div className='flex items-center gap-4'>
                    <span
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className='bg-gray-100 dark:bg-violet-700 p-1.5 rounded-full cursor-pointer transition-colors'>
                        {theme === 'dark' ? <FiSun /> : <FiMoon />}
                    </span>
                    <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
                </div>
            </nav>

            <div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex flex-col p-4 gap-5 bg-[#f4f4f5]/95 backdrop-filter backdrop-blur-sm dark:bg-[#030014]/95 w-3/4">
                    <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />

                    {navs.slice(0, 4).map((e) => (
                        <ScrollLink
                            key={e}
                            className='hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer'
                            to={e}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {e}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to='contact'
                        offset={-60}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavCollapse(true)}
                        className='px-6 py-1.5 rounded-md bg-violet-600 hover:bg-violet-700 text-white text-center'>
                        Contact
                    </ScrollLink>
                </div>
            </div>

        </header>
    )
}