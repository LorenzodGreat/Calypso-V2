import { useEffect } from 'react'
import { useContext } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNav from '../../../Components/navigation/AdminNav';
import FeedContext from '../../../context/FeedContext';
import moment from 'moment';

const AdminFeedDetails = () => {
    const { feedData, fetchFeed, removeSection } = useContext(FeedContext);

    useEffect(() => {
        fetchFeed()
    }, []);


    return (
        <div className="h-screen">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
                theme="light"
            />

            <AdminNav feed={true} />
            {/* Feed Detail View */}
            {feedData.length === 0 ?
                (<section className='h-full pt-32'>
                    <div class='flex items-center justify-center min-h-max'>
                        <button type="button" class="bg-fuchsia-700 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                            <div class="flex items-center justify-center m-[10px]">
                                <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                                <div class="ml-2"> Processing... </div>
                            </div>
                        </button>
                    </div>
                </section>)
                :
                (<section>
                    <div class="container px-6 pt-24 py-10 mx-auto">
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">From the blog</h1>

                        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={`https://api.calypsoshipping.com/${feedData.img}`} alt="" />

                            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                                <p class="text-sm text-blue-500 uppercase">Calypso News</p>

                                <h1 class="block mt-4 text-2xl font-semibold text-gray-800 ">
                                    {feedData.name}
                                </h1>

                                <div className='max-w-2xl '>
                                    <p class="mt-3 text-lg  text-red-700 md:text-lg font-semibold">
                                        {feedData.desc}
                                    </p>
                                </div>
                                <span className="relative py-4 z-0 inline-flex rounded-md">
                                    <a
                                        href={`/admin-portal/feed/${feedData.uuid}/edit`} title='Edit'
                                        className="-ml-px relative inline-flex items-center px-4 py-2 border rounded-l-md border-gray-300 bg-[#8f54a0] text-sm font-medium text-[#F1F1F1] hover:bg-[#784486] focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <PencilAltIcon className='h-4 w-4' />

                                    </a>
                                    <button onClick={(e) => removeSection(e, feedData.uuid)}
                                        type="button" title='Delete'
                                        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-[#8f54a0] text-sm font-medium text-[#F1F1F1] hover:bg-[#784486] focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <TrashIcon className='h-4 w-4' />
                                    </button>
                                </span>
                                <div class="flex items-center mt-6">
                                    <img class="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                    <div class="mx-4">
                                        <h1 class="text-sm text-gray-700 ">Administrator</h1>
                                        <p class="text-sm text-gray-500 ">Posted on:  {moment(feedData.created_at).fromNow()} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)
            }
        </div>
    )
}

export default AdminFeedDetails