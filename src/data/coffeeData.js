import React, { useEffect, useState } from 'react';
import '../App.css';
import '../script.js';import { getAllDataCoffee } from '../data/Coffee';
import '../component/content.js';
import Error from '../component/Error';
import Loading from '../component/Loading';

function CoffeeList() {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [coffeeData, setCoffeeData] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCoffeeData = coffeeData.slice(indexOfFirstItem, indexOfLastItem);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = coffeeData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(coffeeData.length / itemsPerPage);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                let data = await getAllDataCoffee();
                data = data.sort((a, b) => a.title.localeCompare(b.title));
                setCoffeeData(data);
                setCount(data.length);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return (
        <Loading />
    );
    if (error) return <Error />;

    const changeTextShow = (a) => {
        var dropbtn = document.getElementById('dropbtn');
        var showend = document.getElementById('show-end');
        dropbtn.innerText = a;
        showend.innerText = a;
        setItemsPerPage(a);
        setCurrentPage(1);
    }

    const changeTextSort = (order) => {
        var dropbuttondrop = document.getElementById('dropbuttondrop');
        if(order=='asc') {
            dropbuttondrop.innerText = 'A - Z';
            setCoffeeData([...coffeeData.sort((a, b) => a.title.localeCompare(b.title))]);
        }
        else if(order=='desc') {
            dropbuttondrop.innerText = 'Z - A';
            setCoffeeData([...coffeeData.sort((a, b) => b.title.localeCompare(a.title))]);
        }
    }

    return (
        <div className='content-main'>
            <div className='filter flex justify-between'>
            <div className="showing">
                    <p className='m-auto'>Showing 1-<span id="show-end">10</span> of {count}</p>
                </div>
                <div className="input flex gap-6">
                    <div className="show flex gap-1">
                        <p className="m-auto">Show per page:</p>
                        <div className="dropdown border rounded-full" id="dropdown">
                            <button id="dropbtn" className="dropbtn cursor-pointer text-base py-1 px-3">10</button>
                            <div className="dropdown-content cursor-pointer" id="dropdown-content">
                                <a onClick={() => changeTextShow(10)}>10</a>
                                <a onClick={() => changeTextShow(20)}>20</a>
                                <a onClick={() => changeTextShow(50)}>50</a>
                            </div>
                        </div>
                    </div>
                    <div className="sort flex gap-1">
                        <p className="m-auto">Sort by:</p>
                        <div className="dropdown border rounded-full" id="dropdown">
                            <button id="dropbuttondrop" className="dropbtn cursor-pointer text-base py-1 px-3 w-24">A - Z</button>
                            <div className="dropdown-content cursor-pointer" id="dropdown-content">
                                <a onClick={() => changeTextSort('asc')}>A - Z</a>
                                <a onClick={() => changeTextSort('desc')}>Z - A</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" className="grid grid-cols-4 gap-5 my-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                {currentCoffeeData.map((coffee) => (
                    <div key={coffee.id} className="content-box break-inside-avoid rounded border h-[350px] shadow-lg mb-6">
                    <img className="rounded-t w-full max-h-40 object-cover" src={coffee.image} alt={coffee.title} />
                    <div className="content-text m-4">
                        <h2 className="font-medium text-xl">{coffee.title}</h2>
                        <p className="text-gray-400 line-clamp-3">{coffee.description}</p>
                    </div>
                    </div>
                ))}
            </div>
            <div className='font-center m-auto text-center'>
                <div className="pagination text-center">
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                        &laquo;
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
                            {i + 1}
                        </button>
                    ))}
                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                        &raquo;
                    </button>
                </ div>
            </div>
        </div>
    );
}

export default CoffeeList;