let block_1 = document.querySelector(".block-11");
let block_2 = document.querySelector(".block-22");
let btn1 = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");
const API = "https://rickandmortyapi.com/api/character";
const API2 = "http://localhost:8000/Rick&Morty";
async function getCharacters() {
  let res = await fetch(API);
  let data = await res.json();
  block_1.innerHTML = "";
  data.results.forEach((elem) => {
    block_1.innerHTML += `
    <div id="${elem.id}" class="divS1">
      <div class="divS11">
         <img src="${elem.image}" alt="" />
         <div class="divContent">
          <span class="spans">${elem.name}</span>
          <span class="spans">${elem.gender}</span>
          <span class="spans">${elem.status}</span>
          <span class="spans">${elem.species}</span>
       </div>
         </div>
    </div>`;
  });
}
btn1.addEventListener("click", getCharacters());

// async function getCharacters() {
//   const res = await fetch(API);
//   const data = await res.json();
//   {
//     fetch(API2, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//       body: JSON.stringify(data.results),
//     });
//   }
// }
// getCharacters();

async function readCharacters() {
  const res = await fetch(API2);
  const data = await res.json();
  data[0].forEach((elem) => {
    console.log(elem);
    block_2.innerHTML += `
    <div id="${elem.id}" class="divS1">
      <div class="divS11">
         <img src="${elem.image}" alt="" />
         <div class="divContent">
          <span class="spans">${elem.name}</span>
          <span class="spans">${elem.gender}</span>
          <span class="spans">${elem.status}</span>
          <span class="spans">${elem.species}</span>
       </div>
         </div>
    </div>`;
  });
}

btn2.addEventListener("click", readCharacters());
