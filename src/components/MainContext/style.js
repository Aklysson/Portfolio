import styled from "styled-components";

export const Container = styled.div`
   background-color: #111;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   flex: 2 1 0;

   margin: 0;
   padding: 45px;
   font-size: 1.5rem;

   p{
    color: #a6a6a6;
    margin-bottom: 1rem;
    line-height: 1.3rem;
    font-size: smaller;
   }

   h2{
    margin-bottom: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    
   &:after{
    content: "";
    background: linear-gradient(90deg, rgb(250, 82, 82) 0%, rgb(221, 36, 118) 98%);
    height: 3px;
    width: 30%;}
    
   }

   

`;