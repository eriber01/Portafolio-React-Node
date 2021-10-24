import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Me from "./Components/Me/Me";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";

import React, {useState, useEffect, useContext} from "react";

import ScrollContext from "./context/ScrollContext";


function App() {

  const [ScrollState, setScrollState] = useState(null)

  const ScrollData = ()=>{
    window.onscroll = ()=>{
      setScrollState(Math.trunc(window.scrollY))
    }
  }

  ScrollData()

  return (
    <ScrollContext.Provider value={{
      name: 'scroll data app',
      ScrollData: ScrollState
    }}>
      <div>
        <Home/>
        <Me/>
        <Skill/>
        <Project/>
        <Contact/>
      </div>
      </ScrollContext.Provider>
  );
}

export default App;
