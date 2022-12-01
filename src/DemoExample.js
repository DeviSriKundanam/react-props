import React from 'react'

class DemoExample extends React.Component{
	state={
		s:this.props.name
	}
	render(){
		return(
			<div>
				<p>{this.state.s}</p>
				<h1>{this.props.name}</h1>
			</div>
		)
	}
} 
export default DemoExample