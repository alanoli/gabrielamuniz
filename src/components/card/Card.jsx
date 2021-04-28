import React from 'react';

import './Card.scss';

const Card = ({ name, srcImage, linkUrl, copyToClipboard, onClickAction }) => {

	// const fieldRef = useRef(null);

	const handleClick = () => {
		if (copyToClipboard) {
			navigator.clipboard.writeText(linkUrl);
			onClickAction();
		} else {
			window.location.assign(linkUrl)
		}
	}

	return (
		<div
			className="card-root"
			onClick={handleClick}
		>
			<img src={require(`../../assets/images/${srcImage}`).default} alt="" />
			<p className="label">{name}</p>
		</div >
	)
}

export default Card;