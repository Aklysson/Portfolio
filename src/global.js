import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  
  body {
    padding: 0;
    background: #271B31 ;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: white;
    overflow-x: hidden;
    margin: 2rem 3rem;


    @media (max-width: 768px){
      margin: 2rem 1rem;
    }

  }



  #content {
    display: flex;
    gap: 3rem;
    align-content: center;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      
    }
  }

  :root{
    --color: linear-gradient(90deg, rgb(250, 82, 82) 0%, rgb(221, 36, 118) 98%);
    --background-div: #111
    --title-color: #fff
    --p-color: #a6a6a6
  }

  button {
    cursor: pointer;
    background : var(--color);
    color: #fff;
    border-radius: 3rem;
    text-decoration: none;
    padding: 1rem 1.2rem;
    border: none;
  }

  h1{

    color: #FFF;
    font-size: 5rem;
    margin-bottom: 7rem;
    background: linear-gradient(90deg, rgb(250, 82, 82) 0%, rgb(221, 36, 118) 98%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }
`
 