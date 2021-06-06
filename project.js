const slidesContainer = document.getElementById('slides');
const slides = document.getElementsByClassName('mysliders');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
console.log(slidesContainer);
let counter = 0;
function renderSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (i === counter) {
            slides[i].style.display = 'block';
        }
        else {
            slides[i].style.display = 'none';
        }
    }
}
function setSlide(newSlideIndex) {
    counter = newSlideIndex;
    renderSlide();
}
let timer = setInterval(nextslide, 5000);
function nextslide() {
    let newSlideIndex = counter;
    if (counter === slides.length - 1) {
        newSlideIndex = 0;
    }
    else {
        newSlideIndex += 1;
    }
    setSlide(newSlideIndex);
}
function prevslide() {
    let newSlideIndex = counter;
    if (counter != 0) {
        newSlideIndex -= 1;
    }
    else {
        newSlideIndex = slides.length - 1;
    }
    setSlide(newSlideIndex);
}
renderSlide();
function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextslide, 5000);
}
nextBtn.addEventListener('click', () => {
    nextslide();
    resetTimer();
})
prevBtn.addEventListener('click', () => {
    prevslide();
    resetTimer();
})
// searchdrawer
const searchDrawerEl = document.getElementById("searchdrawer");
const deepDark = document.getElementById("dark-all");
let showDrawer = false;
const openDrawer = () => {
    showDrawer = true;
    renderDrawer();
}
const closeDrawer = () => {
    showDrawer = false;
    renderDrawer();
}
const renderDrawer = () => {
    if (showDrawer) {
        searchDrawerEl.style.right = "0vw";
        deepDark.style.display = "block";
    }
    else {
        searchDrawerEl.style.right = "-80vw";
        deepDark.style.display = "none";
    }
}
const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener('click', () => {
    openDrawer();
    console.log("click");
})
deepDark.addEventListener('click', () => {
    closeDrawer();
})
// searchbar
const searchBar = document.getElementById("searchbar");
const searchResourceEl = document.getElementById("searchresource");
const searchForm = document.getElementById("searchform");
const renderSearchResource = (items) => {
    searchResourceEl.innerHTML = "";
    for (let item of items) {
        searchResourceEl.innerHTML += ` 
        <div class="search-item">${item.name}</div>
        `
    }
}
const searchShoes = async (searchstring) => {
    const response = await fetch("https://60b8d463b54b0a0017c048f8.mockapi.io/api/v1/shoes");
    const data = await response.json();
    let searchResource = [];
    for (let shoes of data) {
        if (shoes.name.includes(searchstring) || shoes.brand.includes(searchstring)) {
            searchResource.push(shoes);
        }
    }
    renderSearchResource(searchResource);
}
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchShoes(searchBar.value);
})
searchBar.addEventListener('keyup', () => {
    if (searchBar.value === "") {
        searchResourceEl.innerHTML = "";
    }
})
const ountStandingShoesEl = document.getElementById("outstandingshoes");
const renderOutstandingShoes = async () => {
    const response = await fetch("https://60b8d463b54b0a0017c048f8.mockapi.io/api/v1/shoes");
    const data = await response.json();
    const shoesToShow = data.slice(0, 15);
    let rowHtml = "";
    for (let i = 0; i < shoesToShow.length; i++) {
        if ((i + 1) % 4 === 0) {
        console.log(i);
            ountStandingShoesEl.innerHTML += `
            <div style="display: flex;margin-left:15px;">
                ${rowHtml}
            </div>
            `
            rowHtml = "";
        }
        
        else {
            console.log(shoesToShow[i]);
            rowHtml += ` 
            <div>
                <div style="width: 442.81px;padding: 12px ;">
                    <img src="${shoesToShow[i].imgineShoes}" class="imagine">
                    <div>
                        <p class="information">${shoesToShow[i].name}</p>
                        <p class="information">đ ${shoesToShow[i].price}</p>
                    </div>
                </div>
            </div>
            `
        }
    }
}
renderOutstandingShoes();