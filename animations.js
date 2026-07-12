const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function (entry){
        if (entry.isIntersecting) { // if the entry is currently in the viewport
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15 // Wait until at least 15% of the element is inside the screen
});

revealElements.forEach(function(element) {
    observer.observe(element);
});