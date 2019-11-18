import React from 'react';

const Row = (props) => {
	return (
		<div className="row"
			style={{
				display: "flex",
				justifyContent: "space-around"
			}}>
			{
				props.children
			}
		</div>
	)
};


export default Row;