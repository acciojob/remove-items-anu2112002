//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    // Select the dropdown and button elements
    const colorSelect = document.getElementById("colorSelect");
    const removeButton = document.querySelector("input[type='button']");

    // Add event listener to the button
    removeButton.addEventListener("click", function () {
        let selectedIndex = colorSelect.selectedIndex; // Get the index of the selected option
        if (selectedIndex !== -1) { 
            colorSelect.remove(selectedIndex); // Remove the selected option
        }
    });
});
