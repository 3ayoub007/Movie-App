//  importing react 
import React from 'react';
//  importing mui components 
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Rating } from '@mui/material';
//  importing mui icons
import { PlayArrowRounded, InfoRounded } from '@mui/icons-material';
//  importing css
import "./MovieCard.css";

const MovieCard = ({ MoviePosterSrc, MovieRating, MovieName, MovieDescription }) => {
    return (
        <>
            <Card className="card">
                <CardMedia component="img" alt="Movie Poster" image={MoviePosterSrc} className="cardmedia" />
                <CardContent className="cardcontent">
                    <Typography gutterBottom variant="h5" component="div">{MovieName}</Typography>
                    <Typography variant="body2">{MovieDescription}</Typography>
                </CardContent>
                <CardActions>
                    <Rating size="small" defaultValue={MovieRating} readOnly/>
                    <Button size="small"><PlayArrowRounded /> Play</Button>
                    <Button size="small"><InfoRounded /> More Info</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default MovieCard;