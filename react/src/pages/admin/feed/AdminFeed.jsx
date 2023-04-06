import { useEffect } from 'react'
import { EyeIcon, PencilAltIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid';
import Pagination from '../../../Components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeedContext from '../../../context/FeedContext';
import { useContext } from 'react';
import AdminNav from '../../../Components/navigation/AdminNav';
import moment from 'moment';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AdminFeed = () => {
    const { feeds, Data, fetchFeeds, loading, removeSection, postsPerPage, handlePageChange, currentPage } = useContext(FeedContext);
    useEffect(() => {
        fetchFeeds();
    }, []);



    return (
        <div >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="light"
            />
            <AdminNav feed={true} />
            {loading ?
                (
                    <section className='h-screen pt-20'>
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
                    feeds.length === 0 ?
                        (
                            < section >
                                <div className="text-center mt-32">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            vectorEffect="non-scaling-stroke"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                    <h3 className="mt-2 text-sm font-medium text-gray-900">No Feed Created</h3>
                                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new feed.</p>
                                    <div className="mt-6">
                                        <a
                                            href='/admin-portal/feed/create'
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                            New Project
                                        </a>
                                    </div>
                                </div>
                            </section>
                        )
                        :
                        (
                            < section >
                                <div class="container px-6 pt-24 py-10 mx-auto">
                                    <div className='flex w-full'>
                                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">Your blog</h1>
                                        <a
                                            href='/admin-portal/feed/create'
                                            className="inline-flex ml-auto items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                            New Project
                                        </a></div>
                                    <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                                        {Data.map((item) => (
                                            <div key={item.name} class="lg:flex">
                                                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={`http://127.0.0.1:8000/${item.img}`} alt="" />

                                                <div class="flex flex-col justify-between py-6 lg:mx-6">
                                                    <h1 class="text-xl line-clamp-2 font-semibold text-gray-800">
                                                        {item.name}

                                                    </h1>
                                                    <span className="relative py-4 z-0 inline-flex rounded-md">
                                                        <a href={`feed/${item.uuid}/view`} title='View'
                                                            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-[#8f54a0] text-sm font-medium text-[#F1F1F1] hover:bg-[#784486] focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                        >
                                                            <EyeIcon className='h-4 w-4' />
                                                        </a>
                                                        <a
                                                            href={`feed/${item.uuid}/edit`} title='Edit'
                                                            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-[#8f54a0] text-sm font-medium text-[#F1F1F1] hover:bg-[#784486] focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                        >
                                                            <PencilAltIcon className='h-4 w-4' />

                                                        </a>
                                                        <button onClick={(e) => removeSection(e, item.uuid)}
                                                            type="button" title='Delete'
                                                            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-[#8f54a0] text-sm font-medium text-[#F1F1F1] hover:bg-[#784486] focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                                        >
                                                            <TrashIcon className='h-4 w-4' />
                                                        </button>
                                                    </span>
                                                    <span class="text-sm ">Updated On:  <span class="text-sm text-red-500">
                                                        {moment(item.updated_at).fromNow()}
                                                    </span></span>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                    <div className='my-10 w-full mx-auto'>
                                        <Pagination
                                            postsPerPage={postsPerPage}
                                            totalPosts={feeds.length}
                                            paginate={handlePageChange}
                                            page={currentPage}
                                        />
                                    </div>
                                </div>
                            </section >
                        )
                )}
        </div >
    )
}

export default AdminFeed