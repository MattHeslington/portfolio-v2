import { useState } from 'react'
import Lottie from 'react-lottie'
import codeAnim from 'components/anim/codeAnim.json'
import codeAnimDark from 'components/anim/codeAnimDark.json'
import Container from 'components/container'
import Modal from 'components/modal'

export default function Splash() {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const contactForm = {
        name: '',
        email: '',
        message: '',
    }

    const animOptions = {
        loop: true,
        autoplay: true,
        animationData: codeAnim,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const animOptionsDark = {
        loop: true,
        autoplay: true,
        animationData: codeAnimDark,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
        <Container>
            <div className="flex flex-col items-start justify-center w-full h-186">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 2xl:w-2/3">
                        <h1 className="font-extrabold leading-tight tracking-tighter text-65xl md:text-7xl lg:text-6xl 2xl:text-8xl xl:text-7xl md:pr-8">I love building apps using <span className="gradient animate-flow">beautiful</span> code.</h1>
                        <p className="w-3/4 mt-4 text-lg font-light text-accent-7 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <button
                            onClick={openModal}
                            className="h-10 px-16 mt-8 font-medium text-white bg-black rounded-md dark:text-black dark:bg-white focus:outline-none">Contact
                        </button>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 2xl:w-1/3" style={{zIndex: '0'}}>
                        <div className="hidden dark:block">
                            <Lottie options={animOptions}
                                height={400}
                                width={550}
                            />
                        </div>
                        <div className="block dark:hidden" style={{zIndex: '0'}}>
                            <Lottie options={animOptionsDark}
                                height={400}
                                width={550}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Container>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} contactForm={contactForm}/>
        </>
    )
}
