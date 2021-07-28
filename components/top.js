import SwitchTheme from 'components/switchTheme'
import Logo from 'components/logo'

export default function top() {
    return (
        <div className="container sticky top-0 z-10 flex items-center justify-between h-20 px-5 mx-auto bg-white border-b border-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur-sm dark:border-black">
            <Logo />
            <SwitchTheme/>
        </div>
    )
}