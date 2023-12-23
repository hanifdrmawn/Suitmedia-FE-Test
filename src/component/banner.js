import React from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';
import '../script.js';
import banner from '../img/banner.jpg';

export default function Banner() {
    return (
        <div className="banner relative flex items-center justify-center h-screen">
            <div className="background-image absolute w-full h-full bg-no-repeat bg-center bg-cover"></div>
            <div className="triangle absolute w-full bottom-0 left-0 h-32 rotate-180"></div>
            <div className="centered-text text-center text-white">
                <h1 className="font-bold text-5xl">Ideas</h1>
                <p className="text-xl">Where all our great things begin</p>
            </div>
        </div>
    );
}

