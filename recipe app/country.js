let inputCountry=document.querySelector("[ input-country]")
let btnCountry=document.querySelector("[btn-country]")
let countryContainer = document.querySelector("[country-container]");
let countryUL = document.querySelector("[country-list]");
async function data (){
    let inputValue=inputCountry.value.trim()
let countryData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${inputValue}`)
let countryRespons= await countryData.json()
// console.log(countryRespons)
let countryResponsValue=countryRespons.meals
countryUL.innerHTML = " "
// console.log((countryResponsValue));
countryResponsValue.forEach(element => {
  
    let li = document.createElement("li");


    li.classList.add("card");
    li.innerHTML = `

  <img src="${element.strMealThumb}" width="200" height="150" alt="">
   <h1 class="heading">${element.strMeal}</h1>
    <div class="detail">
            <button class="btn-2" id="detail">Recipe</button>
        </div>
`;

countryUL.appendChild(li);
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
        modal.style.zIndex = "2";
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
inputCountry.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        data()
    }
})
btnCountry.addEventListener("click",data)