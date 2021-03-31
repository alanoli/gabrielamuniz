import React from 'react';

import './Card.scss';

const Card = ({ name, srcImage, linkUrl }) => {
	return (
		<div className="card-root" onClick={() => window.location.assign(linkUrl)}>
			<img src={require(`../../assets/images/${srcImage}`).default} alt="" />
			<p className="label">{name}</p>
		</div>
	)
}

export default Card;