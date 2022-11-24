const toggelMenu = document.querySelector(".icon-menu")
const navBarMenu = document.querySelector(".mobile_menu")

console.log(toggelMenu);
console.log(navBarMenu);

toggelMenu.addEventListener('click', function(){
   console.log("click toggel");
   navBarMenu.classList.toggle('showmenu')
})