const posts = [
    { title: "Post Title 1", description: "Lorem ipsum dolor sit amet", author: "John Doe" },
    { title: "Post Title 2", description: "Lorem ipsum dolor sit amet", author: "John Doe" },
    { title: "Post Title 3", description: "Lorem ipsum dolor sit amet", author: "John Doe" },
    { title: "Post Title 4", description: "Lorem ipsum dolor sit amet", author: "John Doe" },
    { title: "Post Title 5", description: "Lorem ipsum dolor sit amet", author: "John Doe" }
];

const postList = () => {
    return new Promise((resolve, reject) => {
        if(posts.length > 0) {
            posts.map(post => {
                console.log(post);
            });
            resolve('Posts listed!');
        } else {
            reject('Error!');
        }
    });
}

//console.log(postList());

const newPost = { title: "Post Title 6", description: "Lorem ipsum dolor sit amet", author: "John Doe" }

const addNewPost = (item) => {
    return new Promise((resolve, reject) => {
        posts.push(item);
        resolve('New post added!');
    });
}

addNewPost(newPost);

console.log(posts);

