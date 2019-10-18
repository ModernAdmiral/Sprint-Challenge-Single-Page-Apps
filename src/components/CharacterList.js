import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import SearchForm from './SearchForm';


// import CharacterCard from ''
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const CharacterListWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    backgound: lightblue;
  `

  const CharacterCardWrapper = styled.div`
    margin: 10px;
    background: lightblue;
`

  const CharacterListHeader = styled.div`
    text-align: center;
    color: dodgerblue;
  `

  const FormWrapper = styled.div`
    margin: 30px 0;
  `
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        const characters = res.data.results.filter(character => 
            character.name.toLowerCase().includes(query.toLowerCase())
          );
        
        setCharacter(characters);
      })
      .catch(err => {
        console.log("could not get data", err)
      })
  }, [query]);

  const handleInputChange = e => {
  
    setQuery(e.target.value);

  };

  return (
    <div>
      <CharacterListHeader>
      <h2>Characters!</h2>
        <Link to={"/"}><button>Home</button></Link>
        <FormWrapper>
          <form>
            <label htmlFor="name">Search:   </label>
              <input 
              type="text" 
              onChange={handleInputChange}
              value={query}
              name="name"
              placeholder="search by name"
              ></input>
            
          </form>
        </FormWrapper>
      </CharacterListHeader>
      <CharacterListWrapper>
        
        {character.map(e => {
          return (
            <CharacterCardWrapper>
          <CharacterCard 
            key={e.id}
            image={e.image}
            name={e.name}
            status={e.status}
            species={e.species}
          />
          </CharacterCardWrapper>
          )
        })}
        
      </CharacterListWrapper>
    </div>
  );
}
