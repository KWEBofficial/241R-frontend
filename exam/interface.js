const interface = {
    getPosts: function () {
        return data.posts;
    },
    getPostsByTitle: function (title) {
        return data.posts.filter((post) => post.title.includes(title));
    },
    getPostsByContent: function (content) {
        return data.posts.filter((post) => post.content.includes(content));
    },
    getPostsById: function (postId) {
        return data.posts.filter((post) => post.id === postId);
    },
    getUserById: function (userId) {
        return data.users.find(user => user.id == userId);
    },
   };