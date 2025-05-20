import requests from "../../utils/requests";
let rowData = [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "Trending Now",
    fetchUrl: requests.fetchTrending,
  },
  {
    title: "Action Movies",
    fetchUrl: requests.fetchActionMovies,
  },
  {
    title: "Comedy Movies",
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    title: "Horror Movies",
    fetchUrl: requests.fetchHorrorMovies,
  },
  {
    title: "Romance Movies",
    fetchUrl: requests.fetchRomanceMovies,
  },
  {
    title: "TV Shows",
    fetchUrl: requests.fetchTvShows,
  },
  {
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
  },
];
export default rowData;
