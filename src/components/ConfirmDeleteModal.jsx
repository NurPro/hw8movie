import React from 'react';
import { Modal } from './Modal';
import Button from './UI/button/Button';
import styled from 'styled-components';

const ConfirmDeleteModal = ({ onClose, onConfirm }) => {
	return (
		<Modal onClose={onClose}>
			<ModalCenter>
				<p>Вы уверенны что хотите удалить?</p>
				<Button color='red' onClick={onClose}>
					Нет
				</Button>
				<Button color='blue' onClick={onConfirm}>
					Да
				</Button>
			</ModalCenter>
		</Modal>
	);
};
export default ConfirmDeleteModal;

const ModalCenter = styled.div`
	margin-top: 23%;
	margin-left: 25%;
	font-size: 25px;
`;
