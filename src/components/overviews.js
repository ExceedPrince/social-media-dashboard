import React from 'react';
import OvwBox from './ovw-box';
import data from '../sample-data';

const Overviews = () => {
	
	return (
		<div className="overviews">
			{data.events.map((event,index) => (
				<OvwBox platform={event.platform} type={event.type} amount={event.amount} modifier={event.modifier} unique={index} key={index}/>
			))}
		</div>
	)
}

export default Overviews;