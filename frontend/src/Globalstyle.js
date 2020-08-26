// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 60%;
        --color-background: #fff;
        --color-text: #444444;
        --color-header-background: #20313b;
        --color-button-border: #e22865;
        --color-button-text: #fff;
        --color-slim-button-text: #20313b;
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
            text-align:center;
            color:#aaa;
            font-weight: 300;
        }
        td {
            border-bottom: 1px solid #eee;
            border-collapse: collapse;
        }
        th,
        td,
        tr {
            padding: 8px;
        }
    }

`;

export default GlobalStyle;
