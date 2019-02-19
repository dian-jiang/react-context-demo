import React from "react";
import ThemeContext from "./context";
import D from "./D.jsx";

class A extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={"green"}>
        <D />
      </ThemeContext.Provider>
    );
  }
}

export default A;
