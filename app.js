const toggler = document.querySelector("#toggler")
const menu = document.querySelector(".nav-container")

console.log(menu)
console.log(toggler)

toggler.addEventListener("click", ()=>{
    toggler.classList.toggle("active")
    console.log(toggler)
    menu.classList.toggle("active")
    console.log(menu)
})