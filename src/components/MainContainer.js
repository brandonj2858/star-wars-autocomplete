import React, {Component, useEffect, useState} from 'react';
import SearchArea from './SearchArea'

class MainContainer extends Component {

  constructor(props) {
    super(props)
    this.findMatches = this.findMatches.bind(this);
    this.state = {
      characters: [],
      input: ''
    }

  }



  componentDidMount() {
    fetch(`https://swapi.co/api/people/`)
    .then(res => res.json())
    .then(resObj =>  this.setState({characters: resObj.results}))
  }



  findMatches(event, character) {
    const charName = this.state.characters.map((character) => character.name)
    console.log(charName);
       charName.filter((char) => {
        const regex = new RegExp(event.value, 'gi');
        return charName.match(regex)

      })
  }


  render() {
    return(
      <div className='mainArea'>

      <div className="charContainer"><ul className="charList">
        {this.state.characters.map((character) => {return <li key={character.id}>{character.name}</li>})}</ul>
        <input type="text" onChange={this.findMatches} value={this.props.input}/>
      </div>
      </div>

    )
  }
}

export default MainContainer
