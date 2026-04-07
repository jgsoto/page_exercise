const search_btn = document.getElementById("searchButton");
search_btn.addEventListener("click", async () => {
    const query = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    console.log(data);

    const container = document.getElementById("results");
    container.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="${item.show.image?.medium || ''}" alt="${item.show.name}">
        <h2>${item.show.name}</h2>
    `;

        card.addEventListener("click", ()=>{
            localStorage.setItem("selectedShow", JSON.stringify(item.show));
            window.location.href = "detail.html";
        })
        
        container.appendChild(card);
    });
});
