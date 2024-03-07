"use client"

import React from 'react'
import SectionHeading from './sectionHeading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from 'react-intersection-observer';

type ExperienceElementProps = {
    item: {
        date: string
        icon: React.ReactNode
        title: string
        company: string
        location: string
        description: string
    }
}

const ExperienceElement = ({item }: ExperienceElementProps) => {
    const { ref, inView } = useInView({ threshold: 0.8, triggerOnce:true})
    return (
        <div ref={ref} className='vertical-timeline-element'>
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background:'#f3f4f6',
                    boxShadow: 'none',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                    borderRight: '0.4rem solid #9ca3af',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    background: 'white',
                    fontSize: '1.5rem',
                }}
            >
                <h3 className='font-semibold capitalize'>{item.title} | {item.company} </h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700'>
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default function Experience() {
    const { ref } = useSectionInView('Experience')
    return (
        <section
            ref={ref}
            id='experience'
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <ExperienceElement key={index} item={item} />
                ))}
            </VerticalTimeline>
        </section>
    )
}
