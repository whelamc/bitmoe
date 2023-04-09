"use client"
import { useTheme } from "next-themes";
import { useEffect,useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <>
      <button className="rounded-lg h-full px-4 py-2 hover:bg-endeavour-300 dark:text-gray-500 dark:hover:bg-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme=="dark"?<FaRegSun />:<FaRegMoon />}
      </button>
    </>
  );
}
