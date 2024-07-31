"use client";
import { HiOutlineSun , HiOutlineMoon } from "react-icons/hi2";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (

      <div className="cursor-pointer py-4 flex items-center" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <div className='inline-block dark:hidden'>
          <HiOutlineMoon size={'32px'}/>
        
        </div>
        <div className='hidden dark:inline-block'>
          <HiOutlineSun size={'32px'}/>
        </div>
      </div>


  )
};