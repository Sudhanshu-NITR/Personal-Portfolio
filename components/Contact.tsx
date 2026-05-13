import axios from "axios";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper"
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
            toast.warning("Empty Fields!")
            return false;
        }

        setLoading(true);
        axios.post("/api/mail", {
            name: values.name,
            email: values.email,
            message: values.message,
        }).then((res) => {
            if (res.status === 200) {
                setValues({ name: "", email: "", message: "" });
                setLoading(false);
                setSuccess(true);
                toast.success(res.data.message)
            } else {
                setLoading(false);
                toast.error(res.data.message)
            }
        }).catch((err) => {
            setLoading(false);
            toast.error(err.message)
        });
    };

    const handleChange = (e: | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValues((prevInput) => ({
            ...prevInput,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
            <h2 className="text-center text-4xl">Contact Me</h2>
            <ToastContainer />

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl p-4 md:p-8"
            >
                {/* blurDataURL="https://i.imgur.com/owZdhjA.png" */}
                <Image unoptimized={true} quality={100} alt="contact" src="/contact.png" className="hidden md:block w-1/2 h-full object-cover" width={1000} height={1000} />
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold">Get in touch</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm md:text-base mt-2">My inbox is always open! 💌 Whether you&apos;ve got a burning question or want to drop a friendly &quot;hello&quot;, I&apos;m all ears!👂 Let&apos;s chat! 🎉</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl">
                        <input onChange={handleChange} required value={values.name} name="name" type="text" placeholder='Full Name *' className="outline-none bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl py-3 px-4 focus:ring-2 focus:ring-violet-600 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm" />
                        <input onChange={handleChange} required value={values.email} name="email" type="email" placeholder='Email *' className="outline-none bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl py-3 px-4 focus:ring-2 focus:ring-violet-600 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm" />
                        <textarea onChange={handleChange} required value={values.message} name="message" rows={4} placeholder='Message *' className="outline-none resize-none bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 placeholder-slate-400 dark:placeholder-slate-500 rounded-xl py-3 px-4 focus:ring-2 focus:ring-violet-600 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm" />
                        <button disabled={loading} className="px-6 py-3 bg-violet-600 hover:bg-violet-700 hover:shadow-lg transition-all text-white rounded-xl disabled:cursor-not-allowed self-end mt-2 font-medium">
                            {loading ? <span className="flex items-center gap-2">Say Hello <BiLoaderAlt className="animate-spin" /></span> : "Say Hello 👋"}
                        </button>
                    </form>
                </div>
            </motion.div>
        </SectionWrapper >
    )
}

export default Contact
