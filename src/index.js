import React from "react";
import { render } from "react-dom";

class StorePicker extends React.Component {
  render() {
    return <p>I am a Store Picker!</p>;
  }
}

render(<StorePicker />, document.querySelector("#main"));
