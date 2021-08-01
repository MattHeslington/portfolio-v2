import Image from 'next/image'
import Link from 'next/link'
import Avatar from 'assets/avatar.jpg'

export default function Logo() {
    return (
        <Link href="/">
            <a>
                <div className="flex flex-row items-center space-x-3">
                    <Image src={Avatar} alt="picture of me" width={40} height={40} className="w-10 h-10 rounded-full"/>
                        <div className="flex flex-col items-start">
                        <span className="text-lg font-bold tracking-tight text-black dark:text-white">Matt Heslington</span>
                        <span className="text-base tracking-tight text-black dark:text-white">Fullstack Developer</span>
                    </div>
                </div>
            </a>
        </Link>
    )
}
