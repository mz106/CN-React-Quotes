
import React, { useState, useEffect } from "react";
import QuoteGen from "./components/QuoteGen";
import styled from 'styled-components';

function App() {

  // const handleFetch = async () => {
  //   const response = await fetch('https://api.chucknorris.io/jokes/random');
  //   setData([...data, response])
  //   console.log('clicked')
  // }

  // function handleFetch() {
  //   fetch('https://api.chucknorris.io/jokes/random')
  //    .then(response => response.json())
  //    .then(data => {
  //      setQuote(data.value)
  //    })
  // }

  return (
    <Wrapper>
      <QuoteGen />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid black;
`

export default App;
