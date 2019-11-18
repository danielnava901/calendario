import React from 'react';

const Month = (props) => {
	let monthStyle = Object.assign({},
		{
			position: "absolute",
			top: "-95px",
			left: "40px",
			color: "rgba(30,30,30, 0.2)"
		},
		props.monthStyle
		);


	return (
		<div style={monthStyle}>
			<div className="row">
				<div className="col col-sm-12">
					<span style={{
						fontSize: "12rem",
						fontFamily: "Questrial, sans-serif"
					}}>{props.name}</span>
				</div>
			</div>
		</div>
	)
};

Month.defaultProps = {
	monthStyle: {}
};

export default Month;