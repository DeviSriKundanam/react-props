import {Component} from 'react'

class Events extends Component{
	state={
		username:"",
		Note:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.Note)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
			<div>
				<input
				name="username"
				onChange={this.handleChange}
				placeholder="Enter Username"/><br/>
				<input
				name="Note"
				onChange={this.handleChange}
				placeholder="Enter a Note"/><br/>				
				<button onClick={this.handleClick}>submit</button>
			</div>
		)
	}
}
export default Events