import React, { useState, useEffect } from 'react';
import '../App.css';
import '../script.js';
import { getAllDataCoffee } from '../data/Coffee';
import CoffeeList from '../data/coffeeData.js';
import data from '../data/coffeeData.js';

export default function Content() {
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
