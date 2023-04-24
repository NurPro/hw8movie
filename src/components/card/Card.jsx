import React, { useState } from 'react';
import Button from '../UI/button/Button';
import styled from 'styled-components';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

const Card = (props) => {
	const { data } = props;

	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModalHandler = () => {
		setModalVisible((prevState) => !prevState);
	};

	const confirmHandler = () => {
		setModalVisible(false);
		props.deleteMovieHandler(props.data.id);
	};

	return (
		<>
			{isModalVisible ? (
				<ConfirmDeleteModal
					onClose={toggleModalHandler}
					onConfirm={confirmHandler}
				/>
			) : null}
			<MovieList>
				<MovieElement>
					<MovieImageContainer>
						<MovieImage src={data.img} alt={data.title} />
					</MovieImageContainer>
					<MovieInfoContainer>
						<div>
						<H2Title>{data.title}</H2Title>

						</div>
						<MovieRating>{data.rating}/5</MovieRating>
						<Button color='red' onClick={toggleModalHandler}>
							delete
						</Button>
						<Button color='blue'>Edit</Button>
					</MovieInfoContainer>
				</MovieElement>
			</MovieList>
		</>
	);
};

export default Card;

const MovieList = styled.div`
	list-style: none;
	width: 50rem;
	max-width: 60%;
	margin: auto;
	padding: 0;
`;

const MovieElement = styled.li`
	margin: 1rem 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
	display: flex;
`;

const MovieImageContainer = styled.div`
	width: 200px;
	border-radius: 10px;
	height: 200px;
`;

const MovieImage = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 10px;
`;

const MovieInfoContainer = styled.div`
	/* flex: 1;
	padding: 2rem; */
`;
const H2Title=styled.h2`
	text-align: left;
 
	padding-top: 1.5rem;
	margin-left: 2rem;
`
const MovieRating = styled.p`
	font-size: 1.25rem;
	color: white;
	display: inline;
	background: orange;

	margin-left: 40px;
	padding: 0.25rem 2rem;
	border-radius: 15px;
`;
