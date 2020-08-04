import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .character-div {
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: rgb(0, 0, 0, 0.10);
    border-radius: 10px;
    margin-bottom: 30px;
    transition: width 0.10s, height 0.10s;
    &:hover {
      width: 20vw;
      height: 50vh;
    }
    p {
      line-height: 0.1px;
    }
  }
`;

// Character component here
const CharacterCard = ({name, gender, height, mass, birthYear, eyeColor, hairColor, skinColor}) => {
  return (
    <StyledDiv>
      <div className='character-div'>
        <p>Name: {name}</p>
        <p>gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Birth Year: {birthYear}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
        <p>Skin Color: {skinColor}</p>
      </div>
      
    </StyledDiv>
  );
};

export default CharacterCard; 

