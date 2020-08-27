export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const OPEN_MODAL = 'OPEN_MODAL';
export const SET_CURRENT_SELECTED = 'SET_CURRENT_SELECTED';

export const setCurrentPage = (page: string) => {
	console.log('setCurrentPage invoked, page param passed: ', page);
	return {
		type: SET_CURRENT_PAGE,
		payload: page,
	};
};

export const setCurrentSelected = (selectedItem: string) => {
	console.log('setCurrentSelected ', selectedItem);
	return {
		type: SET_CURRENT_SELECTED,
		payload: selectedItem,
	};
};

export const openModal = (toOpenModal: boolean) => {
	console.log('openModal invoked, value passed: ', toOpenModal);
	return {
		type: OPEN_MODAL,
		payload: toOpenModal ? true : false,
	};
};
