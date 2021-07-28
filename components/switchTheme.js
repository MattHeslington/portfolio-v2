import { useContext, useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'

import ColorSchemeContext from 'lib/ColorSchemeContext';


const SwitchTheme = () => {
    //const [mounted, setMounted] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    //useEffect(() => setMounted(true), [])

    //if (!mounted) return null

    const colorSchemeContext = useContext(ColorSchemeContext);
    const dark = colorSchemeContext.colorScheme === 'dark';


    function onChange() {
        setEnabled(!enabled)
        setTheme(theme === 'dark' ? 'light' : 'dark')
        colorSchemeContext.onChange(dark ? 'light' : 'dark')
    }

    return (
        <div className="py-16">
        <Switch
        checked={enabled}
        onChange={onChange}
        className={`bg-black dark:bg-white relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white dark:bg-black shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      </div>
    )
}

export default SwitchTheme