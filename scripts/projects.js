const dog = await fetch(`https://dog.ceo/api/breeds/image/random`).then(r => r.json());

const dogImg = document.getElementById("dog");

dogImg.setAttribute("src", dog.message)