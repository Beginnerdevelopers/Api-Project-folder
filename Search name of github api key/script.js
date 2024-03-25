const input=document.getElementById('user')
const User=document.querySelector('.user-list')
const UserArr=[]
const getuserDAta = async() =>{
try {
    const res=await fetch('https://api.github.com/users')
    
    const data=await res.json()
    if(data){
        User.innerHTML = ""
    }
    // console.log(data)
  data.map((user) => {
    // console.log(user)
    const li=document.createElement("li")
    UserArr.push(li)
    li.innerHTML= `
    <div class="user-data">
    <img src="${user.avatar_url}" alt="">
    <div>
        <p>${user.login}</p>
        <a href="${user.html_url}" target="_blank"></a>

    </div>
</div>
    `
    User.appendChild(li)
  })
}
 catch (error) {
    console.log(error)
}


}

input.addEventListener("input",(e)=>{
    const val=e.target.value;

  UserArr.filter((searchItem)=>{
    searchItem.innerText.toLowerCase().includes(val.toLowerCase())?
    searchItem.classList.remove('hide'):
    searchItem.classList.add("hide")
  })
})

getuserDAta()