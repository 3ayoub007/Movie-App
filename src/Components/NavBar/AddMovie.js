//  importing react
import React, { useState } from "react";
//  importing mui components
import { Button, Box, Typography, Modal, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { inputLabelClasses } from "@mui/material/InputLabel";

const AddMovie = ({ pickMovie, setmovieList, movieList }) => {
    const [open, setOpen] = React.useState(false);
    const [MovieName, setMovieName] = useState("");
    const [MoviePosterSrc, setMoviePosterSrc] = useState("");
    const [MovieDescription, setMovieDescription] = useState("");
    const [MovieRating, setMovieRating] = useState(1);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addmovie = () => {
        pickMovie({ MovieName, MoviePosterSrc, MovieDescription, MovieRating });
        handleClose()
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#121212',
        borderRadius: "12px",
        p: 4,
        color: "white",
        textAlign:"center"
    };
    const theme = createTheme({
        palette: {primary: {main: '#FFF'}}
    });
    return (
        <>
            <Button sx={{'&:hover': {backgroundColor: 'rgb(43, 43, 43)'}}} onClick={handleOpen} style={{color:"white", borderRadius:"12px"}}>Add Movie</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Movie Details
                    </Typography>
                    <Box component="form" sx={{ 
                        '& > :not(style)': { m: 1, width: '60%' },
                        }  
                        } noValidate autoComplete="off" >
                        <ThemeProvider theme={theme} >
                            <TextField InputLabelProps={{ sx: { color: "white",[`&.${inputLabelClasses.shrink}`]: {color: "white"}}}} label="Movie Name" variant="outlined" onChange={(x) => setMovieName(x.target.value)}/>
                            <TextField InputLabelProps={{ sx: { color: "white",[`&.${inputLabelClasses.shrink}`]: {color: "white"}}}} label="Movie Description" variant="outlined" onChange={(x) => setMovieDescription(x.target.value)} />
                            <TextField InputLabelProps={{ sx: { color: "white",[`&.${inputLabelClasses.shrink}`]: {color: "white"}}}} label="Movie Poster" variant="outlined" onChange={(x) => setMoviePosterSrc(x.target.value)} />
                            <TextField InputLabelProps={{ sx: { color: "white",[`&.${inputLabelClasses.shrink}`]: {color: "white"}}}} label="Movie Rating" variant="outlined" onChange={(x) => setMovieRating(x.target.value)} />
                        </ThemeProvider>
                    </Box>
                    <Button onClick={handleClose} style={{color:'white', marginTop:"10px"}} sx={{'&:hover': {backgroundColor: 'rgb(43, 43, 43)'}}}>CANCEL</Button>
                    <Button sx={{'&:hover': {backgroundColor: 'rgb(43, 43, 43)'}}} style={{color:'white', marginTop:"10px"}} onClick={() => { addmovie(); setmovieList([...movieList, { MovieName: MovieName, MoviePosterSrc: MoviePosterSrc, MovieDescription: MovieDescription, MovieRating: Number(MovieRating) }]) }}>
                        CONFIRM     
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default AddMovie;