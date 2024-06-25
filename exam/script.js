const board = {
    posts: [],
    init: function () {
        this.posts = interface.getPosts();
        this.render();
    },
    search: function (value, option) {
        switch (option) {
            case "title":
                var posts = interface.getPostsByTitle(value); break;
            case "content":
                var posts = interface.getPostsByContent(value); break;
            case "id":
                var posts = interface.getPostsById(value); break;
        }
        this.posts = posts;
        this.render();
        this.addModal();
    },
    clear: function () {
        while (this.elements.length > 0) {
            this.elements[0].remove();
        }
    },
    render: function () {
        document.querySelector("#post-container").innerHTML = "";
        this.posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            const titleSpan = document.createElement("span");
            titleSpan.classList.add("post-title");
            titleSpan.innerText = post.title;
            postDiv.appendChild(titleSpan);
            const contentSpan = document.createElement("span");
            contentSpan.classList.add("post-content");
            contentSpan.innerText = post.content;
            postDiv.appendChild(contentSpan);
            const user = interface.getUserById(post.userId);
            const userSpan = document.createElement("span");
            const link = document.createElement("a");
            userSpan.classList.add("post-user");
            link.innerText = user.name + " (" + user.email + ")";
            link.setAttribute("href", "mailto:" + user.email);
            userSpan.appendChild(link);
            postDiv.appendChild(userSpan);
            const container = document.querySelector("#post-container");
            container.appendChild(postDiv);
        });
    },
    addModal: function () {
        document.querySelectorAll(".post-title").forEach((container) => {
            container.addEventListener("click", function () {
                const modal = document.querySelector(".modal-container");
                modal.style.display = "block";
                const post = interface.getPostsByTitle(container.innerText)[0];
                const user = interface.getUserById(post.userId);
                modal.childNodes[1].innerText = post.title;
                modal.childNodes[3].childNodes[1].innerText = post.content;
                modal.childNodes[5].childNodes[1].innerText = user.name + " (" + user.email + ")";
            })
        })
    }
};
document.querySelector("#search-button").addEventListener("click", function () {
    const value = document.querySelector("#search-input").value;
    const option = document.querySelector(".search-option > input:checked").value;
    board.search(value, option);

})
document.querySelector("#close-modal").addEventListener("click", function () {
    const modal = document.querySelector(".modal-container");
    modal.style.display = "none";
})
board.init();
board.addModal();