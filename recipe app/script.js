// let container = document.querySelector("[container]")
// let ul=document.querySelector("[list]")
// const btn=document.querySelector("[btn]")
// let list =[]
// async function  getdata (){
//     console.log("helo");
//     let input = document.querySelector("[input]")
//     let inputValue=input.value
//     let data = await  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}&limit=30`)
//    let response = await data.json()
//    let responseAns= response.meals

//    responseAns.forEach(element => {

// let li=document.createElement("li")
// list.push(li)

// li.classList.add("card")
// li.innerHTML=`

//   <img src="${element.strMealThumb}" width="200" height="150" alt="">
//    <h1 class="heading">${element.strMeal}</h1>
// `

// ul.appendChild(li)
//    });

//    // let datatwo= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=53016`)
//    // let responsetwo= await datatwo.json()
//    // console.log(responsetwo)

// }
//  btn.addEventListener('click',getdata)

let container = document.querySelector("[container]");
let ul = document.querySelector("[list]");
const btn = document.querySelector("[btn]");
let input = document.querySelector("[input]");
let btn2 = document.querySelector(".btn-2");

let list = [];
async function recipe() {
  let inputValue = input.value.trim();
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`
  );
  let response = await data.json();
  let responseAns = response.meals;
ul.innerHTML = ""
  responseAns.map((element) => {
    
    let li = document.createElement("li");


    li.classList.add("card");
    li.innerHTML = `

  <img src="${element.strMealThumb}" width="200" height="150" alt="">
   <h1 class="heading">${element.strMeal}</h1>
    <div class="detail">
            <button class="btn-2" id="detail">Recipe</button>
        </div>
`;

    ul.appendChild(li);
    li.addEventListener("click", async (e) => {
      if (e.target.id === "detail") {
        let id = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element.idMeal}`
        );
        let res = await id.json();
        const resAns = res.meals;
        resAns.map((elem) => {
          let modal = document.createElement("div");
          modal.classList.add("modal");
          modal.style.display = "block";
          modal.innerHTML = `
    <p>${elem.strInstructions}</p>
    <i class="fa-solid fa-xmark" id="i"></i>
    `;
          container.appendChild(modal);
          modal.addEventListener("click", (e) => {
            if (e.target.id === "i") {
              modal.style.display = "none";
            }
          });
        });
      }
    });
  });
}
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    recipe();
  }
});

btn.addEventListener("click", recipe);

