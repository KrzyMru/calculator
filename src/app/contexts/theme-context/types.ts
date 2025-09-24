interface ThemeContextProps {
    theme: Theme,
    setTheme: (theme: Theme) => void,
}

type Theme = 'light' | 'dark' | 'purple';

export type { ThemeContextProps, Theme }