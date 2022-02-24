//  importing react
import React, { useState } from "react";
//  importing ReactRouter 
import { Switch, Route } from "react-router-dom";
//  importing MovieList component
import MovieList from "./Components/MovieList/MovieList";
//  importing MoviePreview component
import MoviePreview from "./Components/MoviePreview/MoviePreview";
//  importing NavBar component
import NavBar from "./Components/NavBar/NavBar";
//  importing css 
import "./App.css";

const App = () => {
  const [movieList, setmovieList] = useState([
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://i0.wp.com/www.filmspourenfants.net/wp-content/uploads/2018/04/garfield-a.jpg?fit=555%2C789&ssl=1",
      MovieName: "Garfield",
      MovieDescription: "Garfield (Bill Murray) is a fat cat who loves nothing more than laying about and eating lasagna, but when his owner, Jon Arbuckle (Breckin Meyer) gains a dog as a new pet, Garfield feels left out and would constantly try to be the better pet.",
      MovieRating: 2,
      MovieTrailer: "https://www.youtube.com/embed/GV5y4yTDtBI",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://m.media-amazon.com/images/I/81g5MtvsGtL._AC_SL1500_.jpg",
      MovieName: "Casino Royale",
      MovieDescription: "After earning 00 status and a licence to kill, secret agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro. James Bond (Daniel Craig) goes on his first mission as a 00.",
      MovieRating: 4,
      MovieTrailer: "https://www.youtube.com/embed/36mnx8dBbGE",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://shahed4u.land/wp-content/uploads/2021/11/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX700.jpg",
      MovieName: "Arcane",
      MovieDescription: "The delicate balance between the rich city of Piltover and the seedy underbelly of Zaun. ... The rivalry between the cities splits families and friends as Arcane brings life to the relationships that shape some of League of Legends' famous champions including Vi, Jinx, Caitlyn, Jayce and Viktor.",
      MovieRating: 5,
      MovieTrailer: "https://www.youtube.com/embed/fXmAurh012s",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://media.senscritique.com/media/000020074408/source_big/Dachra.jpg",
      MovieName: "Dachra",
      MovieDescription: "An investigation into witchcraft leads a trio of journalism students to a mysterious town marked by sinister rituals. Inspired by true events. Inspired by true events.An investigation into witchcraft leads a trio of journalism students to a mysterious town marked by sinister rituals.",
      MovieRating: 3,
      MovieTrailer: "https://www.youtube.com/embed/a5_WTF7KtYQ",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      MovieName: "The GodFather",
      MovieDescription: "The Godfather is set in the 1940s and takes place entirely within the world of the Corleones, a fictional New York Mafia family. It opens inside the dark office of the family patriarch, Don Vito Corleone (also known as the Godfather and played by Brando), on the wedding day of his daughter, Connie (Talia Shire).",
      MovieRating: 5,
      MovieTrailer: "https://www.youtube.com/embed/sY1S34973zA",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://m.media-amazon.com/images/I/714dsIq4FXL._AC_SL1500_.jpg",
      MovieName: "50 Shades Of Grey",
      MovieDescription: "For all the trappings of success—his multinational businesses, his vast wealth, his loving family—Grey is a man tormented by demons and consumed by the need to control. When the couple embarks on a daring, passionately physical affair, Ana discovers Christian Grey's secrets and explores her own dark desires.",
      MovieRating: 4,
      MovieTrailer: "https://www.youtube.com/embed/SfZWFDs0LxA",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      MovieName: "Interstellar",
      MovieDescription: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      MovieRating: 3,
      MovieTrailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      MovieId: Math.random(),
      MoviePosterSrc: "https://m.media-amazon.com/images/M/MV5BYjEzN2FlYmYtNDkwMC00NGFkLWE5ODctYmE5NmYxNzE2MmRiXkEyXkFqcGdeQXVyMjMwODc5Mw@@._V1_.jpg",
      MovieName: "The Room",
      MovieDescription: "Johnny is a successful banker who lives happily in a San Francisco townhouse with his fiancée, Lisa. One day, inexplicably, she gets bored of him and decides to seduce Johnny's best friend, Mark. From there, nothing will be the same again.",
      MovieRating: 1  ,
      MovieTrailer: "https://www.youtube.com/embed/tfMTHIwTUXA",
    },
  ]);
  const [filterRating, setfilterRating] = useState(0);
  const [filterName, setfilterName] = useState("");
  const [movie, setMovie] = useState({});
  const pickMovie = (x) => {setMovie(x)};
  return (
    <>
      <NavBar setfilterRating={setfilterRating} setfilterName={setfilterName} pickMovie={pickMovie} setmovieList={setmovieList} movieList={movieList}/>
      <Switch>
        <Route path="/MoviePreview/:id" component={MoviePreview} />
        <Route exact path="/" render={(props) => (<MovieList  filterRating={filterRating} filterName={filterName} movieList={movieList}  movie={movie} {...props}/>)}/>
      </Switch>
    </>
  )
}

export default App;