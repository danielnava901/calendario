import React from 'react';

const Dia = (props) => {
	return (
		<div
			key={props.index}
			 style={{
				height: "89px",
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
				}}>
					<div>{props.day}</div>
					{
						props.activities.map(act => {
							return <div>{act.name}</div>
						})
					}
				</div>

			</div>
		</div>
	)
};

Dia.defaultProps = {
	dayBorder: "black",
	index: 0,
	activities: []
};

export default Dia;