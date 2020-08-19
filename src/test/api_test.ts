const api = require("../index").default;

const turbos = [
    "/Users/klowar/Desktop/jpgs/out.heic",
    "/Users/klowar/Desktop/jpgs/1.jpg",
    "/Users/klowar/Desktop/jpgs/2.jpg",
    "/Users/klowar/Desktop/jpgs/3.jpg",
    "/Users/klowar/Desktop/jpgs/4.jpg",
    "/Users/klowar/Desktop/jpgs/5.jpg",
    "/Users/klowar/Desktop/jpgs/6.jpg",
    "/Users/klowar/Desktop/jpgs/7.jpg",
    "/Users/klowar/Desktop/jpgs/8.jpg",
    "/Users/klowar/Desktop/jpgs/9.jpg",
    "/Users/klowar/Desktop/jpgs/10.jpg",
    "/Users/klowar/Desktop/jpgs/11.jpg",
    "/Users/klowar/Desktop/jpgs/12.jpg",
    "/Users/klowar/Desktop/jpgs/13.jpg",
    "/Users/klowar/Desktop/jpgs/14.jpg",
    "/Users/klowar/Desktop/jpgs/15.jpg",
    "/Users/klowar/Desktop/jpgs/16.jpg"
]
console.log(
    api.createHeic(turbos)
);
