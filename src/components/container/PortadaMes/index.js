import React from 'react';
import Page from "../../presentational/Page";

const PortadaMes = (props) => {
	return (
    <Page 
        bgColor={props.primaryColor}
			  textColor={props.secondaryColor}
			  circleBgColor="yellow"
			  circleStyle={{
				  right: "60px",
				  bottom: "40px",

			  }}
		>
			<div style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				position: "relative"
			}}>
				<span style={{
					fontSize: "10rem",
					fontFamily: 'BioRhyme, sans-serif',
					position: "absolute",
					left: "40px",
					top: "120px"
				}}>{props.name}</span>

				<div style={{
					display: "flex",
					width: "50%",
					justifyContent: "flex-end"
				}}>
					<span style={{
						fontFamily: 'BioRhyme, sans-serif',
						fontWeight: "bold"
					}}>[Imagen de fondo]</span>
				</div>

			</div>
		</Page>
	);
};

PortadaMes.defaultProps = {
  name: "[Mes]",
  primaryColor: "rgb(58,143,122)",
  secondaryColor: "rgb(129,192,204)"
};

export default PortadaMes;