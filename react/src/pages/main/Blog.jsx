import { useEffect } from 'react'
import { EyeIcon, PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeedContext from '../../context/FeedContext';
import { useContext } from 'react';
import Pagination from '../../Components/Pagination';
import moment from 'moment';
import MainNav from '../../Components/MainNav';
import MainFoot from '../../Components/MainFoot';
import Load from '../../components/loading';
import { useState } from 'react';

const Blog = () => {
    const { feeds, Data, fetchFeeds, loading, removeSection, postsPerPage, handlePageChange, currentPage } = useContext(FeedContext);
    const [loader, setLoading] = useState(false)

    useEffect(() => {
        fetchFeeds();
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    return (
        <>
            {
                loader ?
                    <Load />
                    :
                    <>
                        <MainNav />
                        <section class="">
                            {loading ?
                                (
                                    <section className='h-screen pt-32'>
                                        <div class='flex items-center justify-center min-h-max'>
                                            <button type="button" class="bg-fuchsia-700 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                                                <div class="flex items-center justify-center m-[10px]">
                                                    <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                                    <div class="ml-2"> Processing... </div>
                                                </div>
                                            </button>
                                        </div>
                                    </section>
                                )
                                : (
                                    feeds.length == 0 ?
                                        (
                                            <header class="bg-white ">
                                                <nav class="border-t-4 border-blue-500">
                                                    <div class="container flex items-center justify-between px-6 py-3 mx-auto">
                                                        <a href="#">
                                                            <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
                                                        </a>

                                                        <a class="my-1 text-sm font-medium text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </nav>

                                                <div class="container px-6 py-16 mx-auto">
                                                    <div class="items-center lg:flex">
                                                        <div class="w-full lg:w-1/2">
                                                            <div class="lg:max-w-lg">
                                                                <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Opp, looks like there's no <span class="text-blue-500">News Update</span></h1>

                                                                <p class="mt-3 text-gray-600 dark:text-gray-400">Never miss the latest news and updates here at <span class="font-medium text-blue-500">Calypso</span> come back later for an update</p>

                                                            </div>
                                                        </div>

                                                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                                            <img class="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                        )
                                        :
                                        (
                                            < section >
                                                <div class="container px-6 pt-24 py-10 mx-auto">
                                                    <h1 class="text-2xl font-semibold text-black capitalize lg:text-3xl ">Your blog</h1>

                                                    <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                                                        {Data.map((item) => (
                                                            <div key={item.name} class="lg:flex">
                                                                <a href={`feeds/${item.uuid}/view`} className="" >
                                                                    <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={`http://127.0.0.1:8000/${item.img}`} alt="" />
                                                                </a>

                                                                <div class="flex flex-col space-y-4 py-6 lg:mx-6">
                                                                    <a href={`feeds/${item.uuid}/view`} className="" > <h1 class="hover:text-fuchsia-400 text-xl line-clamp-2 font-semibold ">
                                                                        {item.name}

                                                                    </h1>
                                                                    </a>
                                                                    <p class="text-sm ">Updated On:  <span class="text-sm text-red-500">
                                                                        {moment(item.updated_at).fromNow()}
                                                                    </span></p>
                                                                </div>
                                                            </div>
                                                        ))}

                                                    </div>
                                                    <div className='mt-10 w-full mx-auto'>
                                                        <Pagination
                                                            postsPerPage={postsPerPage}
                                                            totalPosts={feeds.length}
                                                            paginate={handlePageChange}
                                                            page={currentPage}
                                                        />
                                                    </div>
                                                </div>
                                            </section >
                                        ))
                            }
                        </section>
                        <MainFoot />
                    </>
            }
        </>
    )
}

export default Blog