import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList';

function Portfolio(props) {
	const { name, description } = currentCategory;
    return (
		<section>
		  <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
		  <p>{description}</p>
		  <ProjectList category={currentCategory.name} />
		</section>
	);
}

export default Portfolio;

