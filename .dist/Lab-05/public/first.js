console.log("Is this working?");
console.log("Tawhid Hn");

const userDiv = document.getElementById("div");
console.log(userDiv);

fetch('http://localhost:3000/movie')
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      console.log(movie);
      userDiv.innerHTML += `
      <h3 style="color: red;">${movie.Movie_Name}</h3>
      <p>Genre: ${movie.Genre}</p>         
      <p>Year: ${movie.Year}</p>                 
      <p>Director ID: ${movie.Director_ID}</p>    
      <address>IMDb Rating: ${movie.IMDb_Rating}</address> 
      <hr>
      `;
    });
  })
  .catch(error => console.error('Error fetching movies:', error));