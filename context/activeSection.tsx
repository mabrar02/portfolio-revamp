"use client"

import React, {useState, createContext, useContext} from 'react'
import {links} from "@/lib/data"
import type { SectionName } from '@/lib/types'

type ActiveSectionProps = {
    children: React.ReactNode
}
type ActiveSectionContextProps = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;

}

export const ActiveSectionContext = createContext<ActiveSectionContextProps | null>(null);

export default function ActiveSection({
    children,
}: ActiveSectionProps) {
const [activeSection, setActiveSection] = useState<SectionName>('Home');
const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
  
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if(context === null) {
        throw new Error("error");
    }

    return context;
}
