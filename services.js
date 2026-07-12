const accordionItems = document.querySelectorAll(".accordion-item");

// Loop through accordion items
accordionItems.forEach(function(item) {
    const question = item.querySelector(".accordion-question");
    const icon = item.querySelector(".accordion-icon");

    question.addEventListener("click", function() {
        const isOpen = item.classList.contains("active");

        accordionItems.forEach(function(currentItem) {
            currentItem.classList.remove("active");
            currentItem.querySelector(".accordion-icon").textContent = "+";
        });

        if (!isOpen) {
            item.classList.add("active");
            icon.textContent = "-";
        }
    });
});
