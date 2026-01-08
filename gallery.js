document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".gallery-tab");
    const galleries = document.querySelectorAll(".gallery-grid");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {

            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add active to clicked tab
            tab.classList.add("active");

            // Hide all galleries
            galleries.forEach(g => g.style.display = "none");

            // Show the selected gallery
            const target = document.getElementById(tab.dataset.target);
            if (target) {
                target.style.display = "grid";
            }
        });
    });
});
