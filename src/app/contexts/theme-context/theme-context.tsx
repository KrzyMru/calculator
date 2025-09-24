import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Theme, ThemeContextProps } from "./types";

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    setTheme: () => {},
});

const ThemeProvider = ({ children } : { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme && (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'purple')) 
            return savedTheme;
        else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;   
            return prefersDark ? 'dark' : 'light';
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); 
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };