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

let userActive = [];
let user = {
  userName: "xyz",
  lastActivetime: 0,
};
function updateLasteUseractivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivetime = new Date().getTime();
      resolve(user.lastActivetime);
    }, 1000);
  });
}
function creatpost(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.userName = value;
      resolve(user.userName);
    });
  });
}
function deletePost() {
  return new Promise((resol, reject) => {
    setTimeout(() => {
      userActive.pop();
      resol();
    }, 1000);
  });
}
Promise.all([updateLasteUseractivityTime(), creatpost("Sandeep")]).then(
  (userName) => {
    // printDetails();
    userActive.push(user);
    console.log(userName);
  }
);

Promise.all([updateLasteUseractivityTime(), creatpost("sudeep")]).then(
  (userName) => {
    // printDetails();
    userActive.push(user);

    console.log(userName);
  }
);
// deletePost().then((post) => {
//   console.log(post);
// });
console.log(userActive);
console.log(user.userName);
console.log(userActive);
