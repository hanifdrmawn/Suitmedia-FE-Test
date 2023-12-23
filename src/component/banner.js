import React, { useEffect } from 'react';
import '../App.css';
import '../script.js';

export default function Banner() {
    useEffect(() => {
        const background = document.querySelector('.background-image');
        const text = document.querySelector('.centered-text');
    
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            background.style.transform = `translateY(-${scrollValue * 0.1}px)`;
            text.style.transform = `translateY(-${scrollValue * 0.3}px)`;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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