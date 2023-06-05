import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import request from "./request";
import Row from "./Row";
import Banner from "./Banner";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Banner fetchData={request.fetchNetflixOriginal} />
      <Row
        title="NetflixOrginal"
        fetchUrl={request.fetchNetflixOriginal}
        isLarge
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="TopRated" fetchUrl={request.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={request.fetchActionMovies} />
      <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default Home;
