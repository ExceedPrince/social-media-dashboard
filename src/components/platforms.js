import React from 'react';
import PlatformBox from './platform-box';
import data from '../sample-data';


const Platforms = () => {

	return (
		<div className="platforms">
			{data.platforms.map((item,index) => (
				<PlatformBox 
					name={Object.values(item)[0].name}
					number={Object.values(item)[0].number} 
					text={Object.values(item)[0].text} 
					difference={Object.values(item)[0].difference} 
					place={Object.keys(item)[0]} 
					unique={index} 
					key={index}
				/>
			))}
		</div>
	)
}

export default Platforms;
