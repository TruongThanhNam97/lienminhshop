import React, { Component } from 'react';
import './../App.css';
import Menu from './Menu';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from './Footer';
import ButtonUp from './ButtonUp';
import { BrowserRouter as Router } from "react-router-dom";
import DieuHuongURL from './DieuHuongURL';
import ImageIllustration from './ImageIllustration';
import FormBuy from './FormBuy';
import Fb from './Fb';


class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <Menu></Menu>
        <Section1></Section1>
        <Section2></Section2>
        <DieuHuongURL></DieuHuongURL>
        <Fb></Fb>
        <Footer></Footer>
        <ButtonUp></ButtonUp>
        <FormBuy></FormBuy>
        <ImageIllustration></ImageIllustration>
      </div>
      </Router>
      //@@
    );
  }
}

export default App;
