// Write your Character component here
import React, {useEffect} from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`
    width: 60%;
    border: 1px solid gray;
    background-color: white;
    margin: 0 auto; 
    margin-bottom: 20px;
`

const Character = props => {
    const{key, info} = props;

    return(
        <StyledChar>
            <h2>{info.name}</h2>
            <div className = 'container'>
                <p>Gender: {info.gender}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Birth Year: {info.birth_year}</p>
            </div>
        </StyledChar>
    )
}

export default Character;