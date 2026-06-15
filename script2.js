document.querySelectorAll(".controls button").forEach(button => {
    button.addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            if (this.classList.contains("play")) {
                this.closest(".controls").querySelector(".pause").classList.remove("active");
            } else if (this.classList.contains("pause")) {
                this.closest(".controls").querySelector(".play").classList.remove("active");
            }
            this.classList.add("active");
        }
    });
});

