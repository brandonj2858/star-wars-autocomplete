import React, {Component, useEffect, useState} from 'react';
import SearchArea from './SearchArea';
import CharacterCard from './CharacterCard';

class MainContainer extends React.Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      characters: [],
      matches: [],
      suggestions: [],
      selectedCharacter: [],
    }

  }



  componentDidMount() {
    fetch(`https://swapi.co/api/people/`)
    .then(res => res.json())
    .then(resObj =>  this.setState({characters: resObj.results}))
  }



  handleChange(event) {
    const input = event.target.value
    const characterNames = this.state.characters.map((char) => {
      return char.name
    })
    if (input.length === 0) {
      this.setState({
        suggestions: []
      })
    }
    else {
      const regex = new RegExp(input, 'gi');
      const suggestions = characterNames.filter((name) => (regex.test(name)))
      this.setState({suggestions: suggestions})
    }
    console.log(this.state.suggestions);
  }

  handleClick(evt) {
    console.log(evt.target.innerText);
    const selectedChar = this.state.characters.filter((char) => {
      return char.name === evt.target.innerText
    })
    this.setState({selectedCharacter: selectedChar});
    console.log(this.state.selectedCharacter)
  }

  /* Help with setting key
  checkUrl(evt) {
    const characterUrls = this.state.characters.map((char) => {
      return char.url.split("").reverse()[1]
    })
    console.log(characterUrls)

  } */



  render() {
    return(
      <div className='mainArea'>

      <div className="charContainer">
        <div className="allChars">
        <ul className="charList">
          {this.state.characters.map((character) => {return <li onClick={this.checkUrl} key={character.url.split("").reverse()[1]}>{character.url}</li>})}
        </ul>
        </div>

        <div className="searchSuggestions">
        <input className="searchBox" type="text" onChange={this.handleChange} value={this.props.input}/>

        {this.state.suggestions.map((char) => {return <li key={char.name} onClick={(evt) => this.handleClick(evt) } className="suggestionList"> {char}</li>})}

        </div>

        <div className="characterView">
        {this.state.selectedCharacter.map((char) => {
          return( <CharacterCard character={this.state.selectedCharacter} />)
        })}

        </div>

      </div>
      </div>

    )
  }
}

export default MainContainer
