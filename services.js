document.addEventListener("DOMContentLoaded", () => {

    /*CATEGORY ACCORDION BEHAVIOUR*/

    const categoryButtons = document.querySelectorAll(".service-category");
    const allLists = document.querySelectorAll(".service-list");

    // Show the first category by default (Protective Styles)
    const firstButton = categoryButtons[0];
    const firstListId = firstButton ? firstButton.dataset.category + "-list" : null;
    if (firstButton && firstListId) {
        const firstList = document.getElementById(firstListId);
        if (firstList) {
            firstList.style.display = "flex";
            firstButton.classList.add("active");
        }
    }



    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {

            const category = button.dataset.category + "-list";
            const targetList = document.getElementById(category);

            // close all lists
            allLists.forEach(list => list.style.display = "none");

            // remove highlights
            categoryButtons.forEach(btn => btn.classList.remove("active"));

            // open the selected list
            targetList.style.display = "flex";

            // highlight active category
            button.classList.add("active");
        });
    });


    /* CALENDAR POPUP LOGIC */

    const modal = document.getElementById("calendar-modal");
    const selectedServiceText = document.getElementById("selected-service");
    const datePicker = document.getElementById("mini-date-picker");
     // Prevent selecting past dates on the mini date picker
    if (datePicker) {
        const today = new Date().toISOString().split("T")[0];        
        datePicker.setAttribute("min", today);
}

    const dateBar = document.getElementById("selected-date-bar");
    const dateText = document.getElementById("selected-date-text");
    const continueBtn = document.getElementById("continue-btn");

    document.querySelectorAll(".book-now").forEach(btn => {
        btn.addEventListener("click", function () {
            selectedServiceText.textContent = "Book: " + this.dataset.service;

            // Reset date selector
            datePicker.value = "";
            dateBar.style.display = "none";

            modal.style.display = "flex";
        });
    });


    /*WHEN USER PICKS A DATE */

    datePicker.addEventListener("change", () => {
        if (datePicker.value) {
            dateText.textContent = "Selected Date: " + datePicker.value;
            dateBar.style.display = "block";
        }
    });


    /* PAYMENT POPUP */

    const paymentModal = document.getElementById("payment-modal");
    const closePay = document.getElementById("close-payment");

    continueBtn.addEventListener("click", () => {
        modal.style.display = "none";
        paymentModal.style.display = "flex";
    });


    /* CLOSE BUTTONS
     */

    document.getElementById("close-calendar").addEventListener("click", () => {
        modal.style.display = "none";
    });

    closePay.addEventListener("click", () => {
        paymentModal.style.display = "none";
    });

});
