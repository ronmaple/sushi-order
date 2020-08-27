import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme: React.FC = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const theme = {
	fonts: {
		family: {
			default: `'Cormorant Garamond', serif`,
		},
		size: {
			xxs: '0.5rem',
			xs: '1rem',
			small: '1.5rem',
			medium: '2.5rem',
			large: '3.5rem',
		},
	},
	colors: {
		// black: '#1a1a1a',
		grey_light: '#bfbfbf',
		steel_blue: '#4682B4',
		darker_steel_blue: '#2b506e',
		light_steel_blue: '#90b7d5',
		even_lighter_steel_blue: '#c5d7ed',
		navy_blue: '#2d5986',
		black: '#333333',
	},
	bp: {
		phone: '375px',
		tablet: '600px',
		desktop: '1200px',
		large: '1800px',
	},
	transition: {
		transform: 'transform 250ms ease-in-out',
	},
	shadow: '0 0 .25rem 0 #535657',
	shadowHover: '0 0 0.5rem 0 #535657',
	white_shadow: '0 0 0.2rem 0 white',
};

export default Theme;
