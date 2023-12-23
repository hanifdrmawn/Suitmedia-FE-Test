import { useEffect } from 'react';
import '../src/App.css';



let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 91, 34, 0.7)";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function changeTextShow(a) {
    var dropbtn = document.getElementById('dropbtn');
    var showend = document.getElementById('show-end');
    dropbtn.innerText = a;
    showend.innerText = a;
}

function changeTextSort(a) {
    var dropbuttondrop = document.getElementById('dropbuttondrop');
    dropbuttondrop.innerText = a;
}

// function styleNavbar(clickedElement) {
//     var navItems = document.querySelectorAll('.nav #navMenu li');
//     navItems.forEach(function(item) {
//         item.classList.remove('clicked');
//     });
//     clickedElement.classList.add('clicked');
// }
