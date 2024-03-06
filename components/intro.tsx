"use client";

import React from 'react'
import Image from "next/image"
import headshot from "@/public/headshot.jpg"
import {motion} from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                
                >
                    <Image src={headshot} alt="Mahdeen Abrar Headshot" width={192} height={192} quality={95} priority={true}
                    className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover'/>
                </motion.div>

                
                <motion.span className="text-3xl absolute bottom-0 right-0"
                
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    type:'spring',
                    stiffness: 125,
                    delay: 0.15,
                    duiration: 0.5,
                }}
                
                >
                    👋
                </motion.span>
            </div>
        </div>

        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        >
            <span className='font-bold'>Hi, I'm Mahdeen! </span>
            I'm an early career  
            <span className='font-bold'> full-stack developer </span>
            with
            <span className='font-bold'> 2 years total </span>
            of experience. I enjoy building
            <span className='italic'> apps, games, APIs, AI </span>
            <span> and anything in between. I'm highly profecient with </span>
            <span className='underline'>Java</span>
            <span>. I'm always looking for my next learning oppurtunity!</span>

        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
            delay: 0.1,
        }}
        
        >
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex \
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition \
            items-center gap-2 rounded-full '>Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition'/></Link>

            <a className='group bg-white px-7 py-3 flex \
            outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10  cursor-pointer \
            items-center gap-2 rounded-full' href='/Mahdeen_Abrar_Resume.pdf' download={true}>
                My Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
            </a>

            <a className='bg-white p-4 text-gray-700 \
            outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10  cursor-pointer \
             flex items-center gap-2 rounded-full' href='https://www.linkedin.com/in/mahdeen-abrar-982ab2231/' target='_blank'>
                <BsLinkedin/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex \
            outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10  cursor-pointer \
            items-center text-[1.35rem] gap-2 rounded-full' href='https://github.com/mabrar02' target='_blank'>
                <FaGithubSquare/>
            </a>

        </motion.div>
    </section>
  )
}
