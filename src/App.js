import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import Footer from "./components/Navigation";
import {Route, Routes } from "react-router-dom"; // import BrowserRouter, Switch and Route from react-router-dom
import Contact from "./components/Contact"; // import the Contact component
import Detail from "./components/Detail";
import { Container, Icon, Select, Textarea, TextInput} from 'react-materialize';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import News from "./components/News";
import About from "./components/About";

function App() {
  return (
      <div className="App">
        <Navigation />
        <Routes> 
          <Route path="/" element={<Main/>} />
          <Route path="/contact" element={<Contact/>}  /> 
          <Route path="/news" element={<News/>}  /> 
          <Route path="/about" element={<About/>}  /> 
          <Route path='/detail/:id' element={<Detail />}></Route>
          </Routes>
        <Footer/>
      </div>

  );
}

export default App;
