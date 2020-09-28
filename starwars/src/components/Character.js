import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	color: red;
	.character-div {
		width: auto;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
		background-color: rgb(0, 0, 0, 0.5);
		border-radius: 10px;
		margin-bottom: 30px;
		transition: width 0.1s, height 0.1s;
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
const CharacterCard = ({
	name,
	gender,
	height,
	mass,
	birthYear,
	eyeColor,
	hairColor, 
	skinColor,
}) => {
	return (
		<StyledDiv className="character-div">
			<p>Name: {name}</p>
			<p>gender: {gender}</p>
			<p>Height: {height}</p>
			<p>Weight: {mass}</p>
			<p>DOB: {birthYear}</p>
			<p>Eye Color: {eyeColor}</p>
			<p>Hair Color: {hairColor}</p>
			<p>Skin Color: {skinColor}</p>
		</StyledDiv>
	);
};

export default CharacterCard;
