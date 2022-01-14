const key = `f2e92d2e`;

const moviesList = `http://www.omdbapi.com/?s=batman&apikey=${key}`;

const detailsList = `http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=${key}`;

const batList = document.getElementById("moviesList");


const logData = (data) => {
    return data;
}

const extractSearch = (data) => {
    return data.Search;
}

function getBatmanData () {
    fetch(moviesList)
    .then(response => response.json())
    .then(logData)
    .then(extractSearch)
    .then(printMovieTitles)
}


 getBatmanData();

 function printMovieTitles(movies) {
     console.log(movies);
     movies.forEach(movie => {

         let movieTitle = document.createElement('p');
         movieTitle.innerHTML = movie.Title;
         movieTitle.id = `${movie.imdbID}`;
         batList.appendChild(movieTitle);


         let movieImage = document.createElement('img');
         movieImage.setAttribute ("src", movie.Poster)
         batList.appendChild(movieImage);
         
     })


}

moviesList.addEventListener("click", (e) => {
   
    fetch(`http://www.omdbapi.com/?i=${e.target.id}&apikey=${key}`)
    .then(response => response.json())
    .then(printMovieTitles);
    
});