import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%
    } 

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }

`