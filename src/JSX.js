import React from 'react'

function JSX(){
	/*return(
		<div>
			<h1>Good Morning</h1>
		</div>
	)*/
	return React.createElement(
		"div",
		{id:"one",className:"classone"},
		React.createElement("h1",null,"Good Morning")
		)
}
export default JSX 