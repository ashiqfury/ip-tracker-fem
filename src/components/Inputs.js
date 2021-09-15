import React from 'react';
import arrow from '../images/icon-arrow.svg';

const Inputs = ({ value, setValue, submitHandler }) => {
	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	const keyHandler = (e) => {
		if (e.keyCode === 13) submitHandler();
		return;
	};

	return (
		<section className="inputs">
			<input
				className="inputs--input"
				type="text"
				value={value}
				onChange={changeHandler}
				onKeyDown={keyHandler}
				placeholder="192.212.174.101"
			/>
			<button className="inputs--btn btn" onClick={submitHandler}>
				<img src={arrow} alt="arrow" />
			</button>
		</section>
	);
};

export default Inputs;
