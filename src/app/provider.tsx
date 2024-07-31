'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
const Provider = ({ children }: { children: React.ReactNode }) => {
    return (

        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export default Provider
