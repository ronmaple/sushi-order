import { SET_CURRENT_PAGE, SET_CURRENT_SELECTED, OPEN_MODAL } from '../actions/cart.actions';

type InitialState = {
	currentSelectedKey: string;
	isModalOpen: boolean;
	currentSelectedItem: {
		name: '' | string;
		price: 0 | number;
	};
	shoppingCart: [] | ShoppingCart[];
};

type ShoppingCart = {
	name: string;
	price: number;
	total: number;
};

type CartAction = {
	type: string;
	payload: any;
};

const initialState: InitialState = {
	currentSelectedKey: 'roll',
	isModalOpen: false,
	shoppingCart: [],
	currentSelectedItem: {
		name: '',
		price: 0,
	},
};

const cartReducers = (state = initialState, action: CartAction) => {
	switch (action.type) {
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentSelectedKey: action.payload,
			};
		}

		case OPEN_MODAL: {
			return {
				...state,
				isModalOpen: action.payload,
			};
		}

		case SET_CURRENT_SELECTED: {
			return {
				...state,
				currentSelectedItem: {
					name: action.payload.name,
					price: parseFloat(action.payload.price),
				},
			};
		}

		default: {
			return state;
		}
	}
};

export default cartReducers;
