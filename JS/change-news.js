let newsContainer = document.getElementsByClassName("news-container")[0];
let newerNews = newsContainer.innerHTML;
let olderNews = `
        <div class="news">
            <div class="date">MARCH 18, 2020</div>
            <a href="" class="title"
                >UPDATES AND WELL WISHES</a
            >
        </div>
        <div class="news">
            <div class="date">MARCH 12, 2020</div>
            <a href="" class="title"
                >HELP WANTED</a
            >
        </div>
        <div class="news">
            <div class="date">MARCH 12, 2020</div>
            <a href="" class="title"
                >QUESTS AND SWITCHES AND XBOXS...</a
            >
        </div>
        <div class="news">
            <div class="date">MARCH 12, 2020</div>
            <a href="" class="title"
                >COMMERCIAL LICENSE</a
            >
        </div>
`;
let button = document.getElementsByClassName("new-old-btn")[0];

button.addEventListener("click", changeNews);

function changeNews(event) {
    let buttonText = event.target.innerText;
    if (buttonText == "Older") {
        newsContainer.innerHTML = olderNews;
        button.innerText = "Newer";
    } else {
        newsContainer.innerHTML = newerNews;
        button.innerText = "Older";
    }
}
