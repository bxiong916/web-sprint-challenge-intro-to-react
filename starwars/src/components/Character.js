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
    color: #f4f6ff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin-bottom: 30px;
    /* transition: width 0.5s, height 0.5s; */
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
        <p>{name}</p>
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
