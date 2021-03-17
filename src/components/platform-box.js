import React from 'react';

import Facebook from '../img/icon-fb';
import Twitter from '../img/icon-twitter';
import Instagram from '../img/icon-insta';
import Youtube from '../img/icon-youtube';

const PlatformBox = ({place, name, number, text, difference, unique}) => {

	const tooBig = () => {
		if (number > 9999) return String(number).substr(0, String(number).length-3)+"k";
		else return number;
	}

	const arrow = () => {
		if (difference < 0) return "▼";
		else return "▲";
	}

	const places = () => {
		if (place === "facebook") return <Facebook/>;
		if (place === "instagram") return <Instagram/>;
		if (place === "twitter") return <Twitter/>;
		if (place === "youtube") return <Youtube/>;
	};

	return (
		<div className="pBox" id={"platform"+unique}>
			<div className="upLine"></div>
			<div className="nameContainer">
				<span>{places()}</span>
				<span className="platName"> @{name}</span>
			</div>
			<div className="amount">
				<p className="bigNum">{tooBig()}</p>
				<p className="followers">{text.toUpperCase()}</p>
			</div>
			<div className="tendency" style={{color: `${difference < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}`}}>
				<span className="tenNum"><span className="arrows">{arrow()} </span>{Math.abs(difference)}</span>
				<span> Today</span>
			</div>
		</div>
	)
}

export default PlatformBox;