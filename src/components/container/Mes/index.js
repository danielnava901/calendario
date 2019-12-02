import React from 'react';
import Page from "../../presentational/Page";
import Dia from "../../presentational/Dia";
import Row from "../../presentational/Row";
import Month from "../../presentational/Month";

const Mes = (props) => {

	let weeks = [];
	let j = 1;
	let h = 1;
	for(let i = 1; i <= 5; i++) {
		let week = [];

		for(let k = 1; k <= 7; k++) {
			let day;
			let activities;
			let dayBorder;

			if(j - props.start <= 0) {
				day = (props.daysLastMonth - (props.start - j));
				activities = [];
				dayBorder= "gray";
			}else if(j - props.start > props.days) {		
				day = h;
				h = h + 1;
				activities = [];
				dayBorder= "gray";
			}else {
				day = (j - props.start);	
				activities = props.activities[day] ? props.activities[day] : [];
				dayBorder= props.primaryColor;
			}

			week.push({
				num: day, 
				activities, 
				dayBorder
			});

			j = j + 1;
		}

		weeks.push(week);
	}


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
											return <Dia index={indexDay} 
												day={day.num} 
												dayBorder={day.dayBorder}
												activities={day.activities}
												onClickDay={props.onClickDay}

												/>
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
	daysLastMonth: 30,
	activities: [],
	primaryColor:"black", 
	secondaryColor:"gray",
	onClickDay: () => {}
};

export default Mes;