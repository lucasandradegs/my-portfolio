import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        
        background-color: ${(props) => props.theme.body};
        
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Poppins', serif;
        font-size: 1.6rem;
        outline: none;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
`