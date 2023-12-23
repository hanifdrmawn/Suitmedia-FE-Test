import React from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';
import '../script.js';
import logo from '../img/suitmedia_logo.png';

export default function Header() {
    return (
        <header id='navbar' className='navbar flex w-full fixed justify-between mb-10'>
            <div className="logo mx-9 my-5 w-24">
                <img src={logo} alt={logo} />
            </div>
            <div className="ml-auto" id="menu">
                <div className="nav" id="nav">
                    <ul id="navMenu" className="flex list-none my-5">
                        <li onClick={styleNavbar} className="p-1.5 mx-9 text-base cursor-pointer"><a>Work</a></li>
                        <li onClick={styleNavbar} className="p-1.5 mx-9 text-base cursor-pointer"><a>About</a></li>
                        <li onClick={styleNavbar} className="p-1.5 mx-9 text-base cursor-pointer"><a>Service</a></li>
                        <li onClick={styleNavbar} className="p-1.5 mx-9 text-base cursor-pointer"><a>Career</a></li>
                        <li onClick={styleNavbar} className="p-1.5 mx-9 text-base cursor-pointer"><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

const styleNavbar = (event) => {
    const clickedElement = event.currentTarget;
    const navItems = document.querySelectorAll('.nav #navMenu li');
    navItems.forEach(function(item) {
        item.classList.remove('clicked');
    });
    clickedElement.classList.add('clicked');
};
