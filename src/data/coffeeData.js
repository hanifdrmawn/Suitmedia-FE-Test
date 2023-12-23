import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import '../App.css';
import '../script.js';import { getAllDataCoffee } from '../data/Coffee';
import '../component/content.js';



function CoffeeList() {
    const [coffeeData, setCoffeeData] = useState([]);
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = coffeeData.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllDataCoffee();
                setCoffeeData(data);
                setCount(data.length);
            } catch (error) {
                console.error('Error fetching coffee data:', error);
            }
        }

        fetchData();
    }, []);
    
    return (
        <div className='content-main'>
            <div id="content" className="columns-4 my-10 max-md:columns-2 max-sm:columns-1">
                {coffeeData.map((coffee) => (
                    <div key={coffee.id} className="content-box break-inside-avoid rounded border h-[350px] shadow-lg mb-6">
                        <img className="rounded-t w-full max-h-40 object-cover" src={coffee.image} alt={coffee.title} />
                        <div className="content-text m-4">
                            <h2 className="font-medium text-xl">{coffee.title}</h2>
                            <p className="text-gray-400 line-clamp-3">{coffee.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='pagination w-full'>
                {search === "" ? 
                <Pagination class="m-auto justify-center" style={{display:'flex'}}>
                    {
                        currentPage === 1 ? null : <Pagination.First onClick={() => paginate(1)} />
                    }
                    {
                        currentPage === 1 ? null : <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                    }
                    {Array.from({ length: Math.ceil(count / postsPerPage) }, (_, i) => (
                        <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>
                            {i + 1}
                        </Pagination.Item>
                    ))}
                    {
                        currentPage === Math.ceil(count / postsPerPage) ? null : <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                    }
                    {
                        currentPage === Math.ceil(count / postsPerPage) ? null : <Pagination.Last onClick={() => paginate(Math.ceil(count / postsPerPage))} />
                    }
                </Pagination> : null}
            </div> */}
        </div>
    );
}

export default CoffeeList;