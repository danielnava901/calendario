import React from 'react';
import Page from "../../presentational/Page";

const Portada = () => {
	return (
		<Page>
			<div style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				color: "rgba(20,20,20, 0.9)",
			}}>
				<span style={{
					fontSize: "15rem",
					fontFamily: 'BioRhyme, sans-serif',
				}}>2020</span>

				<div style={{
					display: "flex",
					width: "50%",
					justifyContent: "center"
				}}>
					<span style={{
						fontFamily: 'BioRhyme, sans-serif',
						fontWeight: "bold"
					}}>INP Emanuel</span>
					<span style={{
						fontFamily: 'BioRhyme, sans-serif',
						fontWeight: "bold",
						marginLeft: "100px"}}>Daniel Viveros</span>
				</div>
			</div>
		</Page>
	);
};

export default Portada;