const searchInput = document.getElementById('input');
const imageResults = document.getElementById('container');
const btn=document.getElementById("btn")
const accessKey = 'UZyRI89INmrmY6cqBsBS5PcretVGOMs8K8hRxkOYKjgwZWg2Tm2itcFC'; // Replace with your Unsplash access key

Option ={
    method: 'GET',
  headers: {
    'Authorization': accessKey,
  }}
  const pexlesImages = async ()=>{
    const searchInputValue=searchInput.value
    const apiUrl = `https://api.pexels.com/v1/search?query=${searchInputValue}`
const data=await fetch (apiUrl,Option)
const response=await data.json()
const responsePhoto=response.photos
console.log(responsePhoto[0].src)
responsePhoto.forEach(element => {
   
const crad=document.createElement('div')
crad.classList.add("card")
crad.innerHTML = `

<img src="${element.src.original}" alt="">
<span class="id" id="id">${element.id}   </span>
<span  onclick=down() class="download" id="download"><a href="${`${element.id}.jpg`}"><box-icon id="download" name='cloud-download' ></box-icon></a></span>
<span onclick=share() class="share" id="share"><box-icon type='solid' name='share-alt'></box-icon></span>

`


document.getElementById("flex").appendChild(crad)

});

  }
function share() {
  const shareUrl = encodeURIComponent(window.location.href);
const facebookUrl = 'https://web.facebook.com/index.php/?_rdc=1&_rdr'
const twitterUrl = 'https://twitter.com/'
  window.open(facebookUrl, '_blank');
  window.open(twitterUrl, '_blank');
}
  btn.addEventListener('click',pexlesImages)

  let load =document.getElementById("load")
load.addEventListener("click",pexlesImages)
