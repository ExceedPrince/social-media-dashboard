import React from 'react';

import Facebook from '../img/icon-fb';
import Twitter from '../img/icon-twitter';
import Instagram from '../img/icon-insta';
import Youtube from '../img/icon-youtube';

const OvwBox = ({platform, type, amount, modifier, unique}) => {

	const tooBig2 = () => {
		if (amount > 9999) return String(amount).substr(0, String(amount).length-3)+"k";
		else return amount
	}

	const arrow2 = () => {
		if (modifier < 0) return "▼";
		else return "▲";
	}

	const plats = () => {
		if (platform === "facebook") return <Facebook/>
		if (platform === "instagram") return <Instagram/>
		if (platform === "twitter") return <Twitter/>
		if (platform === "youtube") return <Youtube/>
	};

	return (
		<div className="oBox" id={"event"+unique}>
			<div className="topDiv">
				<span className="data-type">{type}</span>
				<span className="logo">{plats()}</span>
			</div>
			<div className="bottomDiv">
				<span className="mediumNum">{tooBig2()}</span>
				<span className="diff" style={{color: `${modifier < 0 ? "hsl(356, 69%, 56%)" : "hsl(163, 72%, 41%)"}`}}><span className="arrows">{arrow2()} </span>{Math.abs(modifier)}%</span>
			</div>
		</div>
	)
}

export default OvwBox;