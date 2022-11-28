// import './App.css';
// import PersonComponent from './person';





// const studentNames=["Anar", "Bolor", "Bold"]

// // const people={
// //   name:"Jamia",
// //   seatNumber:3
// // },
// // {
// //   name:"Bolor",
// //   seatNumber:2
// // }


// function App() {
//   return (
//     <div className="App">
//       {studentNames.map((firstName,nameIdx)=>{
//         return (<PersonComponent firstName={firstName} 
//           key={nameIdx}/>
//         )
        
//       })}
   
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import CarOwnerParent from './car-owners-prop/parent';

//ene door bga car owner gesen dasgaliinh

// function App() {
//   return (
//     <div className='App'>
//       <CarOwnerParent />
//     </div>
//   )
// }

// export default App;

// import './airbnb/airbnb.css'
// import AirbnbParent from './airbnb/airbnb-parent'
// import NavParent from './airbnb/navbar'
// import IconBar from './airbnb/iconbar'

// function App() {
//   return (
//     <div className='App'>
//       <NavParent/>
//       <IconBar/>
//       <AirbnbParent/>
//     </div>
//   )
// }

// export default App;


// import './App.css';
// import FireworkState from './Component/exercise/counter';

// function App() {
//   return (
//     <div className='App'>
//       {/* <DemoUsesStates /> */}
//       < FireworkState/>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import SampleData from './Component/exercise/jsondata';



// function App() {
//   return (
//     <div className='App'>
//       {/* <CounterStates /> */}
//       {/* < FireworkStates/> */}
//        < SampleData/>

//     </div>
//   );
// }

// export default App;
// import './App.css';
// import LanguagePicker from './Component/exercise/languagePicker'



// function App() {
//   return (
//     <div className='App'>
//       <LanguagePicker />
//       {/* <ToDoListParent /> */}
//     </div>
//   )
// }

// export default App


// import "./Component/memorycard/memoryCard.css"
// import MemoryGame from './Component/memorycard/memoryCard';
// // import ImageSlider from "./Component/imageSlider/imageSlider";
// // import "./Component/imageSlider/imageSlider.css"
// // import EmployeeList from "./Component/employeelist";
// // import "./Component/employeelist/employeelist.css"



// function App() {
//   return (
//     <div className='App'>
//        < MemoryGame/>
//        {/* <EmployeeList/> */}
//        {/* < ImageSlider/> */}

//     </div>
//   )
// }

// export default App
// import React,{useState} from "react";
// import './App.css'

// const App=()=>{
// const[state, setState]=useState(true)
// return(
//   <div className={state ? "green": "red"}>
//     {state ? "true" : "false"}
//     <button onClick={()=>setState((curr)=>!curr)}>Change status</button>

//   </div>
// )

// }

// export default App

// import LanguageStates from './exercise/languagePicker';
// import NameFieldParent from './exercise/namefieldParent'

// import Tictac from './tictactoe/tictac2'
// import Tictactoe from './tictactoe/tictactoe'
// import ControlledComp from './form/form'



// import LiveDisplayClock from './Component/useEffect/livedisplayclock'
// import ToDoList from './form/todo-exerice'
// import UseEffectPlayground from './Component/useEffect/useEffect'
// import SearchFilter from './Component/searchFilter/searchFilter'
// import './form/form.css'
// import './Component/searchFilter/searchFilter.css'
// import './Component/form/form.css'
// import DecCount from './form/test'
// import ToDoList from './form/todo-exerice'



// import './form/from.css'
// import MemoryParent from './memoryCard/memoryparent';
// import NameFieldParent from './exercise/namefieldParent';
// import Profile from './exercise/profilecard';
// import StarRating from './exercise/starRating';
// import BmiTracker from "./Component/bmiTracker/bmitracker";
// import './Component/bmiTracker/bmitracker.css'
// import { EmployeeList } from "./Component/employeelist";
// // import LiveClock from "./Component/liveClock/liveClock"
// import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import './App.css'
// import LiveClock from "./Component/liveClock/liveClock"
// import Tictac from "./tictactoe/tictac2"
// // import './Component/liveClock/liveClock.css'
// // import ImageSlider from './Component/imageSlider/imageSlider'
// // import './Component/imageSlider/imageSlider.css'



// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <Routes>
  
//         <Route path="/page1" element={<LiveClock/>} />
//         <Route path="/page2" element={<Tictac/>} />
//         <Route path="/page3" element={<LiveClock/>} />

//         <Route path="/tictactoe" element={<Tictac/>} />
//         <Route path="/liveClock" element={<LiveClock/>} />
//       </Routes>
//       </BrowserRouter>
//       </div>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Tictac from './tictactoe/tictac2'
import './tictactoe/tictoe.css'
import LiveClock from './Component/liveClock/liveClock'
import './Component/liveClock/liveClock.css'
import BmiTracker from './Component/bmiTracker/bmitracker'
import "./Component/bmiTracker/bmitracker.css"
import ImageSlider from './Component/imageSlider/imageSlider'
import "./Component/imageSlider/imageSlider.css"
import MyProjects from './Component/router-playground/myproject'
import "./Component/router-playground/myproject.css"
import AirbnbParent from './airbnb/airbnb-parent'
import "./airbnb/airbnb.css"
import LanguageStates from './exercise/languagePicker'
import "./exercise/language.css"
import ControlledComp from './form/form'
import "./form/form.css"
import StarRating from './exercise/starRating'
import FireworkState from './exercise/firework-exercise'
import "./Component/employeelist/employeelist.css"
import EmployeeList from './Component/employeelist'

// *****
function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<MyProjects/>}>
        
     
        <Route path="tic-tac-toe" element={<Tictac />} />
        <Route path="live-clock" element={<LiveClock />} />
        <Route path="bmi-tracker" element={<BmiTracker />} />
        <Route path="image-slider" element={<ImageSlider/>} />
        <Route path="airbnb" element={<AirbnbParent/>} />
        <Route path="lan-picker" element={<LanguageStates/>} />
        <Route path="form" element={<ControlledComp/>} />
        <Route path="star-rating" element={<StarRating/>} />
        <Route path="firework" element={<FireworkState/>} />
        <Route path="employee-list" element={<EmployeeList/>} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
// *****






// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Page from './Component/router-playground/page'
// import PageSharedLayout from './Component/router-playground/layout'

// import Page1 from './Component/router-playground/page1'
// import Page2 from './Component/router-playground/page2'
// import Page3 from './Component/router-playground/page3'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/pages" element={<PageSharedLayout />}>
//           <Route index element={<Page3 />} />
//           <Route path="new" element={<Page2 />} />
//           <Route path=":pageId" element={<Page />} />
//         </Route>
//         <Route path="*" element={<Page1/>} />

//         {/* <Route path="/page1" element={<Page1 />} />
//         <Route path="/page2" element={<Page2 />} />
//         <Route path="/page3" element={<Page3 />} />

//         <Route path="/element-sample" element={<h2>h2 element</h2>} /> */}

//         {/* <Route path="/tic-tac-toe" element={<TicTacToe />} />
//         <Route path="/language-selector" element={<LanguageSelector />} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



 