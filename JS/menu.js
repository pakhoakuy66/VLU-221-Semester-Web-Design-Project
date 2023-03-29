let header = document.getElementsByTagName("header")[0];
let footer = document.getElementsByTagName("footer")[0];

header.innerHTML = `
    <nav>
        <div class="cover"></div>
        <div class="exit">
            <div class="barswrap">
                <div class="bars">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </div>
            </div>
        </div>
        <div class="open">
            <div class="bars">
                <div class="barswrap">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </div>
        </div>
        <div class="menu_wrap">
            <ul class="link-list">
                <li><a href="home.html">home</a></li>
                <li><a href="store.html" target="_blank">store</a></li>
                <li><a href="news.html">news</a></li>
                <li><a href="games.html">games</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="careers.html">careers</a></li>
                <li><a href="contact.html">contact</a></li>
            </ul>
        </div>
        <div class="logo">
            <a href="home.html"
                ><img src="Images/SteelWoolStudios_glitch.gif" alt=""
            /></a>
        </div>
    </nav>
`;

footer.innerHTML = `
    <nav>
        <ul class="legal">
            <li><a href="policy.html">privacy policy</a></li>
            <li>
                <a href="license.html">end user license agreement</a>
            </li>
        </ul>
        <ul class="media">
            <li>
                <a
                    href="https://www.facebook.com/SteelWoolStudios"
                    target="_blank"
                    ><i class="fa-brands fa-facebook"></i
                ></a>
            </li>
            <li>
                <a
                    href="https://twitter.com/SteelWoolStudio"
                    target="_blank"
                    ><i class="fa-brands fa-twitter"></i
                ></a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/steel_wool_studios"
                    target="_blank"
                    ><i class="fa-brands fa-instagram"></i
                ></a>
            </li>
            <li>
                <a
                    href="https://www.youtube.com/channel/UCpOXWy4Erc4UNoxI9xW-CXw"
                    target="_blank"
                    ><i class="fa-brands fa-youtube"></i
                ></a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/company/steel-wool-studios"
                    target="_blank"
                    ><i class="fa-brands fa-linkedin"></i
                ></a>
            </li>
        </ul>
        <div class="totop"><a href="#">back to top</a></div>
    </nav>
`;

const open = document.querySelector(".open");
const exit = document.querySelector(".exit");
const menu = document.querySelector(".menu_wrap");
const cover = document.querySelector(".cover");
const body = document.querySelector(".body");

open.addEventListener("click", () => {
    menu.classList.toggle("toggle");
    exit.classList.toggle("toggle");
    cover.classList.toggle("toggle");
    body.classList.toggle("toggle");
});

exit.addEventListener("click", () => {
    menu.classList.toggle("toggle");
    exit.classList.toggle("toggle");
    cover.classList.toggle("toggle");
    body.classList.toggle("toggle");
});
