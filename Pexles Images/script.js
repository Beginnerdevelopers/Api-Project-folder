const searchInput = document.getElementById('input');
const imageResults = document.getElementById('container');
const btn=document.getElementById("btn")
const accessKey = 'UZyRI89INmrmY6cqBsBS5PcretVGOMs8K8hRxkOYKjgwZWg2Tm2itcFC'; // Replace with your Unsplash access key

Option ={
    method: 'GET',
  headers: {
    'Authorization': accessKey,
  }}

// const pexlesImages = async ()=>{
//     const searchInputValue=searchInput.value
//     // const data = await fetch ('https://api.pexels.com/v1/search?query=people',Option)
//     // const apiUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}&query=${searchInputValue}`;
  
// //   const data=await fetch(apiUrl)
//     // const response = await data.json()
//     // const apiUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}&query=${searchInputValue}`;

//     // console.log(response)


   
   
   
   
//     // const apiUrl = `https://api.unsplash.com/photos/?client_id=${accessKey}&query=${searchInputValue}`;
//     // const apiUrl = `https://api.pexels.com/v1/search?query=${searchInputValue}`;

//     // fetch(apiUrl)
//     //     .then(response => response.json())
//     //     .then(data => {
//     //         // displayImages(data);
//     //         console.log(data)
//     //     })
//     //     .catch(error => {
//     //         console.error('Error fetching images:', error);
//     //     });
// }
const pexlesImages = async ()=>{
  const searchInputValue=searchInput.value
  while(imageResults.firstChild){
    imageResults.removeChild(imageResults.firstChild)
  }
if(searchInputValue===""){
  alert("Please input something")
}
else{
  const apiUrl = `https://api.pexels.com/v1/search?query=${searchInputValue}`
  const data=await fetch(apiUrl,Option)
  const response=await data.json()
  const responsePhoto=response.photos
  // console.log(responsePhoto)
responsePhoto.forEach(element => {
const imagesDiv=document.createElement('div')
imagesDiv.classList.add("images")
imagesDiv.innerHTML = `
<div class="card" id="card">
<img src="${element.src.original}" alt="">
<span class="id" id="id">${element.id}</span>

</div>
`
imageResults.appendChild(imagesDiv)
 console.log(imageResults)
sessionStorage.setItem()
//  const convertArry= Array.from(imageResults)
//  console.log(typeof(convertArry))
//  localStorage.setItem('convertArry', JSON.stringify(convertArry));
//  var storedArray = JSON.parse(localStorage.getItem('myArrayKey'));
// console.log(storedArray)
});
searchInputValue===""
}
}

  btn.addEventListener('click',pexlesImages)