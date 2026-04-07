const data = localStorage.getItem("selectedShow");
const show = JSON.parse(data);

document.getElementById("img").src = show.image?.original || '';
document.getElementById("title").textContent = show.name;
document.getElementById("description").innerHTML = show.summary || '';

const back_btn = document.getElementById("backButton");
back_btn.addEventListener("click", () => {
    window.location.href = "search.html";
})