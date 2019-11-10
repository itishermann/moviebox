import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { searchMovie } from "../../actions";
import SearchBox from "../../components/SearchBox";
import "./Header.css";


const Header = ({ searchMovie }) => {
  const history = useHistory();
  const handleSearchSubmit = async searchText => {
    await history.push(`/`);
    await searchMovie(searchText);
  }

  return (
    <header className="Header">
      <div className="d-flex flex-wrap align-items-center">
        <Link to="/" className="mr-3">
          Movie<span>Box</span>
        </Link>
          <div className="ml-md-auto mt-2 mt-md-0">
            <SearchBox onSubmit={handleSearchSubmit}/>
          </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = dispatch => ({
  searchMovie(text) {
    dispatch(searchMovie(text));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
