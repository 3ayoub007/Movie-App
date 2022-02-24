//  importing React
import React from "react";
//  importing MovieCard
import MovieCard from "../MovieCard/MovieCard";
//  importing Link
import { Link } from "react-router-dom";

const MovieList = ({ filterName, movieList, filterRating }) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {movieList
                    .filter(el => el.MovieName.toUpperCase().includes(filterName.toUpperCase()) && el.MovieRating >= filterRating)
                    .map((el) => (
                        <Link key={el.MovieId} to={{pathname: `/MoviePreview/${el.MovieId}`, state: {el}}}>
                        <MovieCard MoviePosterSrc={el.MoviePosterSrc} MovieName={el.MovieName} MovieDescription={el.MovieDescription} MovieRating={el.MovieRating} MovieTrailer={el.MovieTrailer}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
};

export default MovieList;