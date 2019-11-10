import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: false,
      isLoading: true
    };
    this.apilink='https://api.tvmaze.com/shows/'+props.id+'/cast';
    this.characters=[];
  }
  componentDidMount(){
    this.setState({isLoading:true});
    fetch(this.apilink)
      .then(response => response.json())
      .then(_data => {
        this.setState({ data:_data });
        this.parseData(this.state.data);
      }
        )
      .catch(error => this.setState({error:true, isLoading:false}));
  }
  
  parseData=(data)=>{
      let i=0;
      data.forEach(element=>{
      i++;
      this.characters.push(
        <p key={i} className="ml-0 ml-md-3">
          <a href={element.person.url}>{element.person.name}</a> as <a href={element.character.url}>{element.character.name}</a>
        </p>)
      });
      this.setState({ isLoading:false})
  }

  render() {
    return(
        this.state.isLoading?
            <div>
                <CircularProgress/>
            </div>:
            this.characters.length>0?
            <div>
                {this.characters}
            </div>:
            <div>
                We don't have characters list yet
            </div>
    )
  }
  
}
export default Characters;