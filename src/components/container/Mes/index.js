import React from 'react';
import Page from "../../presentational/Page";
import Dia from "../../presentational/Dia";
import Row from "../../presentational/Row";
import Month from "../../presentational/Month";

const Mes = (props) => {

	let weeks = [];
	let j = 1;
	for(let i = 1; i <= 5; i++) {
		let week = [];

		for(let k = 1; k <= 7; k++) {
			let day = (j - props.start) <= 0 ?
				(props.daysLastMonth - (props.start - j)) : (
					(j -props.start > props.days) ? ( 1 - (7-k) ) : (j - props.start)
				);

			week.push({num: day});
			j = j + 1;
		}

		weeks.push(week);
	}

	console.log("r", weeks);

	return (
		<Page bgColor="white"
			  circleBgColor="rgb(129,192,204)"
			  circleStyle={{
			  	right: "60px",
			  	top: "20px"
			  }}
		>
			<div >
				<Month name={props.name} />
				<div className="container" >
					<Row>&nbsp;</Row>
						{
							weeks.map((week, indexWeek) => {
								console.log("w", week);
								return <Row index={indexWeek}>
									{
										week.map((day, indexDay) => {
											return <Dia index={indexDay} day={day.num} dayBorder="rgb(58,143,122)"/>
										})
									}
								</Row>
							})
						}
				</div>
			</div>
		</Page>
	);
};

Mes.defaultProps = {
	days: 30,
	start: 0,
	daysLastMonth: 30
};

export default Mes;