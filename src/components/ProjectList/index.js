import React, {useState} from 'react';

const ProjectList = ({ category }) => {
	const [projects] = useState([
		{
			name: 'Run Buddy Website',
			category: 'HTML',
			description: 'A project where I used pure HTML and CSS to create a running blog',
		},

		{
			name: 'Game Finder',
			category: 'Javascript',
			description: 'A project using javascript that lets you find a new video game to play!',
		},
		{
			name: ''
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
			<img
			src={require(`../../assets/small/${category}/${i}.jpg`)}
			alt={image.name}
			className="img-thumbnail mx-1"
			onClick={() => toggleModal(image, i)}
			key={image.name}
			/>
			))}
		</div>
		</div>
  	);
};

export default ProjectList;



