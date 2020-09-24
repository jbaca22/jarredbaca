import React from 'react';
import PhotoList from '../PhotoList';

function Portfolio({currentCategory}) {
	const { name, description } = currentCategory;
    return (
		<section>
		  <h1 data-testid="h1tag"></h1>
		  <p>{description}</p>
		  <PhotoList category={currentCategory.name} />
		</section>
	);
}

export default Portfolio;

