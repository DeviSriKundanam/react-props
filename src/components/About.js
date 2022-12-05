import {useState} from 'react'
function About(){
	const [country,setCountry]=useState("India") 
	const [village,setVillage]=useState("vijayawada")
	return(
		<div>
			<h1>{country}</h1>
			<p>{village}</p>
			<input onChange={(e)=>setVillage(e.target.value)}/>
			<button onClick={()=>console.log(village)}>submit</button>
		</div>
	)
}

export default About
