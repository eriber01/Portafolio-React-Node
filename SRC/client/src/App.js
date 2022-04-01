import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Me from "./Components/Me/Me";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState } from "react";


import ScrollContext from "./context/ScrollContext";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import ProjectPage from "./Components/ProjectPage/ProjectPage";
import Login from "./Components/Login/Login";
import CMSProject from "./Components/CMS Project/CMSProject";

function App() {

  const [ScrollState, setScrollState] = useState(null)

  const ScrollData = () => {
    window.onscroll = () => {
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
        <ToastContainer position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
              <Me />
              <Skill />
              <Project />
              <Contact />
            </Route>

            <Route path='/projectDetails'>
              <ProjectPage />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/CMSProject'>
              <CMSProject />
            </Route>
          </Switch>
        </Router>
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
