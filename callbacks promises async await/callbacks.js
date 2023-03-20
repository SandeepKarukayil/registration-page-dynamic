const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
getPosts();

createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// reason we cant see post three is because get post took 1 second and create post took 2 seconds so the post wasnt able to be outputted because it was slower then get post

// one way to handle this is async and callbacks

// the callback parameter in get post made it to create the post
