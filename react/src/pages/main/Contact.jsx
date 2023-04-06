import React from 'react'
import MainFoot from '../../Components/MainFoot'
import MainNav from '../../Components/MainNav'
import call from '../../img/call.jpg'
import Load from '../../components/loading'
import { useState } from 'react'
import { useEffect } from 'react'



const Contact = () => {


    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <>
            {
                loading ?
                    <Load />
                    :
                    <>
                        <MainNav />
                        <section class=" pt-12 bg-[#270657]">
                            <div class="container px-6 py-12 mx-auto">
                                <div class="text-center ">
                                    <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p>

                                    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">We’d love to hear from you</h1>


                                </div>

                                <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 sm:grid-cols-2 ">
                                    <div class="grid grid-rows-1 gap-12 mt-10 lg:grid-rows-2 sm:grid-rows-2 ">
                                        <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
                                            <span class="inline-block p-3 text-white rounded-lg bg-blue-100/80 dark:bg-fuchsia-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                            </span>

                                            <h2 class="mt-4 text-base font-medium text-gray-800 ">Email us</h2>
                                            <p class="mt-2 text-sm text-gray-500 dark:text-red-700">Speak to our friendly team.</p>
                                            <p class="mt-2 text-lg text-fuchsia-700">info@calypsoshipping.com</p>
                                        </div>


                                        <div class="p-4 rounded-lg bg-blue-50 md:p-6 ">
                                            <span class="inline-block p-3 text-white rounded-lg bg-blue-100/80 dark:bg-fuchsia-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                </svg>
                                            </span>

                                            <h2 class="mt-4 text-base font-medium text-gray-800 ">Call us</h2>
                                            <p class="mt-2 text-sm text-gray-500 dark:text-red-700">Mon-Fri from 8am to 5pm.</p>
                                            <p class="mt-2 text-lg text-fuchsia-700">+1 (876) 791-9541</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={call} alt="" />
                                        <p class="mt-3 text-gray-500 text-center dark:text-gray-400">Chat to our friendly team.</p>
                                        <div className="mt-2 flex place-content-center space-x-6 mx-auto">
                                            <div>
                                                <a className="text-indigo-200 hover:text-sky-300" href="https://www.facebook.com/profile.php?id=100086224426556">
                                                    <span className="sr-only">Facebook</span>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div>
                                                <a className="text-indigo-200 hover:text-sky-300" href="https://instagram.com/calypsoshipping?igshid=YmMyMTA2M2Y=">
                                                    <span className="sr-only">Instagram</span>
                                                    <svg fill="currentColor" viewBox="0 0 24 24"
                                                        width={24}
                                                        height={24}>
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div>
                                                <span className="sr-only">Whatsapp</span>
                                                <a href="https://wa.me/message/ZL3ZQAU4RDMWA1?src=qr" target="_blank" rel="noopener noreferrer">
                                                    <i class="fa-brands text-indigo-200 hover:text-sky-300 fa-whatsapp -mt-1 text-2xl"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </section>
                        <MainFoot />
                    </>
            }
        </>
    )
}

export default Contact