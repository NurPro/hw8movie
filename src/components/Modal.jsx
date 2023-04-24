import styled from 'styled-components';
import { createPortal } from 'react-dom';

export const Backdrop = ({ onClose }) => {
	return (
		<>
			{createPortal(
				<StyledBackDrop onClick={onClose} />,
				document.getElementById('backdrop')
			)}
		</>
	);
};
export const Modal = ({ onClose, children }) => {
	return (
		<>
			<Backdrop onClose={onClose} />
			{createPortal(
				<>
					<Card>{children}</Card>
				</>,
				document.getElementById('modal')
			)}
		</>
	);
};
const Card = styled.div`
	background-color: #506e86eb;
	justify-content: center;
	padding: 10px;
 	position: fixed;
	width: 600px;
	height: 400px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	border-radius: 30px;
`;

const StyledBackDrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.75);
	z-index: 10;
 `;
