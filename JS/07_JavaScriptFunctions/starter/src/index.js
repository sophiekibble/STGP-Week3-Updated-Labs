const movies = [
    {"title": "Jaws", "director": "Steven Spielberg", "year": "1975"},
    {"title": "Star Wars", "director": "George Lucas", "year": "1977"},
    {"title": "Avengers: Infinity War", "director": "Anthony and Joe Russo", "year": "2018"},
    {"title": "Top Gun", "director": "Tony Scott", "year": "1986"},
    {"title": "Justice League", "director": "Zack Snyder", "year": "2017"}
];

// Part 1 - Create a function to find a movie and output it's detail
function findMovie(movieTitle) {
    for (let movie of movies) {
        if (movie.title === movieTitle){
            console.log('${movie.title} is a film directed by ${movie.director} in $movie.year}');

        }
        console.log(movies);
    }
    console.log(movies);
}  

findMovie("Star Wars");
console.log(movies)

let movie = "Thor: Ragnorok";
console.log(movie)

findMovie(movie);

// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle) {
    for (let movie of movies) {
        if (movie.title === movieTitle) {
            return movie;
        }
        console.log(movie);
    }

    console.log("Any text, any text at all!");
    return `Movie not found`;
}

let myMovie = returnMovie("Avengers: Infinity War");

console.log(myMovie);

console.log(`${myMovie.title} is a film directed by ${myMovie.director} released in ${myMovie.year}`);


let myOtherMovie = returnMovie("Thor: Ragnorok");

console.log(myOtherMovie);


function myMovieDetails(anyMovie) {
    
    if (typeof (anyMovie) === 'object') {
        return `${anyMovie.title} is a film directed by ${anyMovie.director} released in ${anyMovie.year}`;
    } else {
        return anyMovie;
    }
}


console.log(myMovieDetails(myOtherMovie));

console.log(myMovieDetails(returnMovie("Jaws")));
console.log(myMovieDetails(returnMovie("Star Wars")));
console.log(myMovieDetails(returnMovie("Top Gun")));
console.log(myMovieDetails(returnMovie("Avengers: Infinity War")));