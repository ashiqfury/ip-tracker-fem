import React from 'react';

const Info = ({ name, head, text }) => {
	return (
		<div className="info">
			<span className="info--head">{head}</span>
			<p className="info--text">{text ? text : '-'}</p>
		</div>
	);
};

export default Info;
