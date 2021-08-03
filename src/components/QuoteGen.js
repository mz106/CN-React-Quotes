
import React, { useState, useEffect} from 'react';
import App from '../App';
import styled from 'styled-components';
import Title from './Title';

export default function QuoteGen() {

    const [quote, setQuote] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function handleFetch() {
        fetch('https://api.chucknorris.io/jokes/random')
         .then(response => response.json())
         .then(data => {
           setQuote(data.value)
         })
      }

      return (
        <>  
            <Title />
            <QuoteWrapper>
                <QuotePlace>{quote}</QuotePlace>
            </QuoteWrapper>
            
            <QuoteBtn onClick={handleFetch}>click</QuoteBtn>
            
        </>
      )
}

const QuoteWrapper = styled.div`
    width: 80%;
    height: 30%;
    margin: 0 auto;
    border: 1px solid black;
    display: flex;
    flex-direction: center;
    justify-content: center;
`

const QuotePlace = styled.p`
    font-size: 1.5rem;
    width: 80%;
    height: 50%;
    text-align: center;
`

const QuoteBtn = styled.button`
    width: 10vw;
    height: 5vh;
    margin: 2vh auto;
    border-radius: 50px;
`

// export default QuoteGen;