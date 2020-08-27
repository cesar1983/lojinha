// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
        --color-background: #fff;
        --color-text: #444444;
        --color-header-background: #20313b;
        --color-button-border: #e22865;
        --color-button-header-text: #fff;
        --color-button-checkout-text: #20313b;
        --color-slim-button-text: #20313b;
        --color-input-text: #282828;
        --color-error: #ec392f;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: var(--color-background);
        font-family: "Poppins", sans-serif;
        color: var(--color-text);
    }

    html,
    body,
    #root {
        height: 100vh;
    }

    a {
        text-decoration:none;
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem Poppins;
        color: var(--color-text-base);
    }

    table {
        width: 100%;
        border: 0;
        border-collapse: collapse;
        th {
            border: 0;
            border-collapse: collapse;
            color:#aaa;
            font-weight: 300;
        }
        td {
            font: 300 1.2rem Poppins;
            border-bottom: 1px solid #eee;
            border-collapse: collapse;
        }
        th,
        td,
        tr {
            padding: 5px;
        }
    }

`;

export default GlobalStyle;
