"use client"

import React, {useRef} from 'react';
import {projectsData} from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImEmbed2 } from 'react-icons/im';
import { FaCirclePlay } from 'react-icons/fa6';

type ProjectProps = typeof projectsData[number];

export default function Project({title, description, tags, imageUrl, codeUrl, demoUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div ref={ref} style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}
        className='mb-3 sm:mb-8 last:mb-0 group'>
            <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[23rem] rounded-lg \
             sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>

                    <div className='flex flex-col sm:flex-row items-center gap-4 my-4 text-lg font-medium sm:mt-auto group-even:justify-end'>
                        <a className='bg-white p-4 text-gray-700 \
                        outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10  cursor-pointer \
                        flex items-center gap-2 rounded-full dark:bg-white/10 dark:text-white/60' href={codeUrl} target='_blank'>
                            <ImEmbed2/>
                        </a>

                        <a className='bg-white p-4 text-gray-700 flex \
                        outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition border border-black/10  cursor-pointer \
                        items-center text-[1.35rem] gap-2 rounded-full dark:bg-white/10 dark:text-white/60' href={demoUrl} target='_blank'>
                            <FaCirclePlay/>
                        </a>
                    </div>

                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {
                            tags.map((tag, index) => (
                                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full" key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>


                <Image src={imageUrl} alt='Project I worked on' quality={95} className='hidden sm:block absolute top-20 -right-7 w-[18.25rem] h-[18.25rem] \ 
                rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-7 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 \
                transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 object-cover'/>
            </section>
        </motion.div>

    )
}
