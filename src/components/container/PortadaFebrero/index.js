import React from 'react';
import Page from "../../presentational/Page";

const PortadaFebrero = () => {
	return (
		<Page bgColor="rgb(211,46,103)"
			  textColor="rgb(226,137,156)"
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
					right: "40px",
					bottom: "120px"
				}}>Febrero</span>

				<div style={{
					position: "absolute",
					left: "140px",
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

export default PortadaFebrero;