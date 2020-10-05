const start = document.querySelector(".start");
const allP = document.querySelectorAll(".main p");
const songLyrics = document.querySelector(".song-lyrics");
let highlight;
var i = -1;

// start button listenter
start.addEventListener("click", (evt) => {
    i = -1;
    highlightDown(evt);
});

// Key Listeners
document.addEventListener("keydown", (evt) => {
    // console.log(evt);
    if (evt.key === "ArrowDown" && i < allP.length - 1) {
        highlightDown(evt);
    }
    if (evt.key === "ArrowUp" && i > 0) {
        highlightUp(evt);
    }
});

function highlightDown(e) {
    i++;
    changeHighlight(e);
}

function highlightUp(e) {
    i--;
    changeHighlight(e);
}


songLyrics.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
        for (i = 0; i < allP.length; i++) {
            if (allP[i] === e.target) {
                break;
            }
        }
        i--;
        highlightDown(e);
    }
})


// Main highlight function
function changeHighlight(e) {
    e.preventDefault();
    allP.forEach(element => {
        element.classList.remove("highlight");
    });
    allP[i].classList.add("highlight");
    highlight = document.querySelector(".highlight");
    //   console.log(highlight)
    highlight.scrollIntoView();
}