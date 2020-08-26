// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
        --color-background: #fff;
        --color-text: #444444;
        --color-header-background: #20313b;
        --color-button-border: #e22865;
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

`;

export default GlobalStyle;
