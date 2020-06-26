const searchInput = 

document.querySelector("#search");
searchInput.addEventListener('focus', function (e) {
    e.target.parentNode.classList.add("is-focused");
});

searchInput.addEventListener('blur', function (e) {
    e.target.parentNode.classList.remove("is-focused");
});