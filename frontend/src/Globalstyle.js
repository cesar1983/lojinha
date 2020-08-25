// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
        --color-background: #f0f0f7;
        --color-text: #444444;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--color-text);
    }
    body {
        background-color: var(--color-background);
        font-family: "Karla", sans-serif;
    }
    html,
    body,
    #root {
        height: 100vh;
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem Karla;
        color: var(--color-text-base);
    }

    #root {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
        width: 90vw;
        max-width: 700px;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

`;

export default GlobalStyle;
