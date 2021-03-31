import React from 'react';

import './Card.scss';

const Card = ({ name, srcImage }) => {
	return (
		<div className="card-root">
			<img src={require(`../../assets/images/${srcImage}`).default} alt="" />
			<p className="label">{name}</p>
		</div>
	)
}

export default Card;