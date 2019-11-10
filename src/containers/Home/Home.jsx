import React from "react";
import { useHistory } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

import { connect } from "react-redux";
import MovieCard from "../../components/MovieCard";
import { STATUS } from "../../constants";
import "./Home.css";

function Home({ movies, status, searchText }) {
  const hasPendingStatus = status.moviesFetchingStatus === STATUS.PENDING;
  const history = useHistory();

  return (
    <div className="Home container">
      <div className="row">
        <div className="col">
          <h3>{"Search results "}</h3>
          {hasPendingStatus && <LinearProgress className="LinearProgress" />}
          <div className="d-flex flex-wrap">
            {movies &&
              Object.entries(movies).map(([index, movie]) => (
                <MovieCard
                  {...movie}
                  key={index}
                  onClick={() => history.push(`/movies/${movie.id}`)}
                />
              ))}
            {!movies&&(<p>Let's try to search something</p>)}
            {movies.length === 0&&<p>Nothing found</p>}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          {status.moviesFetchingStatus === STATUS.ERROR &&
            status.moviesFetchingError && (
              <div className="alert alert-danger mt-3" role="alert">
                {status.moviesFetchingError}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  searchText: state.movies.searchText,
  status: state.status
});

export default connect(
  mapStateToProps,
  null
)(Home);
