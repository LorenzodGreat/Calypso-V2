import { useState } from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';
import axios from "../../axios-client.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainNav from '../../Components/MainNav';
import MainFoot from '../../Components/MainFoot';
import CalypsoLogo from '../../img/Calypso.png';
import { useContext } from 'react';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([])
        setStatus(null)
        try {
            const response = await axios.post('/forgot-password', { email });
            setStatus(response.data.status)
            toast.success("Password reset link sent.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (e) {
            if (e.response.status == 422) {
                setErrors(e.response.data.errors);
            }
        }
    };


    return (
        <>
            <MainNav />
            <section class=" dark:bg-[#290658]">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form class="w-full max-w-md" onSubmit={handleSubmit}>
                        <div class="flex justify-center mx-auto">
                            <img class="w-auto h-7 sm:h-14" src={CalypsoLogo} alt="" />
                        </div>

                        <div class="flex items-center justify-center mt-6">
                            {status &&
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-yellow-700">
                                                {status}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* <h1 class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            vcxzg
                        </h1> */}
                        </div>

                        <div class="relative flex items-center mt-6">
                            <span class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input type="email" class="block w-full py-3 bg-white border rounded-lg px-11 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                        </div>
                        {errors.email &&
                            <p className='py-2 text-sm text-gray-600 dark:text-gray-200'>{errors.email[0]}</p>
                        }


                        <div class="mt-6">

                            <div class="mt-6 text-center ">
                                <div class="flex items-center justify-between my-4">
                                    <button type='submit' class="px-6 w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Send Update Link
                                    </button>
                                </div>
                                {/* <p class="text-sm text-white">
                                Don't have an account ?
                                <span>
                                    <a href="/register" class="text-sm ml-2 text-blue-500 hover:underline dark:text-blue-400">
                                        Register Today
                                    </a>
                                </span>
                            </p> */}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <MainFoot />
        </>
    )
}
