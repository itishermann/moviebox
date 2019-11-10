import React from "react";
import { connect } from "react-redux";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import label from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./MovieDetail.css";
import Characters from './characters';


function ControlledExpansionPanels(data) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let genreArray = [];
  for (let i = 0; i < data.genres.length; i++) {
    genreArray.push(
      <span className="ml-0 ml-md-3" key={i}>{data.genres[i]}{' '}</span>
    );
  }
  return (
    <div className="InfoPanel panel" >
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <label >Characters</label>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Characters id={data.id}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <label >More informations</label>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="InfoData">
          {data.genres && 
            <p>
              <label> Genre: </label>
              {genreArray}
            </p>
            }

          {data.language &&
            <p>
              <label> Language: </label>
              <span> {data.language}</span>
            </p>
            }
          {data.network&&
             <p>
                <label> Network: </label>
                <span> {data.network.name} {" "}</span>
                <span> <img src={'https://www.countryflags.io/' + data.network.country.code + '/shiny/16.png'} alt={data.network.country.code}></img></span>
             </p>
          }
         
          {data.type&&
            <p>
              <label> Type: </label>
              <span> {data.type} {" "}</span>
            </p>
          }

         {data.url2&&
         <Button href={data.url2} className="button" target="_blank" rel="noopener noreferrer" aria-label="Get more information">
            Get complete informations and schedule
          </Button>}
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}


const MovieDetail = ({ movies, match }) => {
  const movie = movies.find(
    m => m.id.toString() === match.params.id.toString()
  );
  console.log(movie);
  const { name, rating, date, summary, url, image } = movie;

  const truncatedURL = url
    ? url.substring(0, 20) + (url.length > 20 ? "..." : "")
    : "";

  return (
    <div className="MovieDetail container-fluid">
      <div className="row px-md-5">
        <div className="col">
          <h3>{name}</h3>
          <div className="d-flex flex-wrap">
            <img
              src={image || `${process.env.PUBLIC_URL}/defautImage.jpg`}
              alt={name}
              className="cover"
            />
            <div className="info mt-3 mt-md-0 flex-grow-1">
              <div className="d-block d-md-flex flex-wrap justify-content-between">
                {rating?  <label>{"Rating: " + rating}</label>:<label>{"Rating: No rating yet"}</label>}
                <label>{"Date: " + new Date(date).toLocaleDateString()}</label>
                {url && (
                  <label>
                    Official website:{" "}
                    {url && (
                      <a href={url} alt="movie url" target="_blank" rel="noopener noreferrer">
                        {truncatedURL}
                      </a>
                    )}
                  </label>
                )}
              </div>
              
              {summary? 
                <div>
                  <label>Summary</label>
                  <p className="ml-0 ml-md-3" dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
                :
                <div>
                  <label>Summary</label>
                  <p>We do not have a summary of {name} yet.</p>
                </div>
              }
              
              {ControlledExpansionPanels(movie)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return{
  movies: state.movies.movies}
};

export default connect(
  mapStateToProps,
  null
)(MovieDetail);
