import styled from "styled-components";

export const Container = styled.aside`
   background-color: #111;
   padding-bottom: 3rem;
   box-sizing: border-box;
   border-radius: 5px;

   display: flex;
   flex-direction: column;
   flex: 1 1 0;
   align-items: center;
   gap: 0.8rem;


   #dev{
    padding: 1rem;
    background-color: #1d1d1d;
    border-radius: 10px;
    margin: 0;
    color: #d6d6d6
   }


   img {
    max-width: 70%;
    margin-top: -3rem;
    border-radius: 10px;
  }

  .icons{
    display: flex;
    gap: 1rem;
    align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  
  

  }

  #linkedIn{
    color: #0072b1;
  }
  #Github{
    color: #111;
  }
  #Instagram{
    color: #bc2a8d;
  }

  a{
    display: flex;
    align-items: center;
    background: #1d1d1d;
    border-radius: 5px;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6em;
    transition: 0.4s;
    
  &:hover {
    background: #bc2a8d;
    color: #fff!important;
  }
  }

  .Section{
    background-color: #1d1d1d;
    padding: 0.8rem;
    border-radius: 5px;
    width: 80%;
  }

  button{
    font-size: medium;
  }

  #telefone{
    color: #e93b81;
  }
  #email{
    color: #c17ceb;
  }
  #dados{
    color: #6ab5b9;
  }
`;