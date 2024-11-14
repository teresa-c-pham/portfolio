const sections = document.querySelectorAll('.section');
const btnParent = document.querySelectorAll('.controlls');
const btnChildren = document.querySelectorAll('.control');
const sections_body = document.querySelector('.main-content');


function TransitionPage(){
    // Button click active class
    for (let i = 0; i < btnChildren.length; i++) {
        btnChildren[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            // Remove active-btn class
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            
            // Add active-btn class to clicked button
            this.className += ' active-btn';
        
        })
    }
}

TransitionPage();