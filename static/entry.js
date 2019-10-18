const likes = document.querySelectorAll("#divOfLikes")

for (const like of likes) {
    const actualLike = like.querySelector("#like");
    actualLike.addEventListener('click', () => {
        const url = "/entries/entry.likes/like"
        fetch(url)
            .then(rsp => rsp.json())
            .then(data => {
                const entryLikes = data.querySelector("#entryLikes")
                entryLikes.textContent = Number(entryLikes.textContent) + 1;
            })
    })
}