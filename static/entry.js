const likes = document.querySelectorAll("#divOfLikes")

for (const like of likes) {
    const actualLike = like.querySelector("#clickme");
    actualLike.addEventListener('click', () => {
        const url = "/entries/entry.likes/like"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const entryLikes = data.querySelector("#entryLikes")
                entryLikes.textContent = Number(entryLikes.textContent) + 1;
            })
    })
}

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.querySelector("#result").innerHTML = "Likes " + localStorage.clickcount;
    }
}

clickCounter();


