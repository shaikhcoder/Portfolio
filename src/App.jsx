import React from "react";
import {
  Route,Routes,redirect
} from "react-router-dom";
import Header from "./Header";
import Section from "./homeSecTion";
import HireBtn from "./hire_btn";
import Footer from "./Footer";
import SimHeader from "./simpleHeader";
import Projects from "./project";
import PageNot from "./errorPage";

function App() {
  

  return <Routes>
<Route path="Portfolio/" element={<><Header dataOther={Section} />  <HireBtn />  <Footer /></>} />
<Route path="Portfolio/Contact" element={<><SimHeader />   </>}/>
<Route path="./pdf/resume.pdf"/>
<Route path= "Portfolio/Projects" element={<> <Projects  />  </>} />
<Route path="*" element={redirect("/")}/>




</Routes>

}

export default App