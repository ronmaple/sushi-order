import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    body: {
        font-family: 'Cormorant Garamond', serif;
        font-size: '10px'
    }
`;
export default GlobalStyles;
