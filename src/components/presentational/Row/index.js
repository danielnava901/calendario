import React from 'react';

const Row = (props) => {
	return (
		<div className="row" key={props.index}
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

Row.defaultProps = {
	index: 0
};

export default Row;