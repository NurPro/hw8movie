import React from 'react';
import { Backdrop, Modal } from '../Modal';
import Button from '../UI/button/Button';
import { useRef } from 'react';
import FormInput from '../UI/form-input/FormInput';

const NewMovieModal = (props) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const ratingInputRef = useRef();

	const cancelHandler = (event) => {
		event.preventDefault();
		props.onClose();
	};

	const saveHandler = (event) => {
		event.preventDefault();
		props.onClose();
		const movieData = {
			id: Date.now(),
			title: titleInputRef.current.value,
			rating: ratingInputRef.current.value,
			img: imageInputRef.current.value,
		};
		props.onNewMovieAdd(movieData);
	};

	return (
		<>
			<Modal>
				<Backdrop />
				<form action=''>
					<FormInput
						id='title'
						labelName='Movie title'
						inputType='text'
						ref={titleInputRef}
					/>
					<FormInput
						id='image'
						labelName='Image URL'
						inputType='text'
						ref={imageInputRef}
					/>
					<FormInput
						id='rating'
						labelName='Rating'
						inputType='text'
						placeholder='.../5'
						ref={ratingInputRef}
					/>
					<Button color='red' onClick={cancelHandler}>
						Отмена
					</Button>
					<Button color='blue' onClick={saveHandler}>
						Сохранить
					</Button>
				</form>
			</Modal>
		</>
	);
};

export default NewMovieModal;
