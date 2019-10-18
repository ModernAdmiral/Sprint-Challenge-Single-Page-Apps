import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function WelcomePage() {
  
  const ContentWrapper = styled.div`
      display: block;
      text-align: center;
  `

  const Morty = styled.div`
     margin: auto;
     text-align: center;
  `

  const ButtonWrapper = styled.div`
      margin-bottom: 30px;
  `
  return (
    <section className="welcome-page">
      <header>
        
          <h1>Welcome to the ultimate fan site!</h1>
          <ContentWrapper>
          <ButtonWrapper><Link to={`/characters`}><button>Meet the characters!</button></Link></ButtonWrapper> 
        
        <Morty>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Morty>
        </ContentWrapper>
      </header>
    </section>
  );
}
