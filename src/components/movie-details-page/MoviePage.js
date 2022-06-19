import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./MoviePage.css";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import AddLinkIcon from "@mui/icons-material/AddLink";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarRatings from "react-star-ratings";
import AddToWishList from "../reusable-components/AddToWishList";

function MoviePage() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  console.log("id", id);
  console.log("id", id);
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=eddd038321981ee2c55617fffd2ddd09`
      )
      .then((res) => {
        setCast(res.data.cast);
        console.log("res.data.cats", res);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=eddd038321981ee2c55617fffd2ddd09`
      )
      .then((res) => {setMovie(res.data)
        console.log("res", res);

      });
  }, []);
  const {
    title,
    poster_path,
    tagline,
    genres,
    overview,
    release_date,
    spoken_languages,
    vote_average,
    runtime,
  } = movie;
  console.log("movie", movie);
  return (
    <div className="container movie-container">
      <div className="row justify-content-center">
        <div className="poster-container col-lg-4 col-md-6 col-10 d-flex align-items-center">
          <img
            className="poster-img w-100"
            src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          />
        </div>
        <div className="col-lg-8 col-md-6 col-10">
          <p className="display-5 mb-0">
            {title} <AddToWishList movie={movie} />
          </p>
          <p className="fw-bolder fs-6">{tagline}</p>
          <div className="d-sm-flex justify-content-between">
            <div>
              <StarRatings
                rating={(vote_average | 0) / 2}
                starDimension="15px"
                starSpacing="2px"
              />
              <span>{vote_average}</span>
            </div>
            <p className="text-secondary  fs-6">
              {spoken_languages?.map((lang) => {
                return <span key={lang.name}>{lang.name}/</span>;
              })}
              {runtime} min/
              {release_date?.substring(0, release_date.indexOf("-"))}
            </p>
          </div>
          <div>
            <p className="fw-bolder fs-6">THE GENERS</p>
            <div className="d-flex">
              {genres?.map((genre) => {
                return (
                  <p className="px-1 genres-name" key={genre.id}>
                    <NotStartedIcon className="svg-small"></NotStartedIcon>
                    {genre.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <p className="fw-bolder fs-6">THE SYNOPSIS</p>
            <p className=" text-secondary overview">{overview}</p>
          </div>
          <div>
            <p className="fw-bolder fs-6">THE CAST</p>
            <div className="d-flex">
              {cast.slice(0, 5)?.map((memper) => {
                return (
                  <div
                    key={memper.id}
                    className="cast-img-container"
                    style={{
                      backgroundImage:
                        "url(" +
                        `https://image.tmdb.org/t/p/w780${memper.profile_path}` +
                        ")",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="actions  col-lg-10 col-12 ">
            <button
              type="button"
              className="btn btn-outline-dark px-4  py-1 m-2"
            >
              <a
                className="text-dark"
                href="https://www.sonicthehedgehogmovie.com"
              >
                Website
                <AddLinkIcon className="svg-small"></AddLinkIcon>
              </a>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark px-4  py-1 m-2"
            >
              IMDB
              <VideoSettingsIcon className="svg-small"></VideoSettingsIcon>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark px-4  py-1 m-2"
            >
              Trailer
              <PlayArrowIcon className="svg-small"></PlayArrowIcon>
            </button>
            <Link className="text-light" to="/">
              <button
                type="button"
                className="btn btn-dark px-4  py-1 m-2"
              >
                <ArrowBackIcon className="svg-small"></ArrowBackIcon>
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
