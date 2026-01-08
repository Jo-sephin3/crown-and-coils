document.addEventListener("DOMContentLoaded", () => {
  
  const datePicker = document.getElementById("datePicker");

  // Disable unavailable dates
  const unavailableDates = [
    "2025-11-25",
    "2025-11-26"
  ];

  datePicker.addEventListener("input", () => {
    const selected = datePicker.value;

    if (unavailableDates.includes(selected)) {
      alert("This date is unavailable. Please choose another date.");
      datePicker.value = "";
    }
  });

  // Confirm button
  document.getElementById("confirmBtn")
    .addEventListener("click", () => {
      if (datePicker.value === "") {
        alert("Please choose an available date first.");
      } else {
        alert("Proceeding to payment...");
      }
    });

});
