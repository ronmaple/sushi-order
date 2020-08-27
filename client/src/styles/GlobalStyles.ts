import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    body: {
        font-size: '10px'
    }
    a,li {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }     

    li {
        list-style-type: none;
    }

    * {
        font-family: 'Inter', sans-serif;
    }
`;
export default GlobalStyles;
