import React, {useState} from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
	const [photos] = useState([
		{
			name: 'Run Buddy Website',
			category: 'projects',
			description: 'A project where I used pure  and CSS to create a running blog',
			link: 'https://jbaca22.github.io/Run-Buddy/',
		},

		{
			name: 'Game Finder',
			category: 'projects',
			description: 'A project using javascript that lets you find a new video game to play!',
			link: 'https://gray-turtle.github.io/game-finder/quiz.html',
		},
		{
			name: 'Business Website',
			category: 'projects',
			description:'a website built for an esthetician business',
			link: 'https://jbaca22.github.io/skinsalvation/',
		},
		{
			name: 'Work Day Scheduler',
			category: 'projects',
			description: 'A simple scheduler designed to help keep peopl organized',
			link: 'https://jbaca22.github.io/Work-Day-Scheduler/',
		},
	]);

	const [isModalOpen, setIsModalOpen] = useState(false);
  	const [currentPhoto, setCurrentPhoto] = useState();
  	const currentPhotos = photos.filter((photo) => photo.category === category);
  	const toggleModal = (image, i) => {
    	setCurrentPhoto({...image, index: i});
    	setIsModalOpen(!isModalOpen);
  }
  	return (
		<div>
		{isModalOpen && (
			<Modal currentPhoto={currentPhoto} onClose={toggleModal} />
		)}
		<div className="flex-row">
			{currentPhotos.map((image, i) => (
			<a href={image.link}><img
			src={require(`../../assets/pictures/${category}/${i}.jpg`)}
			alt={image.name}
			className="img-thumbnail mx-1"
			onClick={() => toggleModal(image, i)}
			key={image.name}
			/></a>
			))}
		</div>
		</div>
  	);
};

export default PhotoList;



