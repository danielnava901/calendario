import React from 'react';
import Page from "../../presentational/Page";

const PortadaMarzo = () => {
	return (
		<Page bgColor="rgb(153,206,176)"
			  textColor="rgb(216,237,225)"
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
					bottom: "120px"
				}}>Marzo</span>

				<div style={{
					position: "absolute",
					right: "140px",
					top: "220px"
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

export default PortadaMarzo;