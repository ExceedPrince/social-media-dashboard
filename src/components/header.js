import React from 'react';

const Header = () => {
	return (
		<div className="header">
			<div className="texts">
				<h1>Social Media Dashboard</h1>
				<p>Total Followers: 23,004</p>
			</div>
			<div className="toggler">
				<span>Dark Mode</span>
				<label className="switch">
  				<input type="checkbox"></input>
  				<span className="slider round"></span>
				</label>
			</div>
		</div>
	)
}

export default Header;