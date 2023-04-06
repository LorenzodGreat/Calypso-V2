import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNav from './../../../Components/navigation/AdminNav';
import FeedContext from '../../../context/FeedContext';

const AdminFeedCreate = () => {
    const {
        description,
        settitle,
        setDescription,
        setimage,
        errors,
        handleSubmit,
    } = useContext(FeedContext);



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
            {/* feed create */}
            <section class="bg-white h-full lg:pt-20">
                <div class="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 class="text-3xl font-semibold text-gray-800 ">Create New Feed</h1>
                    <p class="max-w-md mx-auto mt-5 text-purple-500 ">Please fill out form below to create your news feed today.</p>
                    <form onSubmit={handleSubmit}>
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <input id="title" onChange={(e) => settitle(e.target.value)} placeholder='Enter Feed Title' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-full dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.title && <p class="mt-3 text-xs text-red-500">{errors.title}</p>}
                            </div>

                            <div>
                                <input type="file" id="image" name="image" onChange={(e) => setimage(e.target.files[0])} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-full dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.image && <p class="mt-3 text-xs text-red-500">{errors.image}</p>}
                            </div>
                        </div>
                        <div className="my-6">
                        <div className="shadow">
                        <textarea
                                rows={4}
                                id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter Feed Details'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-lg"
                            />
                        </div>
                       
                            {errors.description && <p class="mt-3 text-xs text-red-500">{errors.description}</p>}
                        </div>
                        <br />
                        <button type="submit" class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Create New
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminFeedCreate