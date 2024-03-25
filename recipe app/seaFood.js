let seaFoodBtn=document.querySelector("[btn-3]")
let seafoodList = document.querySelector("[ sea-list]");


async function seaFoodData (){
   let seaFood = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    let seaFoodResponse= await seaFood.json()

    let seaFoodResponseAns = seaFoodResponse.meals;
    seafoodList.innerHTML = ""

seaFoodResponseAns.map((element) => {
   

     
    let li = document.createElement("li");


    li.classList.add("card");
    li.innerHTML = `

  <img src="${element.strMealThumb}" width="200" height="150" alt="">
   <h1 class="heading">${element.strMeal}</h1>
    <div class="detail">
            <button class="btn-2" id="detail">Recipe</button>
        </div>
`;
seafoodList.appendChild(li)

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
})
}


seaFoodBtn.addEventListener("click",seaFoodData)