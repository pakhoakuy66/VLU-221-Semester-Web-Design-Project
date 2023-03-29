let hiddenMenu = document.getElementsByClassName("hidden-menu")[0];
let dropdownList = hiddenMenu.getElementsByClassName("dropdown-list")[0];
let barWrap = document.getElementsByClassName("bars-wrap")[0];
let apparel = hiddenMenu.getElementsByTagName("span")[0];
let search = document.getElementsByClassName("search")[0];
let searchButton = search.getElementsByTagName("span")[0];
let searchDropdown = search.getElementsByClassName("search-dropdown")[0];

barWrap.addEventListener("click", showMenu);
apparel.addEventListener("click", dropdown);
searchButton.addEventListener("click", searchDrop);

function showMenu() {
    barWrap.classList.toggle("toggle");
    hiddenMenu.classList.toggle("toggle");
    if (dropdownList.classList.contains("toggle")) dropdown();
}
function dropdown() {
    apparel.classList.toggle("toggle");
    dropdownList.classList.toggle("toggle");
}
function searchDrop() {
    searchButton.classList.toggle("toggle");
    searchDropdown.classList.toggle("toggle");
}
