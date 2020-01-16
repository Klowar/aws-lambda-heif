const test = require("./build/Release/native.node");

const a = "/Users/klowar/Desktop/out.heic /Users/klowar/Desktop/1.jpg /Users/klowar/Desktop/2.jpg /Users/klowar/Desktop/3.jpg /Users/klowar/Desktop/4.jpg /Users/klowar/Desktop/5.jpg /Users/klowar/Desktop/6.jpg /Users/klowar/Desktop/7.jpg /Users/klowar/Desktop/8.jpg /Users/klowar/Desktop/9.jpg /Users/klowar/Desktop/10.jpg /Users/klowar/Desktop/11.jpg /Users/klowar/Desktop/12.jpg /Users/klowar/Desktop/13.jpg /Users/klowar/Desktop/14.jpg /Users/klowar/Desktop/15.jpg /Users/klowar/Desktop/16.jpg";
const arr = a.split(" ");
console.log(
    test.createHeic(arr)
);
