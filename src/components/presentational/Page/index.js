import React from 'react';

const Page = (props) => {

	let circleStyle = Object.assign({},
		{
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",

			zIndex: "99",
			backgroundColor:`${props.circleBgColor}`
		}, props.circleStyle
		);



	return (
		<div
			 style={{
			     backgroundColor: `${props.bgColor}`,
				 height: "100vh",
				 marginTop: "0",
				 position: "relative",
				 paddingBottom: "50px",
				 color: `${props.textColor}`
			 }}>
			<div style={circleStyle} />

			{
				props.children
			}

		</div>
	);
};

Page.defaultProps = {
	bgColor: 'white',
	circleBgColor: "blue",
	textColor: "#151515",
	circleStyle: {
		top: "40px",
		right: "60px"
	}
};

export default Page;