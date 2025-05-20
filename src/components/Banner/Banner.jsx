import { useEffect, useState } from "react";
import requests from "../../utils/requests.jsx";
import instance from "../../utils/axios.jsx";
import "./Banner.css";

const Banner = () => {
  let truncate = (overview, maxLength) => {
    return overview?.length > maxLength
      ? overview.slice(0, maxLength) + "..."
      : overview;
  };

  let [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let request = await instance.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `URL("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fadebottom" />
    </div>
  );
};

export default Banner;
