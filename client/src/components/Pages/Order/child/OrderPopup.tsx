import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { openModal } from '../../../../redux/actions/cart.actions';
import { ReactComponent as MinusButton } from '../../../../assets/icons/minus.svg';
import { ReactComponent as PlusButton } from '../../../../assets/icons/plus.svg';

// Might not use this
const OrderPopup: React.FC = (props: any) => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};

	console.log('props at OrderPopup', props);

	return (
		<ModalWrapper onClick={() => props.openModal(false)}>
			<Modal
				isOpen={props.isModalOpen}
				// onAfterOpen={afterOpenModal}
				// onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Order Item"
			>
				<ItemContainer>
					<ItemHeader>
						<h3>{props.currentSelectedItem.name}</h3>
					</ItemHeader>
					<ItemPrice>
						<span>${props.currentSelectedItem.price}</span>
					</ItemPrice>
					<Footer>
						<PanelSection>
							<PanelButtons>
								<MinusButton />
							</PanelButtons>

							<div>1</div>
							<PanelButtons>
								<PlusButton />
							</PanelButtons>
						</PanelSection>
						<span>Add to cart</span>
					</Footer>
				</ItemContainer>
			</Modal>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	box-shadow: ${(props) => props.theme.shadow};
`;

const ItemContainer = styled.div`
	height: 10em;
	width: 20em;
	background: white;

	border-radius: 1em;
	display: flex;
	flex-direction: column;
`;

const ItemHeader = styled.div`
	height: 3em;
	width: 100%;
	padding: 0.2em 0.1em;

	h3 {
		font-size: ${(props) => props.theme.fonts.size.medium};
	}
`;

const ItemPrice = styled.div`
	height: 2em;
	width: 100%;
	padding: 0.2em 0.1em;

	span {
		font-size: ${(props) => props.theme.fonts.size.small};
	}
`;

const Footer = styled.div`
	display: grid;
	width: 100%;

	grid-template-columns: 1fr 1fr;
`;

const PanelSection = styled.div`
	grid-column: 1 / 2;
	border: solid 0.1px red;
`;
const PanelButtons = styled.button`
	height: 1em;
	border-radius: 50%;	
`;

const Button = styled.button`
	width: 100%;
	grid-column: 2 / -1;
	background: ${(props) => props.theme.colors.black};

	span {
		color: white;
	}
`;

const mapStateToProps = (state: any) => {
	return {
		isModalOpen: state.cart.isModalOpen,
		currentSelectedItem: state.cart.currentSelectedItem,
	};
};

const mapDispatchToProps = (dispatch: any) => ({
	openModal: (toOpenModal: boolean) => {
		dispatch(openModal(toOpenModal));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPopup);
