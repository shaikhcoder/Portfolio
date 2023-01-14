import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import Header from "./Header";
import Section from "./homeSecTion";
import HireBtn from "./hire_btn";
import Footer from "./Footer";
import SimHeader from "./simpleHeader";
import Projects from "./project";
import PageNot from "./errorPage";
import "./style.css"
import "./card.css"
import "./btn_hire.css"
function App() {
  

  return createBrowserRouter([
    {
      path: "/",
      element: <><Header dataOther={Section} />  <HireBtn />  <Footer /></>

    },
    {
      path: "/Contact",
      element: <><SimHeader />   </>
    }, {
      path: "./pdf/resume.pdf"
    }, {
      path: "/Projects",
      element: <> <Projects  />  </>
    },{
path:"*",
element:<PageNot/>
}

  ])
}

export default App