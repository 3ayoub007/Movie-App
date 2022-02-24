//  importing css
import "./MoviePreview.css";
//  importing mui components
import { Button, Rating } from '@mui/material';

const MoviePreview = (props) => {
    const Movie = props.location.state.el;
    return (
        <>
            <div className="MovieInfos">
            <iframe title="MoviePreview" src={Movie.MovieTrailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen > </iframe>
                <div className="Infos">
                    <p>{Movie.MovieDescription}</p>
                    <Rating size="medium" defaultValue={Movie.MovieRating} readOnly/>
                    <Button size="medium" onClick={() => props.history.goBack()}>Go Back</Button>
                </div>
            </div>
        </>
    );
};

export default MoviePreview;