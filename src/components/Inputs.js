import React from 'react';
import arrow from '../images/icon-arrow.svg';

const Inputs = ({ value, setValue, submitHandler }) => {
	const changeHandler = (e) => {
		setValue(e.target.value);
	};

	return (
		<section className="inputs">
			<input
				className="inputs--input"
				type="text"
				value={value}
				onChange={changeHandler}
				placeholder="192.212.174.101"
			/>
			<button className="inputs--btn btn" onClick={submitHandler}>
				<img src={arrow} alt="arrow" />
			</button>
		</section>
	);
};

export default Inputs;
