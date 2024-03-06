"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{
        delay:0.175
    }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            My name is Mahdeen Abrar and I&apos;m currently in my fourth and final year at Dalhousie University for computer science!
            I&apos;m the 
            <span className='font-bold'> second highest ranking </span> student in my year and I&apos;ve been fortunate enough to be awarded a 
            <span className='italic'> number of scholarships </span> including
            the Bruce and Dorothy Rossetti Silver award, the Alient Ambassadors scholarship, and Sexton Scholar award. I&apos;m 
            <span className='font-bold'> passionate about learning </span>
            and I&apos;m looking for ways to grow every day. I love
            <span className='italic'>  technology as a whole, </span> and it&apos;s led me to experiment with mobile dev, game dev, machine 
            learning, cloud computing, 
            <span> and now </span>
            <span className='underline'>web3 development</span>.
            I&apos;m open to any opportunity to grow and 
            <span className='font-bold'> unsolved problems motivate me!</span>
        </p>

        <p>
            When 
            <span className='italic'> I&apos;m not coding</span>
            , I enjoy recording and mixing music, shooting film photography, and working out. 
            I love 
            
            <span className='font-bold'> picking up new skills </span> and hobbies so lately I&apos;ve been learning the guitar! 
            
            <span> I&apos;ve also been learning how to cook, but that&apos;s still a work in progress 😅</span>
        </p>

    </motion.section>
  )
}
