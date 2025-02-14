const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector("input[type='button']");

removeButton.onclick = function() {
    colorSelect.remove(colorSelect.selectedIndex);
};
