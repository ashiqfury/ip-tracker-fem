import React from 'react';

const Info = ({ head, text, text2, zone }) => {
	text = text ? text : '';
	return (
		<div className="info">
			<span className="info--head">{head}</span>
			<p className="info--text">
				{zone && text ? 'UTC' + text : text ? text : '-'}
				{text2 ? ', ' + text2 : ''}
			</p>
		</div>
	);
};

export default Info;
