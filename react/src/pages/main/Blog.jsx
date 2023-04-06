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

const Blog = () => {
    const { feeds, Data, fetchFeeds, loading, removeSection, postsPerPage, handlePageChange, currentPage } = useContext(FeedContext);

    useEffect(() => {
        fetchFeeds();
    }, []);

    return (
        <>
            {
                loading ?
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
                                            < section className="text-center max-w-5xl mx-auto py-28 px-6">
                                                <div class="rounded-md bg-[#270657] p-4">
                                                    <div class="flex">
                                                        <div class="ml-3">
                                                            <div class="mx-auto text-center w-max">
                                                                <svg class="h-12 w-12 bg-white p-1 rounded-full text-[#270657]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                            <h3 class="text-lg font-medium text-white">Welcome to our blog section!</h3>
                                                            <div class="mt-2 text-2xl text-white">
                                                                <p>Unfortunately, we don't have any posts to share with you at the moment. Our team is working hard to create exciting and informative content, so please check back soon for updates. Thank you for your patience and understanding.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
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