document.addEventListener("DOMContentLoaded", () => {
    const lamp = document.getElementById("lamp");

    lamp.classList.add("running");

    lamp.addEventListener("mouseenter", () => {
        lamp.classList.add("paused");
    });

    lamp.addEventListener("mouseleave", () => {
        lamp.classList.remove("paused");
    });
});