import { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import AdminNav from '../../../Components/navigation/AdminNav';
import FeedContext from '../../../context/FeedContext';



const AdminFeedEdit = () => {
    const {
        handleUpdate,
        fetchFeedEdit,
        description,
        settitle,
        setDescription,
        setimage,
        title,
        image,
        errors, } = useContext(FeedContext);

    useEffect(() => {
        console.log(errors)
        fetchFeedEdit()
    }, [])

    return (
        <div className="h-screen ">
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
            <section class="h-full lg:pt-20 ">
                <div class="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 class="text-3xl font-semibold text-gray-800 ">Update News Feed</h1>
                    <p class="max-w-md mx-auto mt-5 text-purple-700">Please fill out form below to create your news feed today.</p>
                    <form onSubmit={handleUpdate}>
                        <img class="object-cover w-full h-56 mx-auto my-1 rounded-lg lg:w-64" src={`http://127.0.0.1:8000/${image}`} alt="" />
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <input id="title" onChange={(e) => settitle(e.target.value)} value={title} placeholder='Feed Title' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-full dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.title && <p class="mt-3 text-xs text-red-500">{errors.title}</p>}
                            </div>

                            <div>
                                <input type="file" id="image" name="image" onChange={(e) => setimage(e.target.files[0])} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-full dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                {errors.image && <p class="mt-3 text-xs text-red-500">{errors.image}</p>}
                            </div>
                        </div>
                        <div className="my-6">
                            <textarea
                                rows={4}
                                id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Feed Details'
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-lg"
                            />
                            {errors.description && <p class="mt-3 text-xs text-red-500">{errors.description}</p>}
                        </div>
                        <br />
                        <button type="submit" class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Update Now
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AdminFeedEdit