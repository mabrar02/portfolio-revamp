"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function Contact() {

    const {ref} = useSectionInView("Contact");
  return (
    <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true
    }}
    
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-5'>Lets work together! Reach me at <a className='underline' href='mailto:mahdeen02@gmail.com' target='_blank'>mahdeen02@gmail.com </a> or fill out the form below.</p>

        <form className='mt-10 flex flex-col'>
            <input placeholder='Your email' className="h-14 px-4 rounded-lg border border-black/10" type='email' />
            <textarea placeholder="Your message" className='h-52 my-3 rounded-lg border border-black/10 p-4'/>
            <button type="submit" className='group h-[3rem] w-[8rem] bg-gray-900 \
             text-white rounded-full outline-none transition-all flex items-center \
             focus:scale-110 hover:scale-110 active:scale-105 hvoer:bg-gray-950\
             justify-center gap-2'>
                Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
            </button>
        </form>
    </motion.section>
  )
}
