const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

function openModal(post) {
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalUser = document.getElementById('modal-user');

    modalTitle.textContent = post.title;
    modalContent.textContent = post.content;

    const user = interface.getUserById(post.userId);
    modalUser.textContent = `${user.name} (${user.email})`;

    modal.style.display = 'block';
}

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const board = {
    posts: [],
    elements: document.querySelector(".post"),
    init: function () {
        this.posts = interface.getPosts();
        this.render();
    },
    search: function (value, option) {
        this.clear();
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
    },
    clear: function () {
        while (this.elements.firstChild) {
            this.elements.removeChild(this.elements.firstChild);
        }
    },
    render: function () {
        const container = document.getElementById('post-container');
        this.posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.dataset.id = post.id;
            
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
            userSpan.classList.add("post-user");
            userSpan.innerText = `${user.name} (${user.email})`;
            postDiv.appendChild(userSpan);

            container.appendChild(postDiv);
        });
    },
};

board.init();

document.getElementById('post-container').addEventListener('click', function(event) {
    const postElement = event.target.closest('.post');
    if (postElement) {
        const postId = postElement.dataset.id;
        const post = interface.getPostsById(postId)[0];
        openModal(post);
    }
});

document.getElementById('search-button').addEventListener('click', function () {
    const value = document.getElementById('search-input').value;
    let option;
    if (document.getElementById('search-title').checked) {
        option = "title";
    } else if (document.getElementById('search-content').checked) {
        option = "content";
    } else if (document.getElementById('search-id').checked) {
        option = "id";
    }
    board.search(value, option);
});
