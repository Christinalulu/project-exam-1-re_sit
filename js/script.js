// Hamburger menu function
const toggelMenu = document.querySelector(".icon-menu")
const navBarMenu = document.querySelector(".mobile_menu")
toggelMenu.addEventListener('click', function(){
   navBarMenu.classList.toggle('showmenu')
})


// Get all the recepies


const RAPIDAPI_KEY = "ad7236b3fdmsh69d7cf6cd804035p196104jsnad5a3a9d2072"
const RAPID_BASE_URL = 'https://recipify.p.rapidapi.com/today-recipe'
const GEOLOCATION_HOST = "recipify.p.rapidapi.com"


const getData = async (url,host)=>{
   const response = await fetch(url,{
      method: "GET",
      headers: {
         accept: "application/json",
         'X-RapidAPI-Key': RAPIDAPI_KEY,
         'X-RapidAPI-Host': host,
      }
   })
   if(!response.ok){
   throw new Error(`HTTP error! status: ${response.status}`);
   }
   return await response.json();
};

const runApiQueries = async ()=>{
   const geoData = await getData(RAPID_BASE_URL,GEOLOCATION_HOST);
   console.log(geoData);
}
runApiQueries();

