"use strict";
// One of having nested objects
// type Post = {
//   title: string; // Type Annotations using semi-colons instead of commas
//   content: string;
//   date: Date;
//   author: {
//     name: string;
//     age: number;
//     email: string;
//   };
// };
let post = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
        name: "John",
        age: 32,
        email: "john@doe.com",
    },
};
