const searchInput = document.querySelector("#search");

const parent = document.querySelector(".search-ha");

searchInput.addEventListener('focus', function (e) {

    parent.classList.add("is-focused");

});

searchInput.addEventListener('blur', function (e) {
    parent.classList.remove("is-focused");
});