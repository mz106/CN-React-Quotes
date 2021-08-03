
import React from 'react';
import styled from 'styled-components';

function Title() {

    return (
    <TopTitle>Chuck Norris!</TopTitle>
    )
}

const TopTitle = styled.h1`
    border: 1px solid black;
    width: 80%;
    font-size: 4rem;
    margin: 0 auto;
    text-align: center;
    padding: 1.5em;
`

export default Title;