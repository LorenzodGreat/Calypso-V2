import { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "../axios-client.js";

const FeedContext = createContext();

export function FeedProvider({ children }) {
    const { id } = useParams();
    const navigate = useNavigate();

    /////////////////////////////////// View Feed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [feedData, setFeedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchFeed = async () => {
        const response = await axios.get(`/feed/${id}/edit`);
        if (response.status === 200) {
            setLoading(false);
            setFeedData(response.data.data);
        } else{
            setLoading(false);
            setFeedData([]);
        }
    }

    /////////////////////////////////// Edit Feed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [feedDataEdit, setFeedDataEdit] = useState([]);
    const fetchFeedEdit = async () => {
        const response = await axios.get(`/feed/${id}/edit`);
        if (response.status === 200) {
            setFeedDataEdit(response.data.data);
            settitle(response.data.data.name);
            setDescription(response.data.data.desc);
            setimage(response.data.data.img);
            setErrors({});
        }
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axios.post(`/feed/${id}/update`, formData);
            if (response.data.status === 200) {
                setErrors({});
                toast.success('😬 ' + response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate('/admin-portal/feed');
                }, 3000);
            }
            if (response.data.status === 422) {
                // console.log(response.data.validator_errors)
                setErrors(prevCount => prevCount = response.data.validator_errors);
                // setErrors(response.data.validator_errors);
            }
        } catch (error) {
            if (response.data.status === 422) {
                setErrors(response.data.validator_errors);
            }
        }

    };

    /////////////////////////////////// Feed Paginate\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [feeds, setFeeds] = useState([]);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const Data = feeds.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const fetchFeeds = async (pageNumber = 1) => {
        const response = await axios.get(`/feed?pageData=${currentPage}`);
        if (response.status === 200) {
            setLoading(false);
            setFeeds(response.data.data);
        } else{
            setLoading(false);
            setFeeds([]);
        }
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /////////////////////////////////// Delete Feed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    const removeSection = async (e, id) => {
        const response = await axios.delete(`/feed/${id}/delete`);
        if (response.status === 202) {
            toast.error('😬 ' + response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
    }


    /////////////////////////////////// Create New Feed\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setimage] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axios.post('/feed/store', formData);
            if (response.data.status === 200) {
                setErrors({});
                toast.success('😬 ' + response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate('/admin-portal/feed');
                }, 3000);
            }
            if (response.data.status === 422) {
                setErrors(response.data.validator_errors);
            }
        } catch (error) {
            if (response.data.status === 422) {
                setErrors(response.data.validator_errors);
            }
        }

    };


    return (<FeedContext.Provider value={{
        settitle,
        description,
        setDescription,
        setimage,
        errors,
        handleSubmit,
        loading,

        feeds,
        postsPerPage,
        handlePageChange,
        Data,
        fetchFeeds,
        removeSection,
        currentPage,

        feedData,
        fetchFeed,

        feedDataEdit,
        fetchFeedEdit,
        title,
        handleUpdate,
        image,
    }}>
        {children}
    </FeedContext.Provider>);
};

export default FeedContext;