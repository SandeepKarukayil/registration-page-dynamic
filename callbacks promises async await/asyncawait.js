//promises

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ticket");
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//   console.log("wife: i have the tics");
//   console.log("husband: we should go in ");
//   console.log("wife: no i am hungry ");
//   return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });

// const getButter = getPopcorn.then((t) => {
//   console.log("husband: i got some popcorn");
//   console.log("husband: we should go in");
//   console.log("wife: I need butter on my popcorn");
//   return new Promise((resolve, reject) => resolve(`${t} butter`));
// });

// const getColdDrinks = getButter.then((t) => {
//   console.log(`husband:i got some butter on popcorn`);

//   console.log(`wife: I need some cold drinks`);
//   console.log(`husband: here is your cold drinks`);
//   console.log(`husband: anything else darling`);
//   return new Promise((resolve, reject) => resolve(`${t} cold drinks`));
// });

// getColdDrinks.then((t) => console.log(t));
// console.log(`person4: shows ticket`);
// console.log(`person5: shows ticket`);

// ASYNC AWAIT

// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMovie = async () => {
//   const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("ticket"), 3000);
//   });
//   const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

//   const addButter = new Promise((resolve, reject) => resolve(`butter`));

//   const getColdDrinks = new Promise((resolve, reject) => resolve(`colddrinks`));

//   let ticket = await promiseWifeBringingTicks;

//   console.log(`wife:i have the ${ticket}`);
//   console.log("husband: we should go in");
//   console.log("wife:no i am hungry ");

//   let popcorn = await getPopcorn;

//   console.log(`husband: i got some ${popcorn}`);
//   console.log("husband: we should go in");
//   console.log("wife: I need butter on my popcorn");

//   let butter = await addButter;

//   console.log(`husband:i got some ${butter} on popcorn`);
//   console.log(`husband: anything else darling`);

//   console.log(`i need colddrinks `);

//   let colddrinks = await getColdDrinks;
//   console.log(`here is your ${colddrinks} `);
//   console.log(`anything else darling`);
//   console.log(`wife: lets go we are getting late`);
//   console.log(`husband: thank you for the reminder *grins*`);

//   return ticket;
// };

// preMovie().then((m) => console.log(`person3: shows ticket`));

// console.log(`person4: shows ticket`);
// console.log(`person5: shows ticket`);

// Promise.all via async await

// const preMovie = async () => {
//   const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => reject("ticket"), 3000);
//   });

//   const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

//   const getCandy = new Promise((resolve, reject) => resolve(`candy`));

//   const getCoke = new Promise((resolve, reject) => resolve(`coke`));
//   let ticket;
//   try {
//     ticket = await promiseWifeBringingTicks;
//   } catch (error) {
//     ticket = "sad face";
//   }

//   let [popcorn, candy, coke] = await Promise.all([
//     getPopcorn,
//     getCandy,
//     getCoke,
//   ]);

//   console.log(`${popcorn},${candy},${coke}`);
//   return ticket;
// };

// preMovie().then((m) => console.log(`persona3 shows ${m}`));

// console.log(`person4: shows ticket`);
// console.log(`person5: shows ticket`);

//  create post task

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
      console.log(user);
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

async function preposts() {
  try {
    console.log("sheik bro google waale");
    let x = await creatpost("feroz");
    let y = await creatpost("sandeep");
    let d = await creatpost("sudeep");
    let r = await creatpost("anu");
    let l = await updateLasteUseractivityTime();
    userActive.push(x);
    userActive.push(y);
    userActive.push(d);
    userActive.push(r);
    userActive.push(l);
    let m = await deletePost();
  } catch (err) {
    console.log("show error ");
  }
}
preposts();
console.log(userActive);
