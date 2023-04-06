import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, page }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="relative z-0 inline-flex w-full place-content-center mt-auto -space-x-px" aria-label="Pagination">
            <ul className='pagination flex flex-wrap space-x-1'>
                {pageNumbers.map(number => (
                    <li key={number} className={page == number ? "px-2 text-indigo-500 font-bold text-white-600" : "text-black text-base font-semibold px-1 hover:bg-gray-50"}>
                        <input onClick={() => paginate(number)} type="radio" name="number" id={number} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;