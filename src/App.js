//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
import Events from './Events'
import DemoExample from './DemoExample'
import StateExample from './StateExample'
import FuncProps from './FuncProps'

function App(){
  return(
    <section>     
     {/*<h1>Hii mamu</h1>
      <p>How r u</p>
      <img src="https://img.freepik.com/premium-vector/moon-sun-happy-accompanied_24911-59600.jpg"alt="my everything"width="25%"/>
      <ClassComponent/>*/}
     {/*<PropsExample name="Devi Sri" age="20"/>
     <PropsExample name="viga" age="22"/>*/}
      <FuncProps carname="rolls royce" year="1996"/>
      <StateExample/>
      <DemoExample name="Devi Sri"/>
      <Events/>
    </section>
  )
}
export default App