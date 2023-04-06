import React from 'react'
import MainFoot from '../../Components/MainFoot'
import MainNav from '../../Components/MainNav'
import { useEffect } from 'react'
import { useContext } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import FeedContext from '../../context/FeedContext'
import Load from '../../components/loading'

const BlogDetails = () => {
    const { feedData, loading, fetchFeed, removeSection } = useContext(FeedContext);

    useEffect(() => {
        fetchFeed()
    }, [])

    return (
        <>
            {
                loading ?
                    <Load />
                    :
                    <div className="h-screen">

                        <MainNav />
                        {/* Feed Detail View */}
                        {feedData.length === 0 ? null
                            :
                            (<section>
                                <div class="container px-6 pt-24 py-10 mx-auto">
                                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">From the blog</h1>

                                    <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                                        <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={`http://127.0.0.1:8000/${feedData.img}`} alt="" />

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
                        <MainFoot />

                    </div>
            }
        </>
    )
}

export default BlogDetails