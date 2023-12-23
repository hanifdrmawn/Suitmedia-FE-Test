import React, { useState, useEffect } from 'react';
import '../App.css';
import '../script.js';
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
            <div id="content" class="content-main">
                <CoffeeList />
            </div>
            <div class="font-center m-auto text-center">
            </div>
        </div>
    );
    
}
