const sections = document.querySelectorAll('.section');
const btnParent = document.querySelectorAll('.controlls');
const btnChildren = document.querySelectorAll('.control');
const sectionsAll = document.querySelector('.main-content');

// Transition between selected active button
function TransitionButtons(){
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

// Transition between selected active sections
sectionsAll.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    // Remove active class from buttons
    if (id) {
        btnParent.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');

        // Hide other sections from screen
        sections.forEach((section) => {
            section.classList.remove('active');
        })

        // Set selected section as active
        const element = document.getElementById(id);
        element.classList.add('active');
        
    }
});

TransitionButtons();