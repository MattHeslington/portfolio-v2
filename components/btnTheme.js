import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonOutline, SunnyOutline } from 'react-ionicons'

const ThemeButton = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="focus:outline-none">
            {theme === 'light' ? (
            <MoonOutline
                color={'#000000'}
                height="24px"
                width="24px"
            />
            ) : (
            <SunnyOutline
                color={'#FFFFFF'}
                height="24px"
                width="24px"
            />
            )}
        </button>
    )
}

export default ThemeButton