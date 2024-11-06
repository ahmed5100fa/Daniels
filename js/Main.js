document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('.type', {
        strings: [
            'Developer',
            'Larry Daniels',
            'Designer'
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filtering span");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");
            const filterValue = this.getAttribute("data-filter");

            const items = document.querySelectorAll(".col-lg-4");

            items.forEach(item => {
                if (filterValue === "*") {
                    item.style.display = "block";
                } else {
                    if (item.classList.contains(filterValue.substring(1))) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                }
            });
        });
    });
});
