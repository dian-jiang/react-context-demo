import React from "react";
import ThemeContext from "./context";

class C extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {coloredTheme => <div style={{ color: coloredTheme }}>Hello World</div>}
      </ThemeContext.Consumer>
    );
  }
}

export default C;
