import React, { Component } from 'react';

class ButtonUp extends Component {
    componentWillMount() {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.src = "effect.js";
        head.appendChild(script);
      }
    render() {
        return (
<a href="/" className="btn btn-success btn_up">
  <div className="fa fa-arrow-up" />
</a>
        );
    }
}

export default ButtonUp;