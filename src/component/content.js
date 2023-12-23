import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Container, Pagination } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import '../App.css';
import '../script.js';
import banner from '../img/banner.jpg';
import Error from '../component/Error';
import Loading from '../component/Loading';
import { getAllDataCoffee } from '../data/Coffee';
import CoffeeList from '../data/coffeeData.js';
import data from '../data/coffeeData.js';





export default function Content() {
    const [search, setSearch] = useState('');
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = article.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

function CoffeeData() {
    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllDataCoffee();
                setCoffeeData(data);
            } catch (error) {
                console.error('Error fetching coffee data:', error);
            }
        }

        fetchData();
    }, []);
    
    return (
        data
    );
}

    return (
        
        <div className="content m-16">
            <div className="filter flex justify-between">
                <div className="showing">
                    <p className='m-auto'>Showing 1-<span id="show-end">10</span> of 20</p>
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
                    {/* <div className="sort flex gap-1">
                        <p className="m-auto">Sort by:</p>
                        <div className="dropdown border rounded-full" id="dropdown">
                            <button id="dropbuttondrop" className="dropbtn cursor-pointer text-base py-1 px-3 w-24">Newest</button>
                            <div className="dropdown-content cursor-pointer" id="dropdown-content">
                                <a onclick="changeTextSort('Newest')">Newest</a>
                                <a onclick="changeTextSort('Oldest')">Oldest</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div id="content" class="content-main">
                <CoffeeList />
            </div>
            <div class="font-center m-auto text-center">
                <div class="pagination text-center">
                    <a href="#">&laquo;</a>
                    <a class="active" id="pag1" href="#">1</a>
                    <a id="pag2" className='cursor-pointer'>2</a>
                    <a id="pag3" className='cursor-pointer'>3</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </div>
    );
    
}

const changeTextShow = (a) => {
    var dropbtn = document.getElementById('dropbtn');
    var showend = document.getElementById('show-end');
    dropbtn.innerText = a;
    showend.innerText = a;
}
