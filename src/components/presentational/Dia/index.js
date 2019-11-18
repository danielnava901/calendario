import React from 'react';

const Dia = (props) => {
	return (
		<div
			 style={{
				height: "100px",
				 width: "13%"
			 }}>
			<div style={{
				border: `1px solid ${props.dayBorder}`,
				position: "relative",
				width: "100%",
				height: "100%",
				borderRadius: "0 10px 0 0"
			}}>
				<div style={{
					position: "absolute",
					left: "10px",
					top: "10px",
					fontWeight: "bold",
					fontFamily: 'Poppins, sans-serif',
					color: "rgba(20,20,20, 0.8)"
				}}>{props.day}</div>

			</div>
		</div>
	)
};

Dia.defaultProps = {
	dayBorder: "black"
};

export default Dia;