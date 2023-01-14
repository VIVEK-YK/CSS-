
let api_key = "04a03760452fdabea07d13c24071c6e3";
let btn = document.querySelector("body");
// let api_key = "enter you api key";

let toggleMenu = document.querySelector(".toggle");
toggleMenu.addEventListener("click", () => {
  console.log("clicked");
  let ul = document.querySelector(".bottomHeader");
  ul.classList.toggle("show");
  toggleMenu.classList.toggle("fa-xmark");
  ul.classList.add("bg");
});
let tv = document.getElementById('tv');
let container = document.getElementsByClassName("container");
let url;
let i = 1;
let api_key = "enter api key";


window.onload = ()=>{
  fetchData()


}
  url = `
  https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=${i}`
  


function fetchData(){
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        i++
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
        console.log(Error(message));
      }
      return response.json();
    })
    .then((movies) => {
      let container = document.querySelector(".container");
      // console.log(movies.results[i].postser_path)
      console.log(movies);
      let myLen = movies.results.length
      for (var i = 0; i < myLen; i++) {
        let movie = movies.results[i];
      container.innerHTML += `<div class="box">
      <img src="http://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="img" />
  <div class="moviesDetails">
    <div class="leftDetails">
      <h5>${movie.original_name
      }</h5>
      <p>${movie.release_date}</p>
    </div>
    <div class="rightDetails rating">${movie.vote_average}</div>
  </div>
</div>`;
}
    })
    .catch((error) => {
      error.message; // 'An error has occurred: 404'
      console.log(error);
    });
  }

