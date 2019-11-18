import React from 'react';
import Page from "../../presentational/Page";
import Dia from "../../presentational/Dia";
import Row from "../../presentational/Row";
import Month from "../../presentational/Month";

const Marzo = () => {
	return (
		<Page bgColor="white"
			  circleBgColor="rgb(216,237,225)"
			  circleStyle={{
				  right: "60px",
				  top: "20px"

			  }}
		>
			<div >
				<Month name="Marzo" monthStyle={{
					right: "unset", bottom: "-55px",
					top: "unset", left: "10px"
				}}/>

				<div className="container">
					<Row>&nbsp;</Row>
					<Row>

						<Dia day={1} dayBorder="rgb(153,206,176)"/>
						<Dia day={2} dayBorder="rgb(153,206,176)"/>
						<Dia day={3} dayBorder="rgb(153,206,176)"/>
						<Dia day={4} dayBorder="rgb(153,206,176)"/>
						<Dia day={5} dayBorder="rgb(153,206,176)"/>
						<Dia day={6} dayBorder="rgb(153,206,176)"/>
						<Dia day={7} dayBorder="rgb(153,206,176)"/>
					</Row>
					<Row>

						<Dia day={8} dayBorder="rgb(153,206,176)"/>
						<Dia day={9} dayBorder="rgb(153,206,176)"/>
						<Dia day={10} dayBorder="rgb(153,206,176)"/>
						<Dia day={11} dayBorder="rgb(153,206,176)"/>
						<Dia day={12} dayBorder="rgb(153,206,176)"/>
						<Dia day={13} dayBorder="rgb(153,206,176)"/>
						<Dia day={14} dayBorder="rgb(153,206,176)"/>
					</Row>
					<Row>

						<Dia day={15} dayBorder="rgb(153,206,176)"/>
						<Dia day={16} dayBorder="rgb(153,206,176)"/>
						<Dia day={17} dayBorder="rgb(153,206,176)"/>
						<Dia day={18} dayBorder="rgb(153,206,176)"/>
						<Dia day={19} dayBorder="rgb(153,206,176)"/>
						<Dia day={20} dayBorder="rgb(153,206,176)"/>
						<Dia day={21} dayBorder="rgb(153,206,176)"/>
					</Row>
					<Row>

						<Dia day={22} dayBorder="rgb(153,206,176)"/>
						<Dia day={23} dayBorder="rgb(153,206,176)"/>
						<Dia day={24} dayBorder="rgb(153,206,176)"/>
						<Dia day={25} dayBorder="rgb(153,206,176)"/>
						<Dia day={26} dayBorder="rgb(153,206,176)"/>
						<Dia day={27} dayBorder="rgb(153,206,176)"/>
						<Dia day={28} dayBorder="rgb(153,206,176)"/>
					</Row>
					<Row>
						<Dia day={29} dayBorder="rgb(153,206,176)"/>
						<Dia day={30} dayBorder="rgb(153,206,176)"/>
						<Dia day={31} dayBorder="rgb(153,206,176)"/>
						<Dia day={1} dayBorder="gray"/>
						<Dia day={2} dayBorder="gray"/>
						<Dia day={3} dayBorder="gray"/>
						<Dia day={4} dayBorder="gray"/>

					</Row>
				</div>
			</div>
		</Page>
	);
};

export default Marzo;