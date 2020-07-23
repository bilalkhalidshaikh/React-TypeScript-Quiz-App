import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/nattu-adnan-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
  footer{
    flex-shrink: 0;
    background-color: #333;
    background-repeat: no-repeat;
    background-attachment: scroll;
    opacity: .6;
    color: white;
    display: grid;
    flex: 1;
    width: 780px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    max-width: 80%;
    margin-top: 480px !important;
  }
  
  span{
    display: block;
    opacity: 1 !important;
    font-size: 1.7rem;
    color:  #15a9ffce !impotant;
    cursor: pointer;
  }
  .fa-github, .fa-facebook, .fa-twitter, .fa-instagram{
    color:  rgb(6, 255, 255) !important;
    margin: 10px;
  }
  .fa-github:hover, .fa-facebook:hover, .fa-twitter:hover, .fa-instagram:hover{
    color:   red;
  }
  .fa-heart{
    color: red;
  }
  strong{
    color: #ccc;
  }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(
      180deg,
      #61f6bd, #56d7ff, #15a9ffce
      // #ccc,
      // #eee,
      // rgba(190, 150, 37, 0.938)
    );
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #f6d361, #fda085 );
    border: 2px solid #d38558;
    color: #333;
    font-size: 1rem;
    font-weight: bolder;
    text-decoration: underline;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
