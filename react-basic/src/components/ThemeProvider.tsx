import { useState, createContext, } from "react";
import type { ReactNode } from "react";
import { useContext } from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

// Context を作成（初期値は undefined で型を安全に）
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState("light");

    // 現在のモードを反転
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
