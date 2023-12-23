import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import '../App.css';
import '../script.js';import { getAllDataCoffee } from '../data/Coffee';
import '../component/content.js';


function CoffeeList() {
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
        <div id="content" className="columns-4 my-10">
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
    );
}

export default CoffeeList;