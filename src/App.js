//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import JSX from './JSX'
//import Events from './Events'
//import DemoExample from './DemoExample'
//import StateExample from './StateExample'
//import FuncProps from './FuncProps'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App(){
  return(
    <section>     
     {/*<h1>Hii mamu</h1>
      <p>How r u</p>
      <img src="https://img.freepik.com/premium-vector/moon-sun-happy-accompanied_24911-59600.jpg"alt="my everything"width="25%"/>
      <ClassComponent/>*/}
     {/*<PropsExample name="Devi Sri" age="20"/>
     <PropsExample name="viga" age="22"/>*/}
      {/*<FuncProps carname="rolls royce" year="1996"/>*/}
      {/*<StateExample/>*/}
      {/*<DemoExample name="Devi Sri"/>
      <Events/>
      <JSX/>*/}
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    </section>
  )
}
export default App