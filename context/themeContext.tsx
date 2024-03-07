"use client"
import React, {useState, useEffect, createContext} from 'react'

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark")
        }
        else{
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if(localTheme){
            setTheme(localTheme);
            if(localTheme === 'dark'){
                document.documentElement.classList.add("dark");
            }
        }

    }, []);


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
    const context = React.useContext(ThemeContext);

    if(context === null){
        throw new Error("error");
    }

    return context

}