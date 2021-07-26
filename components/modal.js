import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MailOutline, PersonOutline } from 'react-ionicons'
import { useNotifications } from '@mantine/notifications';
import Loading from 'components/loading'

export default function Modal({isOpen, setIsOpen, contactForm}) {

    const notifications = useNotifications();

    const [form, setForm] = useState({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
    })

    const handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setForm({...form,[name]: value})
    }

    const contentType = 'application/json'

    const [loading, setLoading] = useState(false)
    const [emailError, setEmailError] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [messageError, setMessageError] = useState(null)

    function closeModal() {
        setIsOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errs = formValidate()
        if (Object.keys(errs).length === 0) {
            postData(form)
        } else {
            //setErrors({ errs })
            alert('Error')
        }
    }

    /* Makes sure user info is filled out*/
    const formValidate = () => {
        let err = {}
        if (!form.name) setNameError('Name is required')
        if (!form.email) setEmailError('Email is required')
        if (!form.message) setMessageError('Message is required')

        return err
    }

    const postData = async (form) => {
        setLoading(true)
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(form),
            })

            // Throw error with status code in case Fetch API req failed
            if (!res.ok) {
                throw new Error(res.status)
            }
            closeModal()
            notifications.showNotification({
                title: 'Message delivered',
                message: "Thank you! I've recieved your message 🤥",
                color: 'green'
            })
        }
        catch (error) {
            notifications.showNotification({
                title: 'Delivery failure',
                message: "Your message wasn't sent. Please try again 🤥",
                color: 'red'
            })
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 dark:opacity-10 dark:bg-white" />

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl dark:bg-black rounded-2xl">
                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-black dark:text-white">Contact</Dialog.Title>
                            <div className="flex flex-col mt-2 space-y-4">

                                <div>
                                    <label htmlFor="name" className="block text-sm font-light text-black dark:text-white">Name</label>
                                    <div className="relative mt-1">
                                        <span className="absolute z-10 items-center justify-center w-8 h-full py-3 pl-3">
                                            <PersonOutline
                                                color={'#8D8FA3'}
                                                height="20px"
                                                width="20px"
                                            />
                                        </span>
                                        <input
                                            required
                                            type="email"
                                            name="name"
                                            onFocus={() => setNameError(null)}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            className="w-full px-3 py-2 pl-10 text-black border rounded dark:border-inputborder dark:bg-inputbg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:text-white"
                                        />
                                    </div>
                                    <div className="h-2 mt-0.5 text-xs text-right uppercase text-blue">{nameError}</div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-light text-black dark:text-white">Email address</label>
                                    <div className="relative mt-1">
                                        <span className="absolute z-10 items-center justify-center w-8 h-full py-3 pl-3">
                                            <MailOutline
                                                color={'#8D8FA3'}
                                                height="20px"
                                                width="20px"
                                            />
                                        </span>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            onFocus={() => setEmailError(null)}
                                            onChange={handleChange}
                                            autoComplete="email"
                                            className="w-full px-3 py-2 pl-10 text-black border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:text-white dark:border-inputborder dark:bg-inputbg"
                                        />
                                    </div>
                                    <div className="h-2 mt-0.5 text-xs text-right uppercase text-blue">{emailError}</div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-light text-black dark:text-white">Message</label>
                                    <textarea
                                        name="message"
                                        rows="3"
                                        onFocus={() => setMessageError(null)}
                                        onChange={handleChange}
                                        className="block w-full p-2 mt-1 text-black border rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm dark:border-inputborder dark:bg-inputbg dark:text-white" placeholder="Please write your message"></textarea>
                                    <div className="h-2 mt-0.5 text-xs text-right uppercase text-blue">{messageError}</div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="flex flex-row items-center justify-center h-10 px-16 text-sm font-medium text-white bg-black border border-transparent rounded-md dark:text-black dark:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">{!loading ? 'Send message' : 'loading...'}
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
      </Transition>
    )
}
