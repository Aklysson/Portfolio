import styled from "styled-components";

export const Container = styled.div`

display: flex;
gap: 1.5rem;
flex-wrap: wrap;
width: 100%;
box-sizing: border-box;

@media (max-width: 768px){
 display:flex ;
 flex-direction: column;
 justify-content: center;
 align-items: center;
        
}


.content{
    gap: 1rem;
    display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 1rem;
border-radius: 5px;
padding: 1rem;
justify-content: center;
width: 40%;
border: 1px solid #333;


@media (max-width: 768px){
 display:flex ;
 flex-direction: column;
 width: 80%;
 justify-content: center;
 align-items: center;
        
}


    svg{
        font-size: 5rem;
    }

    p{
        font-size: smaller;

        margin: 0!important;
    }
}

h3{
    color: #fff;
    font-size: smaller;
    margin-bottom: 1rem;
}

#html{
    color: #E44D26;
}

#css{
    color: #1572B6;
}

#js{
    color: #F0DB4F;
}

#node{
    color: #83CD29;
}

#tp{
    color: #181ed7;
}

#react{
    color: #61DAFB;
}
`