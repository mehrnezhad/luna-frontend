"use client";
import { HiOutlineSun , HiOutlineMoon } from "react-icons/hi2";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcherMobile() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
    <div className='inline-flex dark:hidden items-center gap-x-2 text-orange-400 dark:text-orange-300'>
       <HiOutlineMoon size={20}/>
      
        تم تیره
    </div>

    <div className='dark:inline-flex hidden items-center gap-x-2 text-orange-400 dark:text-orange-300'>
        <HiOutlineSun size={20} />
        تم روشن
    </div>
</div>

  )
};